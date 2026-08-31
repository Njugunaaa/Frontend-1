-- Run this entire file in Supabase Dashboard > SQL Editor before using the dashboard.
create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

-- This website has one administrator, not a role-management system.
create unique index if not exists one_admin_user on public.admin_users ((true));

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 1 and 160),
  description text not null default '',
  starts_at timestamptz not null,
  ends_at timestamptz,
  location text not null default '',
  category text not null default '',
  image_url text,
  is_featured boolean not null default false,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- At most one published event controls the homepage countdown.
create unique index if not exists one_featured_published_event
  on public.events ((is_featured)) where is_featured and is_published;

-- Keep the featured event replacement in one database transaction. This makes
-- the homepage countdown deterministic even if a browser request is interrupted.
create or replace function public.keep_one_featured_event()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.is_featured and new.is_published then
    update public.events
    set is_featured = false, updated_at = now()
    where is_featured = true and is_published = true and id <> new.id;
  end if;
  return new;
end;
$$;

drop trigger if exists one_featured_event_before_write on public.events;
create trigger one_featured_event_before_write
before insert or update of is_featured, is_published on public.events
for each row execute function public.keep_one_featured_event();

create table if not exists public.sermons (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 1 and 160),
  speaker_or_leader text not null default '',
  description text not null default '',
  media_url text not null check (media_url ~* '^https?://'),
  published_at date not null,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;
alter table public.events enable row level security;
alter table public.sermons enable row level security;

drop policy if exists "Public can view published events" on public.events;
drop policy if exists "Admin manages events" on public.events;
drop policy if exists "Public can view published sermons" on public.sermons;
drop policy if exists "Admin manages sermons" on public.sermons;
drop policy if exists "Admin can see their own role" on public.admin_users;

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admin_users where user_id = auth.uid());
$$;

create policy "Public can view published events" on public.events for select using (is_published);
create policy "Admin manages events" on public.events for all using (public.is_admin()) with check (public.is_admin());
create policy "Public can view published sermons" on public.sermons for select using (is_published);
create policy "Admin manages sermons" on public.sermons for all using (public.is_admin()) with check (public.is_admin());
create policy "Admin can see their own role" on public.admin_users for select using (auth.uid() = user_id);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('event-images', 'event-images', true, 5242880, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update set
  public = true,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;
drop policy if exists "Public can view event images" on storage.objects;
drop policy if exists "Admin manages event images" on storage.objects;
create policy "Public can view event images" on storage.objects for select using (bucket_id = 'event-images');
create policy "Admin manages event images" on storage.objects for all using (bucket_id = 'event-images' and public.is_admin()) with check (bucket_id = 'event-images' and public.is_admin());

-- After creating the single Auth user in Supabase, run this once with that user's UUID:
-- insert into public.admin_users (user_id) values ('YOUR_AUTH_USER_UUID');

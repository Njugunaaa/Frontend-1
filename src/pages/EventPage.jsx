import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { getPublishedEvents } from '../lib/eventApi';
import Logo from '../assets/mainlogo.png';

// ─── 2026 MASTER CALENDAR EVENTS ───────────────────────────────────────────
export const events2026 = [
  // JANUARY
  { title: 'NEC Meeting', start: new Date(2026, 0, 3), end: new Date(2026, 0, 3), allDay: true },
  { title: 'Personal Prayers', start: new Date(2026, 0, 2), end: new Date(2026, 0, 4), allDay: true },
  { title: 'Prayer Week', start: new Date(2026, 0, 5), end: new Date(2026, 0, 11), allDay: true },
  { title: 'Prayer Week', start: new Date(2026, 0, 12), end: new Date(2026, 0, 18), allDay: true },
  { title: 'ENEB Education Week', start: new Date(2026, 0, 12), end: new Date(2026, 0, 18), allDay: true },
  { title: 'Prayer Week', start: new Date(2026, 0, 19), end: new Date(2026, 0, 25), allDay: true },
  { title: 'Helps Ministry Week', start: new Date(2026, 0, 26), end: new Date(2026, 0, 31), allDay: true },

  // FEBRUARY
  { title: 'NEC Visit – West Pokot & Training', start: new Date(2026, 1, 31), end: new Date(2026, 2, 2), allDay: true },
  { title: 'NEC Visit – Turkana', start: new Date(2026, 1, 3), end: new Date(2026, 1, 5), allDay: true },
  { title: 'NEC Visit – TransNzoia', start: new Date(2026, 1, 6), end: new Date(2026, 1, 6), allDay: true },
  { title: 'NEC Visit – Western', start: new Date(2026, 1, 7), end: new Date(2026, 1, 7), allDay: true },
  { title: 'NEC Visit – Nairobi (Tena)', start: new Date(2026, 1, 8), end: new Date(2026, 1, 8), allDay: true },
  { title: 'NEC Visit – Laikipia', start: new Date(2026, 1, 10), end: new Date(2026, 1, 10), allDay: true },
  { title: 'NEC Visit – Nyandarua', start: new Date(2026, 1, 11), end: new Date(2026, 1, 11), allDay: true },
  { title: 'NEC Visit – Nakuru/Narok', start: new Date(2026, 1, 12), end: new Date(2026, 1, 12), allDay: true },
  { title: 'NEC Visit – Kericho', start: new Date(2026, 1, 13), end: new Date(2026, 1, 13), allDay: true },
  { title: 'NEC Visit – Nairobi Metro', start: new Date(2026, 1, 14), end: new Date(2026, 1, 14), allDay: true },
  { title: 'NEC Visit – Nyeri Central', start: new Date(2026, 1, 16), end: new Date(2026, 1, 16), allDay: true },
  { title: 'NEC Visit – Mt Kenya West', start: new Date(2026, 1, 17), end: new Date(2026, 1, 17), allDay: true },
  { title: 'NEC Visit – Kajiado', start: new Date(2026, 1, 18), end: new Date(2026, 1, 18), allDay: true },
  { title: 'NEC Visit – Kiambu', start: new Date(2026, 1, 19), end: new Date(2026, 1, 19), allDay: true },
  { title: 'NEC Visit – Taita Taveta', start: new Date(2026, 1, 24), end: new Date(2026, 1, 24), allDay: true },
  { title: 'NEC Visit – South Coast', start: new Date(2026, 1, 25), end: new Date(2026, 1, 25), allDay: true },
  { title: 'NEC Visit – Mombasa Metro (Kilifi)', start: new Date(2026, 1, 26), end: new Date(2026, 1, 26), allDay: true },

  // MARCH
  { title: 'EPCK Prayers', start: new Date(2026, 2, 2), end: new Date(2026, 2, 4), allDay: true },
  { title: 'Mt Kenya Central Gathering', start: new Date(2026, 2, 7), end: new Date(2026, 2, 8), allDay: true },
  { title: 'Leaders Training – Mt Kenya Central', start: new Date(2026, 2, 7), end: new Date(2026, 2, 7), allDay: true },
  { title: 'Come Together with AB', start: new Date(2026, 2, 8), end: new Date(2026, 2, 8), allDay: true },
  { title: 'National Secretariat Funds Drive (Phase 3)', start: new Date(2026, 2, 9), end: new Date(2026, 2, 15), allDay: true },
  { title: 'Missions Week – Regional Missions & Church Planting', start: new Date(2026, 2, 16), end: new Date(2026, 2, 22), allDay: true },
  { title: 'Laikipia Gathering', start: new Date(2026, 2, 28), end: new Date(2026, 2, 29), allDay: true },
  { title: 'Leaders Training – Laikipia', start: new Date(2026, 2, 28), end: new Date(2026, 2, 28), allDay: true },
  { title: 'Come Together with AB – Laikipia', start: new Date(2026, 2, 29), end: new Date(2026, 2, 29), allDay: true },

  // APRIL
  { title: 'EPCK Prayer', start: new Date(2026, 3, 6), end: new Date(2026, 3, 8), allDay: true },
  { title: 'NEC/SYNOD & SPIC Meeting', start: new Date(2026, 3, 6), end: new Date(2026, 3, 8), allDay: true },
  { title: 'National Dorcas Conference', start: new Date(2026, 3, 6), end: new Date(2026, 3, 12), allDay: true },
  { title: 'Sunday School Week', start: new Date(2026, 3, 13), end: new Date(2026, 3, 19), allDay: true },
  { title: 'Narok Leaders Training', start: new Date(2026, 3, 18), end: new Date(2026, 3, 18), allDay: true },
  { title: 'Come Together with AB – Narok', start: new Date(2026, 3, 19), end: new Date(2026, 3, 19), allDay: true },
  { title: 'National PKs Conference', start: new Date(2026, 3, 20), end: new Date(2026, 3, 26), allDay: true },
  { title: 'Youth Week', start: new Date(2026, 3, 20), end: new Date(2026, 3, 26), allDay: true },
  { title: 'Nyandarua Gathering', start: new Date(2026, 3, 2), end: new Date(2026, 3, 3), allDay: true },
  { title: 'Leaders Training – Nyandarua', start: new Date(2026, 3, 2), end: new Date(2026, 3, 2), allDay: true },
  { title: 'Come Together with AB – Nyandarua', start: new Date(2026, 3, 3), end: new Date(2026, 3, 3), allDay: true },

  // MAY
  { title: 'EPCK Prayers', start: new Date(2026, 4, 4), end: new Date(2026, 4, 6), allDay: true },
  { title: 'South Coast Kware Gathering', start: new Date(2026, 4, 9), end: new Date(2026, 4, 10), allDay: true },
  { title: 'Leaders Training – South Coast', start: new Date(2026, 4, 9), end: new Date(2026, 4, 9), allDay: true },
  { title: 'Come Together with AB – South Coast', start: new Date(2026, 4, 10), end: new Date(2026, 4, 10), allDay: true },
  { title: 'Dorcas Week', start: new Date(2026, 4, 11), end: new Date(2026, 4, 17), allDay: true },
  { title: 'Nakuru Gathering', start: new Date(2026, 4, 23), end: new Date(2026, 4, 24), allDay: true },
  { title: 'Leaders Training – Nakuru', start: new Date(2026, 4, 23), end: new Date(2026, 4, 23), allDay: true },
  { title: 'Come Together with AB – Nakuru', start: new Date(2026, 4, 24), end: new Date(2026, 4, 24), allDay: true },
  { title: 'Kajiado Gathering', start: new Date(2026, 4, 30), end: new Date(2026, 4, 31), allDay: true },
  { title: 'Leaders Training – Kajiado', start: new Date(2026, 4, 30), end: new Date(2026, 4, 30), allDay: true },
  { title: 'Come Together with AB – Kajiado', start: new Date(2026, 4, 31), end: new Date(2026, 4, 31), allDay: true },

  // JUNE
  { title: 'EPCK Prayers', start: new Date(2026, 5, 1), end: new Date(2026, 5, 3), allDay: true },
  { title: 'Taita Taveta Gathering', start: new Date(2026, 5, 6), end: new Date(2026, 5, 7), allDay: true },
  { title: 'Leaders Training – Taita Taveta', start: new Date(2026, 5, 6), end: new Date(2026, 5, 6), allDay: true },
  { title: 'Come Together with AB – Taita Taveta', start: new Date(2026, 5, 7), end: new Date(2026, 5, 7), allDay: true },
  { title: 'NEC/SYNOD & SPIC Progress Report', start: new Date(2026, 5, 5), end: new Date(2026, 5, 5), allDay: true },
  { title: 'Caleb Week', start: new Date(2026, 5, 8), end: new Date(2026, 5, 14), allDay: true },
  { title: 'Kilifi Metro Gathering', start: new Date(2026, 5, 13), end: new Date(2026, 5, 14), allDay: true },
  { title: 'Leaders Training – Kilifi Metro', start: new Date(2026, 5, 13), end: new Date(2026, 5, 13), allDay: true },
  { title: 'Come Together with AB – Kilifi Metro', start: new Date(2026, 5, 14), end: new Date(2026, 5, 14), allDay: true },
  { title: 'Missions Week & Church Planting', start: new Date(2026, 5, 15), end: new Date(2026, 5, 21), allDay: true },
  { title: 'Kiambu Gathering', start: new Date(2026, 5, 20), end: new Date(2026, 5, 21), allDay: true },
  { title: 'Leaders Training – Kiambu', start: new Date(2026, 5, 20), end: new Date(2026, 5, 20), allDay: true },
  { title: 'Come Together with AB – Kiambu', start: new Date(2026, 5, 21), end: new Date(2026, 5, 21), allDay: true },
  { title: 'Mt Kenya West Gathering', start: new Date(2026, 5, 27), end: new Date(2026, 5, 28), allDay: true },
  { title: 'Leaders Training – Mt Kenya West', start: new Date(2026, 5, 27), end: new Date(2026, 5, 27), allDay: true },
  { title: 'Come Together with AB – Mt Kenya West', start: new Date(2026, 5, 28), end: new Date(2026, 5, 28), allDay: true },

  // JULY
  { title: 'EPCK Prayers', start: new Date(2026, 6, 6), end: new Date(2026, 6, 8), allDay: true },
  { title: 'NEC/Synod Virtual Meeting', start: new Date(2026, 6, 3), end: new Date(2026, 6, 3), allDay: true },
  { title: 'TransNzoia Gathering', start: new Date(2026, 6, 4), end: new Date(2026, 6, 5), allDay: true },
  { title: 'Leaders Training – TransNzoia', start: new Date(2026, 6, 4), end: new Date(2026, 6, 4), allDay: true },
  { title: 'Come Together – TransNzoia', start: new Date(2026, 6, 5), end: new Date(2026, 6, 5), allDay: true },
  { title: 'Turkana Gathering', start: new Date(2026, 6, 11), end: new Date(2026, 6, 12), allDay: true },
  { title: 'Leaders Training – Turkana', start: new Date(2026, 6, 11), end: new Date(2026, 6, 11), allDay: true },
  { title: 'Come Together with AB – Turkana', start: new Date(2026, 6, 12), end: new Date(2026, 6, 12), allDay: true },
  { title: 'Nairobi Metro Gathering', start: new Date(2026, 6, 18), end: new Date(2026, 6, 19), allDay: true },
  { title: 'Leaders Training – Nairobi Metro', start: new Date(2026, 6, 18), end: new Date(2026, 6, 18), allDay: true },
  { title: 'Come Together with AB – Nairobi Metro', start: new Date(2026, 6, 19), end: new Date(2026, 6, 19), allDay: true },
  { title: 'Regional Pastors Empowerment Week', start: new Date(2026, 6, 27), end: new Date(2026, 7, 2), allDay: true },

  // AUGUST
  { title: 'EPCK Prayers', start: new Date(2026, 7, 3), end: new Date(2026, 7, 5), allDay: true },
  { title: 'General Regional Conference – Nairobi, Nakuru, Turkana, Kiambu', start: new Date(2026, 7, 3), end: new Date(2026, 7, 9), allDay: true },
  { title: 'Regional Conferences – Nyandarua, West Pokot, Kilifi, Mt Kenya West', start: new Date(2026, 7, 10), end: new Date(2026, 7, 16), allDay: true },
  { title: 'General Regional Conference – Mt Kenya Central, Kajiado, TransNzoia, Taita Taveta, Kericho', start: new Date(2026, 7, 17), end: new Date(2026, 7, 23), allDay: true },
  { title: 'General Regional Conference – Kwale, Laikipia, Western, Narok, Meru/Tharaka', start: new Date(2026, 7, 24), end: new Date(2026, 7, 30), allDay: true },

  // SEPTEMBER
  { title: 'EPCK Prayers', start: new Date(2026, 7, 31), end: new Date(2026, 8, 2), allDay: true },
  { title: 'National Secretariat Week', start: new Date(2026, 8, 7), end: new Date(2026, 8, 13), allDay: true },

  // OCTOBER
  { title: 'EPCK Prayers', start: new Date(2026, 9, 5), end: new Date(2026, 9, 7), allDay: true },
  { title: 'Missions & Church Planting Week', start: new Date(2026, 9, 12), end: new Date(2026, 9, 18), allDay: true },
  { title: 'Caleb Week', start: new Date(2026, 9, 27), end: new Date(2026, 10, 2), allDay: true },

  // NOVEMBER
  { title: 'EPCK Prayers', start: new Date(2026, 10, 2), end: new Date(2026, 10, 4), allDay: true },
  { title: 'Sunday School Week', start: new Date(2026, 10, 9), end: new Date(2026, 10, 15), allDay: true },
  { title: 'Dorcas Week', start: new Date(2026, 10, 10), end: new Date(2026, 10, 16), allDay: true },
  { title: 'NEC/SYNOD', start: new Date(2026, 10, 20), end: new Date(2026, 10, 20), allDay: true },
  { title: 'AGM', start: new Date(2026, 10, 21), end: new Date(2026, 10, 21), allDay: true },

  // DECEMBER
  { title: 'EPCK Prayers', start: new Date(2026, 11, 30), end: new Date(2027, 0, 2), allDay: true },
  { title: 'EPCK Family Sunday & Pastors Special Appreciation Day', start: new Date(2026, 11, 6), end: new Date(2026, 11, 6), allDay: true },
  { title: 'Ignite National Youth Conference', start: new Date(2026, 11, 7), end: new Date(2026, 11, 13), allDay: true },
  { title: 'Youth/Teens & Sunday School Christmas Cantata', start: new Date(2026, 11, 14), end: new Date(2026, 11, 25), allDay: true },
];

// ─── EVENT CATEGORY COLORS ──────────────────────────────────────────────────
const categoryColors = {
  prayer: { bg: '#6366f1', light: '#eef2ff', text: '#4338ca' },
  nec: { bg: '#f59e0b', light: '#fffbeb', text: '#b45309' },
  missions: { bg: '#10b981', light: '#ecfdf5', text: '#047857' },
  conference: { bg: '#7A030D', light: '#fff1f2', text: '#9f1239' },
  training: { bg: '#3b82f6', light: '#eff6ff', text: '#1d4ed8' },
  youth: { bg: '#ec4899', light: '#fdf2f8', text: '#be185d' },
  week: { bg: '#8b5cf6', light: '#f5f3ff', text: '#6d28d9' },
  default: { bg: '#64748b', light: '#f8fafc', text: '#475569' },
};

const legendItems = [
  { label: 'Prayer & Fasting', key: 'prayer', note: 'Corporate and personal prayer weeks' },
  { label: 'NEC / Administration', key: 'nec', note: 'National Executive Council business & regional visits' },
  { label: 'Missions & Church Planting', key: 'missions', note: 'Outreach, missions weeks and planting initiatives' },
  { label: 'Conferences', key: 'conference', note: 'Major regional and national conferences' },
  { label: 'Training', key: 'training', note: 'Leaders training sessions' },
  { label: 'Youth', key: 'youth', note: 'Youth-focused programs and conferences' },
  { label: 'Special Weeks', key: 'week', note: 'Dorcas, Caleb, Sunday School and similar observances' },
  { label: 'General', key: 'default', note: 'Other scheduled activities' },
];

function getEventCategory(title) {
  const t = (title || '').toLowerCase();
  if (t.includes('prayer') || t.includes('prayers') || t.includes('kesha')) return 'prayer';
  if (t.includes('nec') || t.includes('synod') || t.includes('agm') || t.includes('spic')) return 'nec';
  if (t.includes('mission') || t.includes('church planting')) return 'missions';
  if (t.includes('conference')) return 'conference';
  if (t.includes('training') || t.includes('leaders')) return 'training';
  if (t.includes('youth') || t.includes('ignite') || t.includes('teen')) return 'youth';
  if (t.includes('week') || t.includes('dorcas') || t.includes('caleb') || t.includes('sunday school')) return 'week';
  return 'default';
}

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

// ─── MONTH / DAY NAMES ──────────────────────────────────────────────────────
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// ─── SHARED: build a day -> events[] map for a given month ────────────────
function buildEventsByDay(events, year, month, daysInMonth) {
  const map = {};
  events.forEach((ev) => {
    const s = new Date(ev.start);
    const en = new Date(ev.end);
    const sOnly = new Date(s.getFullYear(), s.getMonth(), s.getDate());
    const enOnly = new Date(en.getFullYear(), en.getMonth(), en.getDate());
    for (let d = 1; d <= daysInMonth; d++) {
      const cur = new Date(year, month, d);
      if (cur >= sOnly && cur <= enOnly) {
        if (!map[d]) map[d] = [];
        map[d].push(ev);
      }
    }
  });
  return map;
}

// ─── SHARED: events occurring on one specific calendar date ────────────────
function eventsOnDate(events, date) {
  const cur = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return events.filter((ev) => {
    const s = new Date(ev.start);
    const en = new Date(ev.end);
    const sOnly = new Date(s.getFullYear(), s.getMonth(), s.getDate());
    const enOnly = new Date(en.getFullYear(), en.getMonth(), en.getDate());
    return cur >= sOnly && cur <= enOnly;
  });
}

// ─── YEAR VIEW (used inside the Full Year modal + the hidden PDF template) ──
function YearView({ events, onSelectEvent, year }) {
  return (
    <div style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
      }}>
        {MONTHS.map((monthName, monthIdx) => {
          const firstDay = new Date(year, monthIdx, 1).getDay();
          const daysInMonth = new Date(year, monthIdx + 1, 0).getDate();
          const monthEvents = events.filter((e) => {
            const s = new Date(e.start);
            const en = new Date(e.end);
            return (s.getFullYear() === year && s.getMonth() === monthIdx) ||
                   (en.getFullYear() === year && en.getMonth() === monthIdx);
          });
          const eventsByDay = buildEventsByDay(monthEvents, year, monthIdx, daysInMonth);

          return (
            <div key={monthIdx} style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(122,3,13,0.08)',
              border: '1px solid #f3e8e8',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #7A030D 0%, #c0392b 100%)',
                color: 'white',
                padding: '14px 16px',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '0.5px',
              }}>
                {monthName} {year}
              </div>
              <div style={{ padding: '12px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginBottom: '4px' }}>
                  {DAYS.map((d) => (
                    <div key={d} style={{ textAlign: 'center', fontSize: '10px', fontWeight: 700, color: '#9ca3af', padding: '2px 0', fontFamily: 'system-ui' }}>
                      {d}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
                  {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const dayEvents = eventsByDay[day] || [];
                    const hasEvent = dayEvents.length > 0;
                    const cat = hasEvent ? getEventCategory(dayEvents[0].category || dayEvents[0].title) : null;
                    const color = cat ? categoryColors[cat] : null;
                    return (
                      <div
                        key={day}
                        onClick={() => hasEvent && onSelectEvent && onSelectEvent(dayEvents[0])}
                        style={{
                          textAlign: 'center',
                          padding: '5px 2px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontFamily: 'system-ui',
                          fontWeight: hasEvent ? 700 : 400,
                          cursor: hasEvent ? 'pointer' : 'default',
                          background: hasEvent ? color.bg : 'transparent',
                          color: hasEvent ? 'white' : '#374151',
                          transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                          position: 'relative',
                        }}
                        onMouseEnter={(e) => { if (hasEvent) { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.boxShadow = `0 4px 12px ${color.bg}66`; } }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                        title={hasEvent ? dayEvents.map((e) => e.title).join(', ') : ''}
                      >
                        {day}
                        {dayEvents.length > 1 && (
                          <div style={{
                            position: 'absolute', top: 2, right: 2,
                            background: 'white', color: color.bg,
                            borderRadius: '50%', width: '10px', height: '10px',
                            fontSize: '7px', fontWeight: 900, lineHeight: '10px',
                            textAlign: 'center',
                          }}>{dayEvents.length}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── FULL YEAR MODAL (the "small window" popup requested) ─────────────────
function YearViewModal({ year, events, onSelectEvent, onClose }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9998,
        background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fafafa',
          borderRadius: '22px',
          maxWidth: '960px',
          width: '100%',
          maxHeight: '86vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
          animation: 'slideUp 0.25s ease',
        }}
      >
        <div style={{
          background: 'linear-gradient(135deg, #7A030D 0%, #450007 100%)',
          padding: '22px 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,200,200,0.8)', marginBottom: '4px', textTransform: 'uppercase' }}>
              Full Year Overview
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '22px', fontWeight: 700, color: 'white', margin: 0 }}>
              {year} Ministry Calendar
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
              color: 'white', fontSize: '16px', cursor: 'pointer', flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>
        <div style={{ padding: '24px 28px', overflowY: 'auto' }}>
          <YearView events={events} onSelectEvent={onSelectEvent} year={year} />
        </div>
      </div>
    </div>
  );
}

// ─── COMPACT SIDEBAR CALENDAR — Month / Week / Day ─────────────────────────
function MiniMonthCalendar({ events, onSelectDay, onOpenYearView }) {
  const [cursor, setCursor] = useState(new Date());
  const [calView, setCalView] = useState('month'); // 'month' | 'week' | 'day'
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const eventsByDay = buildEventsByDay(events, year, month, daysInMonth);
  const today = new Date();
  const isToday = (d) => today.getFullYear() === year && today.getMonth() === month && today.getDate() === d;
  const isSameDate = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const startOfWeek = (d) => {
    const nd = new Date(d);
    nd.setDate(nd.getDate() - nd.getDay());
    nd.setHours(0, 0, 0, 0);
    return nd;
  };
  const weekStart = startOfWeek(cursor);
  const weekDays = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    return d;
  });

  const navBtnStyle = {
    width: '30px', height: '30px', borderRadius: '9px',
    border: '1px solid #f3e8e8', background: 'white', color: '#7A030D',
    fontSize: '15px', fontWeight: 700, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  };

  const nav = (dir) => {
    if (calView === 'month') setCursor(new Date(year, month + dir, 1));
    else if (calView === 'week') { const d = new Date(cursor); d.setDate(d.getDate() + dir * 7); setCursor(d); }
    else { const d = new Date(cursor); d.setDate(d.getDate() + dir); setCursor(d); }
  };

  const headerLabel = () => {
    if (calView === 'month') return `${MONTHS[month]} ${year}`;
    if (calView === 'week') {
      const end = new Date(weekStart);
      end.setDate(end.getDate() + 6);
      return weekStart.getMonth() === end.getMonth()
        ? `${MONTHS[weekStart.getMonth()].slice(0, 3)} ${weekStart.getDate()}–${end.getDate()}, ${end.getFullYear()}`
        : `${MONTHS[weekStart.getMonth()].slice(0, 3)} ${weekStart.getDate()} – ${MONTHS[end.getMonth()].slice(0, 3)} ${end.getDate()}, ${end.getFullYear()}`;
    }
    return moment(cursor).format('ddd, MMM D, YYYY');
  };

  return (
    <div style={{
      background: 'white', borderRadius: '20px',
      boxShadow: '0 4px 32px rgba(122,3,13,0.08)', border: '1px solid #fde8e8',
      padding: '22px', marginBottom: '20px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', gap: '8px' }}>
        <button onClick={() => nav(-1)} style={navBtnStyle} aria-label="Previous">‹</button>
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700,
          fontSize: calView === 'day' ? '13.5px' : '16px', color: '#7A030D', textAlign: 'center',
        }}>
          {headerLabel()}
        </div>
        <button onClick={() => nav(1)} style={navBtnStyle} aria-label="Next">›</button>
      </div>

      {/* Month / Week / Day toggle */}
      <div style={{
        display: 'flex', gap: '4px', background: '#fdf4f4',
        borderRadius: '10px', padding: '4px', marginBottom: '16px',
      }}>
        {['month', 'week', 'day'].map((v) => (
          <button
            key={v}
            onClick={() => setCalView(v)}
            style={{
              flex: 1, padding: '6px 0', borderRadius: '8px', border: 'none', cursor: 'pointer',
              background: calView === v ? '#7A030D' : 'transparent',
              color: calView === v ? 'white' : '#7A030D',
              fontSize: '11px', fontWeight: 700, fontFamily: 'system-ui',
              textTransform: 'capitalize', transition: 'all 0.15s ease',
            }}
          >
            {v}
          </button>
        ))}
      </div>

      {/* ── MONTH VIEW (unchanged) ── */}
      {calView === 'month' && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '6px' }}>
            {DAYS.map((d) => (
              <div key={d} style={{ textAlign: 'center', fontSize: '10px', fontWeight: 700, color: '#9ca3af', fontFamily: 'system-ui' }}>
                {d[0]}
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
            {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dayEvents = eventsByDay[day] || [];
              const hasEvent = dayEvents.length > 0;
              const cat = hasEvent ? getEventCategory(dayEvents[0].category || dayEvents[0].title) : null;
              const color = cat ? categoryColors[cat] : null;
              return (
                <button
                  key={day}
                  onClick={() => hasEvent && onSelectDay(dayEvents[0])}
                  title={hasEvent ? dayEvents.map((e) => e.title).join(', ') : ''}
                  style={{
                    aspectRatio: '1', border: isToday(day) ? '2px solid #7A030D' : '1px solid transparent',
                    borderRadius: '9px',
                    background: hasEvent ? color.bg : 'transparent',
                    color: hasEvent ? 'white' : '#374151',
                    fontSize: '12px', fontWeight: hasEvent ? 700 : 500,
                    cursor: hasEvent ? 'pointer' : 'default',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'system-ui', position: 'relative', padding: 0,
                  }}
                >
                  {day}
                  {dayEvents.length > 1 && (
                    <div style={{
                      position: 'absolute', top: -2, right: -2,
                      background: 'white', color: color.bg,
                      borderRadius: '50%', width: '13px', height: '13px',
                      fontSize: '8px', fontWeight: 900, lineHeight: '13px',
                      textAlign: 'center', border: `1px solid ${color.bg}`,
                    }}>{dayEvents.length}</div>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* ── WEEK VIEW — event titles written in a simple font next to each day ── */}
      {calView === 'week' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {weekDays.map((d, i) => {
            const dayEvents = eventsOnDate(events, d);
            const isTodayRow = isSameDate(d, today);
            return (
              <div
                key={i}
                style={{
                  display: 'flex', gap: '10px', padding: '8px 9px', borderRadius: '10px',
                  background: isTodayRow ? '#fff3ee' : 'transparent',
                  border: isTodayRow ? '1px solid #7A030D33' : '1px solid transparent',
                }}
              >
                <div style={{ width: '38px', flexShrink: 0, textAlign: 'center' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: '#9ca3af', fontFamily: 'system-ui' }}>
                    {DAYS[d.getDay()]}
                  </div>
                  <div style={{
                    width: '24px', height: '24px', borderRadius: '50%', margin: '2px auto 0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isTodayRow ? '#7A030D' : 'transparent',
                    color: isTodayRow ? 'white' : '#374151',
                    fontSize: '12px', fontWeight: 700, fontFamily: 'system-ui',
                  }}>
                    {d.getDate()}
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: '2px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {dayEvents.length === 0 ? (
                    <span style={{ fontSize: '11px', color: '#d4d4d4', fontFamily: 'system-ui' }}>—</span>
                  ) : (
                    dayEvents.map((ev, idx) => {
                      const cat = getEventCategory(ev.category || ev.title);
                      return (
                        <button
                          key={idx}
                          onClick={() => onSelectDay(ev)}
                          title={ev.title}
                          style={{
                            display: 'flex', alignItems: 'center', gap: '6px', textAlign: 'left',
                            background: 'none', border: 'none', padding: 0, cursor: 'pointer', width: '100%',
                          }}
                        >
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: categoryColors[cat].bg, flexShrink: 0 }} />
                          <span style={{
                            fontSize: '11.5px', color: '#374151', fontFamily: 'system-ui', fontWeight: 500,
                            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                          }}>
                            {ev.title}
                          </span>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── DAY VIEW — simple plain-text agenda for the selected day ── */}
      {calView === 'day' && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '50%', margin: '0 auto',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: isSameDate(cursor, today) ? '#7A030D' : '#f3e8e8',
              color: isSameDate(cursor, today) ? 'white' : '#7A030D',
              fontSize: '17px', fontWeight: 800, fontFamily: "'Playfair Display', Georgia, serif",
            }}>
              {cursor.getDate()}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {eventsOnDate(events, cursor).length === 0 ? (
              <div style={{ textAlign: 'center', color: '#c9c9c9', fontSize: '12px', fontFamily: 'system-ui', padding: '18px 0' }}>
                No events scheduled.
              </div>
            ) : (
              eventsOnDate(events, cursor).map((ev, idx) => {
                const cat = getEventCategory(ev.category || ev.title);
                const color = categoryColors[cat];
                return (
                  <button
                    key={idx}
                    onClick={() => onSelectDay(ev)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left', width: '100%',
                      background: '#faf9f9', border: '1px solid #f0f0f0', borderRadius: '10px',
                      padding: '9px 12px', cursor: 'pointer',
                    }}
                  >
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: color.bg, flexShrink: 0 }} />
                    <span style={{ fontSize: '12.5px', color: '#374151', fontFamily: 'system-ui', fontWeight: 600 }}>
                      {ev.title}
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}

      <button
        onClick={onOpenYearView}
        style={{
          marginTop: '18px', width: '100%', padding: '11px',
          borderRadius: '11px', border: '1px solid #fde8e8',
          background: '#fff7f7', color: '#7A030D', fontWeight: 700,
          fontSize: '12px', cursor: 'pointer', fontFamily: 'system-ui',
          letterSpacing: '0.4px',
        }}
      >
        🗓 View Full Year
      </button>
    </div>
  );
}

// ─── EVENT DETAIL MODAL (handles both master-calendar and CMS events) ──────
function EventModal({ event, onClose }) {
  if (!event) return null;
  const cat = getEventCategory(event.category || event.title);
  const color = categoryColors[cat];
  const startRaw = event.start || event.startsAt;
  const endRaw = event.end || event.startsAt;
  const start = moment(startRaw).format('MMMM D, YYYY');
  const end = moment(endRaw).format('MMMM D, YYYY');
  const isSameDay = start === end;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: '20px',
          maxWidth: '460px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
          animation: 'slideUp 0.25s ease',
        }}
      >
        {event.imageUrl && (
          <div style={{ width: '100%', aspectRatio: '1131 / 1600', maxHeight: '380px', overflow: 'hidden', background: '#f3f3f3' }}>
            <img
              src={event.imageUrl}
              alt={event.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        )}
        <div style={{
          background: `linear-gradient(135deg, ${color.bg} 0%, ${color.bg}cc 100%)`,
          padding: '24px 28px 22px',
          color: 'white',
        }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', opacity: 0.85, marginBottom: '8px', fontFamily: 'system-ui', textTransform: 'uppercase' }}>
            {event.category || cat}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '22px', fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            {event.title}
          </h2>
        </div>
        <div style={{ padding: '22px 28px 8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: color.light, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>
              📅
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#9ca3af', fontFamily: 'system-ui', marginBottom: '2px', letterSpacing: '0.5px' }}>DATE</div>
              <div style={{ fontFamily: 'system-ui', fontWeight: 600, color: '#111', fontSize: '14px' }}>
                {isSameDay ? start : `${start} – ${end}`}
              </div>
            </div>
          </div>

          {event.location && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: color.light, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>
                📍
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#9ca3af', fontFamily: 'system-ui', marginBottom: '2px', letterSpacing: '0.5px' }}>LOCATION</div>
                <div style={{ fontFamily: 'system-ui', fontWeight: 600, color: '#111', fontSize: '14px' }}>
                  {event.location}
                </div>
              </div>
            </div>
          )}

          {!isSameDay && (
            <div style={{
              background: color.light, borderRadius: '10px', padding: '10px 14px',
              fontSize: '13px', color: color.text, fontFamily: 'system-ui',
              fontWeight: 600, marginBottom: '14px',
            }}>
              {moment(endRaw).diff(moment(startRaw), 'days') + 1} day event
            </div>
          )}

          {event.description && (
            <p style={{ color: '#4b5563', fontSize: '13.5px', lineHeight: 1.7, fontFamily: 'system-ui', margin: '0 0 14px' }}>
              {event.description}
            </p>
          )}
        </div>
        <div style={{ padding: '10px 28px 28px' }}>
          <button
            onClick={onClose}
            style={{
              width: '100%', padding: '12px', background: color.bg, color: 'white',
              border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: 700,
              cursor: 'pointer', fontFamily: 'system-ui', letterSpacing: '0.5px',
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── LEGEND ──────────────────────────────────────────────────────────────────
function Legend() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
      {legendItems.map(({ label, key }) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'white', borderRadius: '20px', padding: '5px 12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: categoryColors[key].bg }} />
          <span style={{ fontSize: '12px', fontFamily: 'system-ui', color: '#374151', fontWeight: 500 }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── EVENT CARD (premium, clickable, poster-ratio image) ───────────────────
function EventCard({ event, formatDate, isPast = false, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const cat = event.category ? getEventCategory(event.category) : null;
  const color = cat ? categoryColors[cat] : categoryColors.default;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(event)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(event); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'white',
        borderRadius: '18px',
        overflow: 'hidden',
        boxShadow: hovered ? '0 16px 44px rgba(122,3,13,0.18)' : '0 4px 18px rgba(0,0,0,0.06)',
        border: '1px solid #f3e8e8',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        opacity: isPast ? 0.9 : 1,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Poster image — locked to 1131:1600 portrait ratio */}
      <div style={{ width: '100%', aspectRatio: '1131 / 1600', overflow: 'hidden', background: '#f3f3f3', position: 'relative' }}>
        {event.imageUrl ? (
          <img
            src={event.imageUrl}
            alt={event.title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top',
              transition: 'transform 0.4s ease',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              display: 'block',
            }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `linear-gradient(135deg, ${color.bg}22, ${color.bg}08)`,
            color: color.bg, fontFamily: "'Playfair Display', Georgia, serif", fontSize: '15px', fontWeight: 700,
            textAlign: 'center', padding: '20px',
          }}>
            {event.title}
          </div>
        )}
        {isPast && (
          <div style={{
            position: 'absolute', top: '12px', left: '12px',
            background: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '10px',
            fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
            padding: '4px 10px', borderRadius: '20px', fontFamily: 'system-ui',
          }}>
            Past
          </div>
        )}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.5))',
          opacity: hovered ? 1 : 0, transition: 'opacity 0.25s ease',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '16px',
        }}>
          <span style={{ color: 'white', fontSize: '12px', fontWeight: 700, fontFamily: 'system-ui', letterSpacing: '0.5px' }}>
            View Details →
          </span>
        </div>
      </div>

      <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {event.category && (
          <span style={{
            display: 'inline-block', padding: '4px 12px', width: 'fit-content',
            borderRadius: '20px', fontSize: '10.5px', fontWeight: 700,
            background: color.light, color: color.text,
            marginBottom: '10px', fontFamily: 'system-ui', letterSpacing: '0.5px', textTransform: 'uppercase',
          }}>
            {event.category}
          </span>
        )}
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '17px', fontWeight: 700,
          color: isPast ? '#374151' : '#7A030D',
          margin: '0 0 8px', lineHeight: 1.35,
        }}>
          {event.title}
        </h3>
        <div style={{ fontSize: '13px', fontWeight: 600, color: isPast ? '#6b7280' : '#EB3237', marginBottom: '6px', fontFamily: 'system-ui', display: 'flex', alignItems: 'center', gap: '6px' }}>
          🗓 {formatDate(event.startsAt)}
        </div>
        {event.location && (
          <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '8px', fontFamily: 'system-ui', display: 'flex', alignItems: 'center', gap: '6px' }}>
            📍 {event.location}
          </div>
        )}
        {event.description && (
          <p style={{
            color: '#6b7280', fontSize: '13px', lineHeight: 1.6, margin: '4px 0 0',
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {event.description}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ────────────────────────────────────────────────────────────
export default function EventPage() {
  const year = new Date().getFullYear();
  const [showYearModal, setShowYearModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [adminEvents, setAdminEvents] = useState([]);
  const [now, setNow] = useState(Date.now());
  const [loadingEvents, setLoadingEvents] = useState(true);
  const printCalendarRef = useRef(null);

  // Inject fonts + animations + responsive layout rules
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
      @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      @keyframes slideUp { from { transform: translateY(30px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      @keyframes shimmer { 0%,100% { opacity: 1 } 50% { opacity: 0.6 } }
      @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
      .epck-grid { display: grid; grid-template-columns: minmax(0, 1fr) 380px; gap: 32px; align-items: start; }
      .epck-sidebar { position: sticky; top: 24px; }
      @media (max-width: 960px) {
        .epck-grid { grid-template-columns: 1fr; }
        .epck-sidebar { position: static; order: -1; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoadingEvents(true);
      try {
        setAdminEvents(await getPublishedEvents());
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoadingEvents(false);
      }
    };
    fetchEvents();
    const refresh = setInterval(fetchEvents, 60000);
    return () => clearInterval(refresh);
  }, []);

  useEffect(() => {
    const tick = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(tick);
  }, []);

  const upcomingEvents = adminEvents.filter((event) => new Date(event.startsAt).getTime() > now);
  const pastEvents = adminEvents.filter((event) => new Date(event.startsAt).getTime() <= now).reverse();
  const formatDate = (dateString) => moment(dateString).format('MMMM DD, YYYY');

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const { default: html2canvas } = await import('html2canvas');
      const { jsPDF } = await import('jspdf');

      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 16;
      const contentW = pageW - margin * 2;
      const maroon = [122, 3, 13];

      const footer = () => {
        const pageCount = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
          pdf.setPage(i);
          if (i === 1) continue; // skip footer on cover
          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(8);
          pdf.setTextColor(160, 160, 160);
          pdf.text(`EPCK Annual Calendar ${year}  •  Page ${i} of ${pageCount}`, pageW / 2, pageH - 8, { align: 'center' });
        }
      };

      // ── COVER PAGE ──
      pdf.setFillColor(...maroon);
      pdf.rect(0, 0, pageW, pageH, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(11);
      pdf.text('ELIM PENTECOSTAL CHURCH OF KENYA', pageW / 2, 60, { align: 'center' });
      pdf.setFontSize(30);
      pdf.text('Annual Ministry Calendar', pageW / 2, 90, { align: 'center' });
      pdf.setFontSize(22);
      pdf.text(`${year}`, pageW / 2, 104, { align: 'center' });
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(11);
      const coverLines = pdf.splitTextToSize('A detailed planning guide for members, ministry leaders, and guests — including a full colour key and event-by-event instructions.', contentW - 40);
      pdf.text(coverLines, pageW / 2, 128, { align: 'center' });
      pdf.setFontSize(9);
      pdf.text(`Generated ${moment().format('MMMM D, YYYY')}`, pageW / 2, pageH - 20, { align: 'center' });

      // ── KEY / LEGEND PAGE ──
      pdf.addPage();
      let y = margin;
      pdf.setTextColor(...maroon);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(18);
      pdf.text('Key & How to Use This Calendar', margin, y);
      y += 8;
      pdf.setDrawColor(...maroon);
      pdf.setLineWidth(0.5);
      pdf.line(margin, y, pageW - margin, y);
      y += 10;

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10);
      pdf.setTextColor(70, 70, 70);
      const introLines = pdf.splitTextToSize(
        'Each colour below represents a category of ministry activity used throughout the year-at-a-glance grids on the following pages. Use this key alongside the detailed schedule and event listing further in this document to plan attendance, travel, and preparation.',
        contentW
      );
      pdf.text(introLines, margin, y);
      y += introLines.length * 5 + 8;

      legendItems.forEach((item) => {
        const c = categoryColors[item.key];
        const rgb = hexToRgb(c.bg);
        pdf.setFillColor(rgb.r, rgb.g, rgb.b);
        pdf.roundedRect(margin, y - 4, 6, 6, 1, 1, 'F');
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(10.5);
        pdf.setTextColor(30, 30, 30);
        pdf.text(item.label, margin + 10, y);
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.setTextColor(120, 120, 120);
        pdf.text(item.note, margin + 10, y + 4.5);
        y += 13;
      });

      // ── YEAR-AT-A-GLANCE GRID (visual capture of YearView) ──
      if (printCalendarRef.current) {
        pdf.addPage();
        pdf.setTextColor(...maroon);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(16);
        pdf.text(`${year} At a Glance`, margin, margin + 4);

        const canvas = await html2canvas(printCalendarRef.current, { scale: 2, useCORS: true });
        const imgData = canvas.toDataURL('image/png');
        let renderW = contentW;
        let renderH = (canvas.height / canvas.width) * renderW;
        const maxH = pageH - margin * 2 - 14;
        if (renderH > maxH) {
          renderH = maxH;
          renderW = (canvas.width / canvas.height) * renderH;
        }
        pdf.addImage(imgData, 'PNG', margin + (contentW - renderW) / 2, margin + 12, renderW, renderH);
      }

      // ── DETAILED MONTH-BY-MONTH SCHEDULE (text, not just colour) ──
      const byMonth = {};
      events2026.forEach((ev) => {
        const m = new Date(ev.start).getMonth();
        if (!byMonth[m]) byMonth[m] = [];
        byMonth[m].push(ev);
      });

      pdf.addPage();
      y = margin;
      pdf.setTextColor(...maroon);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(18);
      pdf.text('Detailed Schedule', margin, y);
      y += 8;
      pdf.setDrawColor(...maroon);
      pdf.line(margin, y, pageW - margin, y);
      y += 10;

      MONTHS.forEach((monthName, idx) => {
        const evs = (byMonth[idx] || []).slice().sort((a, b) => a.start - b.start);
        if (evs.length === 0) return;
        if (y > pageH - 40) { pdf.addPage(); y = margin; }
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(13);
        pdf.setTextColor(...maroon);
        pdf.text(`${monthName} ${year}`, margin, y);
        y += 7;

        evs.forEach((ev) => {
          if (y > pageH - 22) { pdf.addPage(); y = margin; }
          const cat = getEventCategory(ev.title);
          const c = categoryColors[cat];
          const rgb = hexToRgb(c.bg);
          pdf.setFillColor(rgb.r, rgb.g, rgb.b);
          pdf.circle(margin + 1.5, y - 1.5, 1.5, 'F');

          const s = moment(ev.start).format('MMM D');
          const e = moment(ev.end).format('MMM D');
          const dateStr = s === e ? s : `${s} – ${e}`;

          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(10);
          pdf.setTextColor(30, 30, 30);
          const titleLines = pdf.splitTextToSize(ev.title, contentW - 45);
          pdf.text(titleLines, margin + 7, y);

          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(9);
          pdf.setTextColor(120, 120, 120);
          const dateW = pdf.getTextWidth(dateStr);
          pdf.text(dateStr, pageW - margin - dateW, y);

          y += Math.max(titleLines.length * 5, 6);
        });
        y += 4;
      });

      // ── CMS EVENTS (Upcoming / Past) — FULL DETAILS & INSTRUCTIONS ──
      if (adminEvents.length) {
        pdf.addPage();
        y = margin;
        pdf.setTextColor(...maroon);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(18);
        pdf.text('Church Events — Details & Instructions', margin, y);
        y += 8;
        pdf.setDrawColor(...maroon);
        pdf.line(margin, y, pageW - margin, y);
        y += 10;

        adminEvents
          .slice()
          .sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt))
          .forEach((ev) => {
            const descLines = ev.description ? pdf.splitTextToSize(ev.description, contentW) : [];
            const blockHeight = 16 + descLines.length * 4.8 + (ev.location ? 5 : 0) + (ev.category ? 5 : 0);
            if (y + blockHeight > pageH - margin) { pdf.addPage(); y = margin; }

            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.setTextColor(20, 20, 20);
            const titleLines = pdf.splitTextToSize(ev.title, contentW);
            pdf.text(titleLines, margin, y);
            y += titleLines.length * 5.5;

            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(9.5);
            pdf.setTextColor(90, 90, 90);
            pdf.text(`Date: ${formatDate(ev.startsAt)}`, margin, y);
            y += 5;
            if (ev.location) { pdf.text(`Location: ${ev.location}`, margin, y); y += 5; }
            if (ev.category) { pdf.text(`Category: ${ev.category}`, margin, y); y += 5; }
            if (descLines.length) {
              pdf.setTextColor(65, 65, 65);
              pdf.text(descLines, margin, y);
              y += descLines.length * 4.8;
            }
            y += 6;
            pdf.setDrawColor(230, 230, 230);
            pdf.line(margin, y - 3, pageW - margin, y - 3);
          });
      }

      footer();
      pdf.save(`EPCK-Calendar-${year}.pdf`);
    } catch (err) {
      console.error('PDF error:', err);
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', fontFamily: "'DM Sans', system-ui, sans-serif" }}>

      {/* ── Hero Header ── */}
      <div style={{
        background: 'linear-gradient(135deg, #7A030D 0%, #450007 60%, #1a0003 100%)',
        padding: '56px 32px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {[...Array(5)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${120 + i * 80}px`, height: `${120 + i * 80}px`,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.05)',
            top: `${-20 - i * 30}px`, right: `${-20 - i * 30}px`,
            pointerEvents: 'none',
          }} />
        ))}
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', opacity: 0.7 }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>Home</a>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>›</span>
            <span style={{ color: 'white', fontSize: '13px', fontWeight: 500 }}>Events</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', color: 'rgba(255,200,200,0.8)', marginBottom: '10px', textTransform: 'uppercase' }}>
                EPCK • Events
              </div>
              <h1 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: 900, color: 'white', margin: '0 0 10px',
                lineHeight: 1.1,
              }}>
                Calendar of Events
              </h1>
              <p style={{ color: 'rgba(255,200,200,0.85)', fontSize: '15px', fontWeight: 400, margin: 0 }}>
                Divine Manifestation of the Sons of God
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setShowYearModal(true)}
                style={{
                  padding: '11px 22px',
                  background: 'rgba(255,255,255,0.12)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s ease',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.3px',
                }}
              >
                🗓 Full Year View
              </button>
              <button
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                style={{
                  padding: '11px 22px',
                  background: isDownloading ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.15)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: isDownloading ? 'not-allowed' : 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s ease',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.3px',
                  animation: isDownloading ? 'shimmer 1s infinite' : 'none',
                }}
              >
                {isDownloading ? '⏳ Generating...' : '⬇ Download Detailed PDF'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content: 2/3 events + 1/3 calendar ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 20px 60px' }}>
        <Legend />

        <div className="epck-grid">
          {/* ── LEFT (2/3): Upcoming + Past events ── */}
          <div>
            {/* Upcoming Events */}
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px' }}>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px', fontWeight: 700, color: '#7A030D', margin: 0 }}>
                  Upcoming Events
                </h2>
                <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, #7A030D22, transparent)' }} />
              </div>
              {loadingEvents ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '48px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '3px solid #fde8e8', borderTopColor: '#7A030D', animation: 'spin 0.8s linear infinite' }} />
                </div>
              ) : upcomingEvents.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '48px', background: 'white', borderRadius: '16px', border: '1px dashed #fde8e8', color: '#9ca3af', fontFamily: "'Playfair Display', Georgia, serif", fontSize: '16px' }}>
                  No upcoming events scheduled.
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} formatDate={formatDate} onOpen={setSelectedEvent} />
                  ))}
                </div>
              )}
            </div>

            {/* Past Events */}
            <div style={{ marginTop: '56px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px' }}>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px', fontWeight: 700, color: '#374151', margin: 0 }}>
                  Past Events
                </h2>
                <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, #37415122, transparent)' }} />
              </div>
              {loadingEvents ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '48px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '3px solid #e5e7eb', borderTopColor: '#374151', animation: 'spin 0.8s linear infinite' }} />
                </div>
              ) : pastEvents.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '48px', background: 'white', borderRadius: '16px', border: '1px dashed #e5e7eb', color: '#9ca3af', fontFamily: "'Playfair Display', Georgia, serif", fontSize: '16px' }}>
                  No past events to display.
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} formatDate={formatDate} isPast onOpen={setSelectedEvent} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT (1/3): Sidebar calendar ── */}
          <aside className="epck-sidebar">
            <MiniMonthCalendar
              events={events2026}
              onSelectDay={setSelectedEvent}
              onOpenYearView={() => setShowYearModal(true)}
            />
          </aside>
        </div>
      </div>

      {/* Hidden template used only to render a high-quality image for the PDF */}
      <div ref={printCalendarRef} style={{ position: 'absolute', left: '-10000px', top: 0, width: '1680px', padding: '48px', background: '#faf7f4' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '28px', borderBottom: '2px solid #7A030D', paddingBottom: '18px' }}>
          <img src={Logo.src || Logo} alt="EPCK" style={{ width: '72px', height: '72px', objectFit: 'contain' }} />
          <div>
            <div style={{ color: '#7A030D', fontWeight: 800, letterSpacing: '1.5px', fontSize: '14px' }}>ELIM PENTECOSTAL CHURCH OF KENYA</div>
            <h2 style={{ margin: '5px 0', color: '#2f1a1a', fontFamily: 'Georgia, serif', fontSize: '30px' }}>Annual Ministry Calendar {year}</h2>
            <p style={{ margin: 0, color: '#6b5a5a' }}>A planning guide for members, ministry leaders, and guests.</p>
          </div>
        </div>
        <YearView events={events2026} onSelectEvent={() => {}} year={year} />
        <p style={{ marginTop: '26px', color: '#6b5a5a', fontSize: '12px' }}>Please confirm local arrangements with your church leadership before travelling.</p>
      </div>

      {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      {showYearModal && (
        <YearViewModal
          year={year}
          events={events2026}
          onSelectEvent={(ev) => { setSelectedEvent(ev); }}
          onClose={() => setShowYearModal(false)}
        />
      )}
    </div>
  );
}
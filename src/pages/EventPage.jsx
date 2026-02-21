import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

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

function getEventCategory(title) {
  const t = title.toLowerCase();
  if (t.includes('prayer') || t.includes('prayers') || t.includes('kesha')) return 'prayer';
  if (t.includes('nec') || t.includes('synod') || t.includes('agm') || t.includes('spic')) return 'nec';
  if (t.includes('mission') || t.includes('church planting')) return 'missions';
  if (t.includes('conference')) return 'conference';
  if (t.includes('training') || t.includes('leaders')) return 'training';
  if (t.includes('youth') || t.includes('ignite') || t.includes('teen')) return 'youth';
  if (t.includes('week') || t.includes('dorcas') || t.includes('caleb') || t.includes('sunday school')) return 'week';
  return 'default';
}

// ─── MONTH NAMES ────────────────────────────────────────────────────────────
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

// ─── YEAR VIEW COMPONENT ────────────────────────────────────────────────────
function YearView({ events, onSelectEvent }) {
  return (
    <div style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
      }}>
        {MONTHS.map((monthName, monthIdx) => {
          const firstDay = new Date(2026, monthIdx, 1).getDay();
          const daysInMonth = new Date(2026, monthIdx + 1, 0).getDate();
          const monthEvents = events.filter(e => {
            const s = new Date(e.start); const en = new Date(e.end);
            return (s.getFullYear() === 2026 && s.getMonth() === monthIdx) ||
                   (en.getFullYear() === 2026 && en.getMonth() === monthIdx);
          });

          const eventsByDay = {};
          monthEvents.forEach(ev => {
            const s = new Date(ev.start); const en = new Date(ev.end);
            for (let d = 1; d <= daysInMonth; d++) {
              const cur = new Date(2026, monthIdx, d);
              if (cur >= s && cur <= en) {
                if (!eventsByDay[d]) eventsByDay[d] = [];
                eventsByDay[d].push(ev);
              }
            }
          });

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
                {monthName} 2026
              </div>
              <div style={{ padding: '12px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginBottom: '4px' }}>
                  {DAYS.map(d => (
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
                    const cat = hasEvent ? getEventCategory(dayEvents[0].title) : null;
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
                        onMouseEnter={e => { if (hasEvent) { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.boxShadow = `0 4px 12px ${color.bg}66`; }}}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                        title={hasEvent ? dayEvents.map(e => e.title).join(', ') : ''}
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

// ─── EVENT DETAIL MODAL ──────────────────────────────────────────────────────
function EventModal({ event, onClose }) {
  if (!event) return null;
  const cat = getEventCategory(event.title);
  const color = categoryColors[cat];
  const start = moment(event.start).format('MMMM D, YYYY');
  const end = moment(event.end).format('MMMM D, YYYY');
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
        onClick={e => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: '20px',
          maxWidth: '460px',
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
          animation: 'slideUp 0.25s ease',
        }}
      >
        <div style={{
          background: `linear-gradient(135deg, ${color.bg} 0%, ${color.bg}cc 100%)`,
          padding: '28px 28px 24px',
          color: 'white',
        }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', opacity: 0.8, marginBottom: '8px', fontFamily: 'system-ui', textTransform: 'uppercase' }}>
            {cat.toUpperCase()}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '22px', fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            {event.title}
          </h2>
        </div>
        <div style={{ padding: '24px 28px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: color.light, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
              📅
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#9ca3af', fontFamily: 'system-ui', marginBottom: '2px' }}>DATE</div>
              <div style={{ fontFamily: 'system-ui', fontWeight: 600, color: '#111', fontSize: '14px' }}>
                {isSameDay ? start : `${start} – ${end}`}
              </div>
            </div>
          </div>
          {!isSameDay && (
            <div style={{
              background: color.light,
              borderRadius: '10px',
              padding: '10px 14px',
              fontSize: '13px',
              color: color.text,
              fontFamily: 'system-ui',
              fontWeight: 600,
            }}>
              {moment(event.end).diff(moment(event.start), 'days') + 1} day event
            </div>
          )}
        </div>
        <div style={{ padding: '0 28px 28px' }}>
          <button
            onClick={onClose}
            style={{
              width: '100%',
              padding: '12px',
              background: color.bg,
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'system-ui',
              letterSpacing: '0.5px',
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
  const items = [
    { label: 'Prayer', key: 'prayer' },
    { label: 'NEC/Admin', key: 'nec' },
    { label: 'Missions', key: 'missions' },
    { label: 'Conference', key: 'conference' },
    { label: 'Training', key: 'training' },
    { label: 'Youth', key: 'youth' },
    { label: 'Special Week', key: 'week' },
    { label: 'General', key: 'default' },
  ];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
      {items.map(({ label, key }) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'white', borderRadius: '20px', padding: '5px 12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: categoryColors[key].bg }} />
          <span style={{ fontSize: '12px', fontFamily: 'system-ui', color: '#374151', fontWeight: 500 }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── MAIN EXPORT ────────────────────────────────────────────────────────────
export default function EventPage() {
  const [date, setDate] = useState(new Date(2026, 0, 1));
  const [view, setView] = useState('month');
  const [showYearView, setShowYearView] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const calendarRef = useRef(null);

  // Inject fonts + animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
      @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      @keyframes slideUp { from { transform: translateY(30px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      @keyframes shimmer { 0%,100% { opacity: 1 } 50% { opacity: 0.6 } }
      .rbc-calendar { font-family: 'DM Sans', system-ui, sans-serif !important; }
      .rbc-header { background: linear-gradient(135deg, #7A030D 0%, #9b1c1c 100%) !important; color: white !important; padding: 10px 8px !important; font-weight: 600 !important; font-size: 13px !important; border: none !important; letter-spacing: 0.3px; }
      .rbc-month-view { border-radius: 16px !important; overflow: hidden !important; border: 1px solid #fde8e8 !important; }
      .rbc-day-bg:hover { background: #fff5f5 !important; transition: background 0.2s; }
      .rbc-today { background: #fff7ed !important; }
      .rbc-off-range-bg { background: #fafafa !important; }
      .rbc-event { border-radius: 6px !important; font-size: 11px !important; font-weight: 600 !important; padding: 2px 6px !important; }
      .rbc-toolbar button { font-family: 'DM Sans', sans-serif !important; font-weight: 600 !important; border-radius: 8px !important; border: 1px solid #e5e7eb !important; color: #374151 !important; }
      .rbc-toolbar button:hover { background: #fff1f2 !important; border-color: #7A030D !important; color: #7A030D !important; }
      .rbc-toolbar button.rbc-active { background: #7A030D !important; color: white !important; border-color: #7A030D !important; }
      .rbc-toolbar-label { font-family: 'Playfair Display', Georgia, serif !important; font-weight: 700 !important; font-size: 20px !important; color: #7A030D !important; }
      .rbc-show-more { color: #7A030D !important; font-weight: 700 !important; font-size: 11px !important; }
      .rbc-date-cell { font-family: 'DM Sans', sans-serif !important; font-size: 13px !important; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoadingEvents(true);
      try {
        const upcomingRes = await fetch('https://elim-backend-jqo7.onrender.com/api/events/upcoming');
        const upcomingData = await upcomingRes.json();
        setUpcomingEvents(upcomingData);
        const pastRes = await fetch('https://elim-backend-jqo7.onrender.com/api/events/past');
        const pastData = await pastRes.json();
        setPastEvents(pastData);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoadingEvents(false);
      }
    };
    fetchEvents();
  }, []);

  const eventStyleGetter = (event) => {
    const cat = getEventCategory(event.title);
    const color = categoryColors[cat];
    return {
      style: {
        backgroundColor: color.bg,
        borderRadius: '6px',
        color: 'white',
        border: 'none',
        fontSize: '11px',
        fontWeight: 600,
        padding: '2px 6px',
        opacity: 0.92,
      },
    };
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const { default: html2canvas } = await import('html2canvas');
      const { jsPDF } = await import('jspdf');
      const el = calendarRef.current;
      const canvas = await html2canvas(el, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const w = pdf.internal.pageSize.getWidth();
      const h = (canvas.height / canvas.width) * w;
      pdf.addImage(imgData, 'PNG', 0, 0, w, h);
      pdf.save('EPCK-Calendar-2026.pdf');
    } catch (err) {
      console.error('PDF error:', err);
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  const formatDate = (dateString) => moment(dateString).format('MMMM DD, YYYY');

  const headerHeight = 120;

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', fontFamily: "'DM Sans', system-ui, sans-serif" }}>

      {/* ── Hero Header ── */}
      <div style={{
        background: 'linear-gradient(135deg, #7A030D 0%, #450007 60%, #1a0003 100%)',
        padding: '56px 32px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
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
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', opacity: 0.7 }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>Home</a>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>›</span>
            <span style={{ color: 'white', fontSize: '13px', fontWeight: 500 }}>Events</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '3px', color: 'rgba(255,200,200,0.8)', marginBottom: '10px', textTransform: 'uppercase' }}>
                EPCK • 2026
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
                onClick={() => setShowYearView(v => !v)}
                style={{
                  padding: '11px 22px',
                  background: showYearView ? 'white' : 'rgba(255,255,255,0.12)',
                  color: showYearView ? '#7A030D' : 'white',
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
                {showYearView ? '← Month View' : '🗓 Full Year View'}
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
                {isDownloading ? '⏳ Generating...' : '⬇ Download PDF'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 20px 60px' }}>
        <Legend />

        <div ref={calendarRef}>
          {showYearView ? (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '24px', fontWeight: 700, color: '#7A030D',
                marginBottom: '24px',
              }}>
                Full Year 2026 Overview
              </h2>
              <YearView events={events2026} onSelectEvent={setSelectedEvent} />
            </div>
          ) : (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 4px 32px rgba(122,3,13,0.08)',
                border: '1px solid #fde8e8',
              }}>
                <Calendar
                  localizer={localizer}
                  events={events2026}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 'calc(100vh - 340px)', minHeight: 560 }}
                  date={date}
                  onNavigate={setDate}
                  view={view}
                  onView={setView}
                  views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
                  eventPropGetter={eventStyleGetter}
                  onSelectEvent={setSelectedEvent}
                  popup
                />
              </div>
            </div>
          )}
        </div>

        {/* ── Upcoming Events ── */}
        <div style={{ marginTop: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '28px' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '28px', fontWeight: 700, color: '#7A030D', margin: 0,
            }}>
              Upcoming Events
            </h2>
            <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, #7A030D22, transparent)' }} />
          </div>
          {loadingEvents ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '48px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: '3px solid #fde8e8', borderTopColor: '#7A030D',
                animation: 'spin 0.8s linear infinite',
              }} />
            </div>
          ) : upcomingEvents.length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '48px',
              background: 'white', borderRadius: '16px',
              border: '1px dashed #fde8e8', color: '#9ca3af',
              fontFamily: "'Playfair Display', Georgia, serif", fontSize: '16px',
            }}>
              No upcoming events scheduled.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} formatDate={formatDate} />
              ))}
            </div>
          )}
        </div>

        {/* ── Past Events ── */}
        <div style={{ marginTop: '64px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '28px' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '28px', fontWeight: 700, color: '#374151', margin: 0,
            }}>
              Past Events
            </h2>
            <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, #37415122, transparent)' }} />
          </div>
          {loadingEvents ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '48px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: '3px solid #e5e7eb', borderTopColor: '#374151',
                animation: 'spin 0.8s linear infinite',
              }} />
            </div>
          ) : pastEvents.length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '48px',
              background: 'white', borderRadius: '16px',
              border: '1px dashed #e5e7eb', color: '#9ca3af',
              fontFamily: "'Playfair Display', Georgia, serif", fontSize: '16px',
            }}>
              No past events to display.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} formatDate={formatDate} isPast />
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}

      <style>{`
        @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
      `}</style>
    </div>
  );
}

function EventCard({ event, formatDate, isPast = false }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: hovered
          ? '0 12px 40px rgba(122,3,13,0.16)'
          : '0 4px 16px rgba(0,0,0,0.06)',
        border: '1px solid #f3e8e8',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        opacity: isPast ? 0.85 : 1,
      }}
    >
      {event.image_path && (
        <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
          <img
            src={event.image_path}
            alt={event.title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transition: 'transform 0.4s ease',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        </div>
      )}
      <div style={{ padding: '20px 22px 22px' }}>
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '17px', fontWeight: 700,
          color: isPast ? '#374151' : '#7A030D',
          margin: '0 0 8px',
        }}>
          {event.title}
        </h3>
        <div style={{ fontSize: '13px', fontWeight: 600, color: isPast ? '#6b7280' : '#EB3237', marginBottom: '6px', fontFamily: 'system-ui' }}>
          {formatDate(event.date)}{event.time && ` · ${event.time}`}
        </div>
        {event.location && (
          <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '8px', fontFamily: 'system-ui' }}>
            📍 {event.location}
          </div>
        )}
        {event.category && (
          <span style={{
            display: 'inline-block', padding: '4px 12px',
            borderRadius: '20px', fontSize: '11px', fontWeight: 700,
            background: '#fff7ed', color: '#7A030D',
            marginBottom: '10px', fontFamily: 'system-ui', letterSpacing: '0.5px', textTransform: 'uppercase',
          }}>
            {event.category}
          </span>
        )}
        {event.description && (
          <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.6, margin: 0, fontFamily: 'system-ui' }}>
            {event.description}
          </p>
        )}
      </div>
    </div>
  );
}
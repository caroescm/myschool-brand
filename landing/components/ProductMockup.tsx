import React from 'react';

const STUDENTS = [
  { initials: 'JG', bg: '#BFEED9', ink: '#1E8F5F', name: 'Jhon Guido R.', email: 'jhongui3400@…', dni: '71483653' },
  { initials: 'RA', bg: '#FBE0A8', ink: '#9A6A0C', name: 'Roberto A. N.', email: 'benicitarh@…',  dni: '24886131' },
  { initials: 'JE', bg: '#BFE7DF', ink: '#2A7A6B', name: 'Juan E. Flores', email: 'juanflorest@…', dni: '46159933' },
  { initials: 'AL', bg: '#C9EBC2', ink: '#3F8A37', name: 'Albert Q.',      email: 'scarfalberth@…', dni: '46588658' },
];

const NAV_ITEMS = [
  { label: 'Inicio' },
  { label: 'Plataforma' },
  { label: 'Comunicaciones' },
  { label: 'Calendario' },
  { label: 'Estudiantes' },
  { label: 'Padres', active: true },
  { label: 'Personal' },
  { label: 'Cursos' },
];

export function ProductMockup() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-[#E9ECEF]"
      style={{ fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif", WebkitFontSmoothing: 'antialiased' }}
    >
      <div className="flex" style={{ minHeight: 360 }}>
        {/* Sidebar */}
        <aside className="flex flex-col border-r border-[#E9ECEF] bg-white" style={{ width: 176, padding: '14px 10px', gap: 2 }}>
          <div className="flex items-center gap-2 pb-3 mb-2 border-b border-[#F4F6F8]" style={{ paddingLeft: 8 }}>
            <svg width="20" height="13" viewBox="0 0 100 60" aria-hidden="true">
              <circle cx="30" cy="30" r="26" fill="#0FA9E8" />
              <circle cx="72" cy="38" r="10" fill="#0FA9E8" />
            </svg>
            <span style={{ fontWeight: 600, fontSize: 12, letterSpacing: '-0.01em', color: '#0D1116' }}>MySchool</span>
          </div>
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 8px',
                borderRadius: 7,
                fontSize: 11.5,
                fontWeight: item.active ? 500 : 400,
                color: item.active ? '#086C97' : '#5F6B77',
                background: item.active ? '#EAF7FE' : 'transparent',
              }}
            >
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 3,
                  background: item.active ? '#34B5EB' : '#D9DEE3',
                  flexShrink: 0,
                }}
              />
              {item.label}
            </div>
          ))}
        </aside>

        {/* Main */}
        <main className="flex-1 bg-[#FAFBFC]" style={{ padding: '16px 18px' }}>
          <h4 style={{ margin: 0, fontSize: 16, fontWeight: 600, letterSpacing: '-0.015em', color: '#0D1116' }}>Padres</h4>
          <p style={{ margin: '2px 0 10px', fontSize: 11, color: '#5F6B77' }}>Busca y revisa la información de los padres.</p>

          {/* Search + filter */}
          <div className="flex items-center gap-2 mb-3">
            <div
              className="flex items-center gap-2 flex-1"
              style={{ height: 30, padding: '0 10px', border: '1px solid #D9DEE3', borderRadius: 8, background: '#fff', fontSize: 11 }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B95A0" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="6.5" /><path d="M16 16l4 4" />
              </svg>
              <span style={{ color: '#8B95A0' }}>Buscar por nombre…</span>
            </div>
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', padding: '3px 8px',
                borderRadius: 999, fontSize: 10, fontWeight: 500,
                background: '#EAF7FE', color: '#086C97', border: '1px solid #CFEDFB',
              }}
            >
              Todos los niveles
            </span>
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', padding: '3px 8px',
                borderRadius: 999, fontSize: 10, fontWeight: 500,
                background: '#F4F6F8', color: '#5F6B77', border: '1px solid #E9ECEF',
              }}
            >
              5.°
            </span>
          </div>

          {/* Table */}
          <div style={{ background: '#fff', border: '1px solid #E9ECEF', borderRadius: 10, overflow: 'hidden', fontSize: 11 }}>
            <div
              style={{
                display: 'grid', gridTemplateColumns: '68px 1fr 1fr 56px',
                gap: 8, padding: '7px 10px',
                borderBottom: '1px solid #E9ECEF',
                color: '#8B95A0', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase',
              }}
            >
              <span>DNI</span><span>Nombre</span><span>Email</span><span>Rol</span>
            </div>
            {STUDENTS.map((s) => (
              <div
                key={s.dni}
                style={{
                  display: 'grid', gridTemplateColumns: '68px 1fr 1fr 56px',
                  gap: 8, padding: '8px 10px', alignItems: 'center',
                  borderBottom: '1px solid #F4F6F8',
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#5F6B77', fontSize: 10 }}>{s.dni}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontWeight: 500, color: '#1A2128' }}>
                  <span
                    style={{
                      width: 22, height: 22, borderRadius: '50%',
                      background: s.bg, color: s.ink,
                      display: 'inline-grid', placeItems: 'center',
                      fontSize: 8, fontWeight: 600, flexShrink: 0,
                    }}
                  >
                    {s.initials}
                  </span>
                  {s.name}
                </span>
                <span style={{ color: '#5F6B77' }}>{s.email}</span>
                <span
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    padding: '2px 7px', borderRadius: 999,
                    fontSize: 9.5, fontWeight: 500,
                    background: '#F4F6F8', color: '#2A333C', border: '1px solid #E9ECEF',
                  }}
                >
                  Padre
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

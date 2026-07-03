import React from 'react';
import { useReveal } from '../hooks/useReveal';

function MSMark() {
  return (
    <svg width="34" height="22" viewBox="0 0 100 60" aria-hidden="true">
      <circle cx="30" cy="30" r="26" fill="#0FA9E8" />
      <circle cx="72" cy="38" r="10" fill="#0FA9E8" />
    </svg>
  );
}

const FOOTER_COLS = [
  {
    heading: 'Producto',
    links: ['Informes y Boletines', 'Comunicaciones', 'Asistencia', 'Calendario', 'Nuestra IA'],
  },
  {
    heading: 'Empresa',
    links: ['Acerca de nosotros', 'Blog', 'Carreras', 'Prensa'],
  },
  {
    heading: 'Legal',
    links: ['Términos de uso', 'Política de privacidad', 'Cookies'],
  },
];

export function Footer() {
  const reveal = useReveal<HTMLElement>();
  return (
    <footer
      ref={reveal.ref}
      style={{
        background: '#0D1116',
        fontFamily: "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif",
        WebkitFontSmoothing: 'antialiased',
        color: '#5F6B77',
        ...reveal.style,
      }}
    >
      {/* Top section */}
      <div
        className="max-w-[1240px] mx-auto px-12"
        style={{ paddingTop: 64, paddingBottom: 48 }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 40 }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <a href="#" className="inline-flex items-center gap-2.5 no-underline mb-4 block">
              <MSMark />
              <span
                style={{ fontWeight: 600, fontSize: 18, letterSpacing: '-0.02em', color: '#fff' }}
              >
                MySchool
              </span>
            </a>
            <p style={{ fontSize: 13.5, lineHeight: 1.65, color: '#5F6B77', margin: '16px 0 0', maxWidth: 220 }}>
              El sistema operativo de la educación K–12 en Perú y LATAM.
            </p>
            {/* Social / market tag */}
            <div style={{ marginTop: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Perú', 'LATAM'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 11.5, fontWeight: 500, padding: '3px 10px',
                    borderRadius: 999, border: '1px solid #2A333C',
                    color: '#8B95A0', letterSpacing: '0.04em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <h3
                style={{
                  fontSize: 11.5, fontWeight: 500, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: '#404B56',
                  margin: '0 0 16px',
                }}
              >
                {col.heading}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: 13.5, color: '#5F6B77', textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#fff')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#5F6B77')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #1A2128' }}>
        <div
          className="max-w-[1240px] mx-auto px-12"
          style={{
            paddingTop: 24, paddingBottom: 32,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 12,
          }}
        >
          <span style={{ fontSize: 12.5, color: '#404B56' }}>
            © {new Date().getFullYear()} MySchool. Todos los derechos reservados.
          </span>
          <span
            style={{
              fontSize: 12,
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              color: '#2A333C',
            }}
          >
            Brand Kit v1.0 · Mayo 2026
          </span>
        </div>
      </div>
    </footer>
  );
}

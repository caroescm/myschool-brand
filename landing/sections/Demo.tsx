import React from 'react';
import { useReveal } from '../hooks/useReveal';

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Demo() {
  const reveal = useReveal<HTMLElement>();
  return (
    <section
      ref={reveal.ref}
      id="demo"
      style={{
        background: 'linear-gradient(160deg, #EAF7FE 0%, #F4F6F8 100%)',
        padding: '80px 0',
        fontFamily: "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif",
        WebkitFontSmoothing: 'antialiased',
        ...reveal.style,
      }}
    >
      <div className="max-w-[1240px] mx-auto px-12">
        <div
          className="overflow-hidden"
          style={{
            background: '#fff',
            borderRadius: 24,
            display: 'grid',
            gridTemplateColumns: '45% 1fr',
            minHeight: 360,
            boxShadow: '0 24px 48px -16px rgba(13,17,22,0.14), 0 4px 8px rgba(13,17,22,0.04)',
          }}
        >
          {/* Left: decorative panel */}
          <div
            className="relative overflow-hidden"
            style={{ background: 'linear-gradient(145deg, #CFEDFB 0%, #EAF7FE 100%)' }}
            aria-hidden="true"
          >
            {/* Large background circle */}
            <div
              style={{
                position: 'absolute', width: 380, height: 380, borderRadius: '50%',
                background: 'rgba(15,169,232,0.12)', right: -120, bottom: -100,
              }}
            />
            {/* Medium circle */}
            <div
              style={{
                position: 'absolute', width: 200, height: 200, borderRadius: '50%',
                background: 'rgba(15,169,232,0.08)', left: 30, top: 20,
              }}
            />
            {/* Small accent circle */}
            <div
              style={{
                position: 'absolute', width: 80, height: 80, borderRadius: '50%',
                background: 'rgba(15,169,232,0.16)', right: 80, top: 60,
              }}
            />
            {/* Peach accent */}
            <div
              style={{
                position: 'absolute', width: 140, height: 140, borderRadius: '50%',
                background: 'rgba(248,214,194,0.6)', left: -40, bottom: 40,
              }}
            />
            {/* Large MySchool mark watermark */}
            <div style={{ position: 'absolute', bottom: 48, left: 48 }}>
              <svg
                width="140" height="88"
                viewBox="0 0 100 60"
                style={{ opacity: 0.18 }}
              >
                <circle cx="30" cy="30" r="26" fill="#0FA9E8" />
                <circle cx="72" cy="38" r="10" fill="#0FA9E8" />
              </svg>
            </div>
          </div>

          {/* Right: text + CTA */}
          <div
            className="flex flex-col justify-center"
            style={{ padding: '64px 56px' }}
          >
            <h2
              style={{
                fontSize: 'clamp(24px, 2.6vw, 36px)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                fontWeight: 600,
                color: '#0D1116',
                margin: '0 0 16px',
                maxWidth: 440,
              }}
            >
              ¿Listo para explorar una mejor gestión escolar?
            </h2>
            <p
              style={{
                fontSize: 15.5,
                lineHeight: 1.65,
                color: '#5F6B77',
                margin: '0 0 36px',
                maxWidth: 400,
              }}
            >
              Simplifica cada paso del proceso educativo para que puedas dedicar más tiempo a tus estudiantes.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 self-start no-underline transition-colors"
              style={{
                height: 44,
                padding: '0 24px',
                borderRadius: 10,
                border: '1.5px solid #0D1116',
                background: 'transparent',
                color: '#0D1116',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#0D1116';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#0D1116';
              }}
            >
              Reservar una Demo <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

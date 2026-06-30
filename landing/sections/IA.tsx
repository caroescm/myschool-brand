'use client';

import React, { useState } from 'react';

const AI_FEATURES = [
  { id: 'curriculum', label: 'Asistente de Currículum' },
  { id: 'tareas', label: 'Constructor de Tareas' },
  { id: 'calificacion', label: 'Asistente de Calificación' },
  { id: 'tutores', label: 'Tutores IA' },
  {
    id: 'boletines',
    label: 'Asistente de Boletines',
    description:
      'Redacta boletines en minutos. Sintetiza el historial del estudiante en comentarios personalizados y basados en evidencia.',
  },
  { id: 'redaccion', label: 'Asistente de Redacción' },
];

function AIMockup() {
  return (
    <div
      className="w-full h-full flex items-center justify-center rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #A3DEF7 0%, #CFEDFB 100%)', minHeight: 420, padding: 32 }}
    >
      {/* Floating white card */}
      <div
        className="w-full"
        style={{
          background: '#fff',
          borderRadius: 14,
          overflow: 'hidden',
          boxShadow: '0 16px 48px rgba(13,17,22,0.16)',
          maxWidth: 520,
        }}
      >
        {/* Card header */}
        <div
          className="flex items-center justify-between"
          style={{ padding: '12px 16px', borderBottom: '1px solid #E9ECEF' }}
        >
          <div className="flex items-center gap-2">
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8B95A0', fontSize: 13 }}>{'‹'}</button>
            <div
              className="flex items-center gap-2"
              style={{ fontSize: 11.5, color: '#5F6B77' }}
            >
              <span
                style={{
                  width: 26, height: 26, borderRadius: '50%',
                  background: '#BFEED9', color: '#1E8F5F',
                  display: 'inline-grid', placeItems: 'center',
                  fontSize: 9, fontWeight: 600, flexShrink: 0,
                }}
              >
                JG
              </span>
              <div>
                <div style={{ fontWeight: 600, color: '#0D1116', fontSize: 12 }}>Jhon Guido Romero</div>
                <div style={{ color: '#8B95A0', fontSize: 10 }}>
                  3.° Secundaria · Fin de trimestre
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              style={{
                fontSize: 10, padding: '3px 8px', borderRadius: 5,
                border: '1px solid #E9ECEF', background: '#fff', color: '#5F6B77', cursor: 'pointer',
              }}
            >
              Vista previa
            </button>
            <button
              style={{
                fontSize: 10, padding: '3px 8px', borderRadius: 5,
                border: 'none', background: '#DC4F4F', color: '#fff', cursor: 'pointer',
              }}
            >
              Bloquear boletín
            </button>
          </div>
        </div>

        {/* Blank report area (simulated) */}
        <div style={{ padding: '16px 16px 0', background: '#FAFBFC' }}>
          <div style={{ background: '#fff', borderRadius: 8, border: '1px solid #E9ECEF', padding: '12px 14px' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#0D1116', marginBottom: 8 }}>Comentario del docente</div>
            <p style={{ fontSize: 12, color: '#404B56', lineHeight: 1.65, margin: 0 }}>
              Jhon ha demostrado una comprensión sólida de los conceptos de Ciencias y ha mostrado
              esfuerzo constante durante el trimestre. Si bien su trabajo cumple con las expectativas,
              existe potencial para una comprensión más profunda y una aplicación más creativa de las
              ideas. Con esfuerzo continuo y curiosidad, Jhon puede desarrollar aún más estas
              habilidades y...
            </p>

            {/* Writing indicator */}
            <div
              className="flex items-center justify-between"
              style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid #E9ECEF' }}
            >
              <div className="flex items-center gap-2" style={{ fontSize: 11, color: '#5F6B77' }}>
                <span
                  style={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: '#0FA9E8', display: 'inline-block',
                    animation: 'pulse 1.2s infinite',
                  }}
                />
                Escribiendo...
              </div>
              <button
                style={{
                  fontSize: 11, padding: '2px 8px', borderRadius: 5,
                  border: '1px solid #E9ECEF', background: '#fff', color: '#5F6B77', cursor: 'pointer',
                }}
              >
                Detener
              </button>
            </div>

            {/* Action row */}
            <div className="flex items-center justify-between" style={{ marginTop: 8 }}>
              <div className="flex items-center gap-1.5">
                {['＋', '✦', '⎘', '•••'].map((icon) => (
                  <button
                    key={icon}
                    style={{
                      width: 26, height: 26, borderRadius: 5,
                      border: '1px solid #E9ECEF', background: '#fff',
                      fontSize: 10, cursor: 'pointer', color: '#5F6B77',
                    }}
                  >
                    {icon}
                  </button>
                ))}
              </div>
              <span
                style={{
                  padding: '3px 10px', borderRadius: 5,
                  background: '#EAF7FE', color: '#086C97',
                  fontSize: 11, fontWeight: 700,
                }}
              >
                IA
              </span>
            </div>
          </div>
          <div style={{ height: 16 }} />
        </div>
      </div>
    </div>
  );
}

export function IA() {
  const [activeId, setActiveId] = useState('boletines');
  const active = AI_FEATURES.find((f) => f.id === activeId)!;

  return (
    <section
      id="ia"
      className="bg-white border-t border-[#E9ECEF]"
      style={{
        padding: '80px 0',
        fontFamily: "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif",
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              fontWeight: 600,
              color: '#0D1116',
              margin: '0 auto 12px',
            }}
          >
            La suite de IA más poderosa para colegios K–12
          </h2>
          <p style={{ fontSize: 16, color: '#5F6B77', margin: 0 }}>
            Ahorra hasta 10 horas cada semana. Simplifica tu trabajo, amplifica tu impacto.
          </p>
        </div>

        {/* Two-column */}
        <div className="grid gap-16 items-start" style={{ gridTemplateColumns: '320px 1fr' }}>
          {/* Left: feature list */}
          <div>
            {AI_FEATURES.map((feature, i) => {
              const isActive = feature.id === activeId;
              return (
                <div key={feature.id}>
                  <button
                    onClick={() => setActiveId(feature.id)}
                    className="w-full text-left py-4 transition-colors"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      padding: '16px 0',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? '#0D1116' : '#8B95A0',
                        display: 'block',
                        lineHeight: 1.4,
                      }}
                    >
                      {feature.label}
                    </span>
                    {isActive && feature.description && (
                      <span
                        style={{
                          fontSize: 13.5,
                          color: '#5F6B77',
                          display: 'block',
                          marginTop: 6,
                          lineHeight: 1.6,
                        }}
                      >
                        {feature.description}
                      </span>
                    )}
                  </button>
                  {i < AI_FEATURES.length - 1 && (
                    <div style={{ height: 1, background: '#E9ECEF' }} />
                  )}
                </div>
              );
            })}

            <a
              href="#demo"
              className="inline-flex items-center mt-8 no-underline transition-colors"
              style={{
                height: 44,
                padding: '0 20px',
                borderRadius: 10,
                background: '#0D1116',
                color: '#fff',
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '-0.005em',
              }}
            >
              Explorar MySchool IA
            </a>
          </div>

          {/* Right: AI mockup panel */}
          <AIMockup />
        </div>
      </div>
    </section>
  );
}

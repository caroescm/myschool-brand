'use client';

import React, { useState } from 'react';

function MSMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 100 60" aria-hidden="true">
      <circle cx="30" cy="30" r="26" fill="currentColor" />
      <circle cx="72" cy="38" r="10" fill="currentColor" />
    </svg>
  );
}

function ChatBubbleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h16v11H9l-5 4z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

const OPTION_BUTTONS = [
  'Padre de familia / Estudiante',
  'Ventas a colegios / Conocer MySchool',
];

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 12,
        fontFamily: "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif",
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* ── Chat popup ── */}
      {open && (
        <div
          style={{
            width: 372,
            background: '#fff',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 24px 48px -12px rgba(13,17,22,0.24), 0 4px 16px rgba(13,17,22,0.08)',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: '#0FA9E8',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {/* Avatar mark */}
              <div
                style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'rgba(255,255,255,0.2)',
                  display: 'grid', placeItems: 'center',
                  color: '#fff', flexShrink: 0,
                }}
              >
                <MSMark size={20} />
              </div>
              <span style={{ color: '#fff', fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em' }}>
                MySchool
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'rgba(255,255,255,0.85)', padding: 4,
              }}
              aria-label="Cerrar chat"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '20px 18px 0' }}>
            {/* Avatar + messages */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {/* Bot avatar */}
              <div
                style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: '#0FA9E8',
                  display: 'grid', placeItems: 'center',
                  color: '#fff', flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(15,169,232,0.35)',
                }}
              >
                <MSMark size={22} />
              </div>

              {/* Greeting bubbles */}
              <div
                style={{
                  background: '#F4F6F8', borderRadius: '4px 14px 14px 14px',
                  padding: '10px 14px', fontSize: 14, color: '#0D1116', fontWeight: 500,
                  alignSelf: 'flex-start',
                }}
              >
                ¡Hola!
              </div>
              <div
                style={{
                  background: '#F4F6F8', borderRadius: '4px 14px 14px 14px',
                  padding: '10px 14px', fontSize: 14, color: '#0D1116',
                  alignSelf: 'flex-start',
                }}
              >
                Bienvenido a MySchool
              </div>

              {/* Option buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
                {OPTION_BUTTONS.map((label) => (
                  <button
                    key={label}
                    style={{
                      background: '#fff',
                      border: '1px solid #D9DEE3',
                      borderRadius: 10,
                      padding: '10px 14px',
                      textAlign: 'left',
                      fontSize: 13.5,
                      color: '#2A333C',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.15s, background 0.15s',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = '#0FA9E8';
                      e.currentTarget.style.background = '#EAF7FE';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = '#D9DEE3';
                      e.currentTarget.style.background = '#fff';
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cookie consent footer */}
          {!agreed && (
            <div
              style={{
                borderTop: '1px solid #E9ECEF',
                padding: '14px 18px',
                marginTop: 16,
                background: '#FAFBFC',
              }}
            >
              <p style={{ fontSize: 11.5, color: '#8B95A0', lineHeight: 1.55, margin: '0 0 10px' }}>
                Este servicio de chat utiliza cookies para interactuar contigo y mantener el
                historial de tus chats. Nuestro proveedor monitorea y grabará este chat para
                garantizar la calidad.{' '}
                <a href="#" style={{ color: '#0FA9E8', textDecoration: 'underline' }}>
                  Política de privacidad
                </a>
                .
              </p>
              <button
                onClick={() => setAgreed(true)}
                className="w-full"
                style={{
                  background: '#0FA9E8',
                  border: 'none',
                  borderRadius: 10,
                  color: '#fff',
                  fontFamily: 'inherit',
                  fontSize: 13.5,
                  fontWeight: 500,
                  padding: '10px 0',
                  cursor: 'pointer',
                  width: '100%',
                  letterSpacing: '-0.005em',
                }}
              >
                Estoy de acuerdo
              </button>
            </div>
          )}

          {/* Spacer when agreed */}
          {agreed && <div style={{ height: 16 }} />}
        </div>
      )}

      {/* ── Floating chat bubble button ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Cerrar chat' : 'Abrir chat'}
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#0FA9E8',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          display: 'grid',
          placeItems: 'center',
          boxShadow: '0 8px 24px rgba(15,169,232,0.45)',
          transition: 'background 0.15s, transform 0.15s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = '#0A8AC0';
          e.currentTarget.style.transform = 'scale(1.06)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = '#0FA9E8';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {open ? <CloseIcon /> : <ChatBubbleIcon />}
      </button>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PRODUCT_TABS } from '../constants';
import { ProductMockup } from '../components/ProductMockup';

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Producto() {
  const [activeId, setActiveId] = useState(PRODUCT_TABS[0].id);
  const active = PRODUCT_TABS.find((t) => t.id === activeId)!;
  const activeIdx = PRODUCT_TABS.findIndex((t) => t.id === activeId);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    pillRefs.current[activeIdx]?.scrollIntoView({
      inline: 'center',
      block: 'nearest',
      behavior: 'smooth',
    });
  }, [activeIdx]);

  return (
    <section
      id="producto"
      className="bg-white border-t border-[#E9ECEF]"
      style={{
        padding: '80px 0',
        fontFamily: "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif",
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              fontWeight: 600,
              color: '#0D1116',
              margin: '0 auto',
              maxWidth: 680,
            }}
          >
            Una plataforma para todos los flujos de trabajo de tu colegio
          </h2>
        </div>

        {/* Pill carousel — centered active, fades on edges */}
        <div
          className="mb-8"
          style={{
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 18%, black 82%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 18%, black 82%, transparent)',
          }}
        >
          <div
            ref={scrollRef}
            className="flex items-center gap-2 overflow-x-auto pb-1"
            style={{ scrollbarWidth: 'none', scrollBehavior: 'smooth' }}
          >
            <span className="flex-shrink-0" style={{ width: '40vw' }} />
            {PRODUCT_TABS.map((tab, i) => {
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  ref={(el) => { pillRefs.current[i] = el; }}
                  onClick={() => setActiveId(tab.id)}
                  className="flex-shrink-0"
                  style={{
                    padding: '7px 16px',
                    borderRadius: 999,
                    fontSize: 13.5,
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    border: isActive ? '1px solid #CFEDFB' : '1px solid #E9ECEF',
                    background: isActive ? '#EAF7FE' : '#F4F6F8',
                    color: isActive ? '#086C97' : '#5F6B77',
                    fontFamily: 'inherit',
                    whiteSpace: 'nowrap',
                    transform: isActive ? 'scale(1.06)' : 'scale(1)',
                    transition: 'transform 0.2s, background 0.2s, color 0.2s',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
            <span className="flex-shrink-0" style={{ width: '40vw' }} />
          </div>
        </div>

        {/* Two-column content */}
        <div className="grid gap-0 overflow-hidden rounded-2xl border border-[#E9ECEF]" style={{ gridTemplateColumns: '1fr 1.6fr' }}>
          {/* Left: dark feature panel */}
          <div
            className="flex flex-col justify-between"
            style={{
              background: '#1A2128',
              padding: '40px 36px',
              borderRight: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: 28,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  fontWeight: 600,
                  color: '#fff',
                  margin: '0 0 12px',
                }}
              >
                {active.headline}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#8B95A0', margin: '0 0 28px' }}>
                {active.description}
              </p>

              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {active.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 inline-grid place-items-center rounded-full mt-0.5"
                      style={{ width: 20, height: 20, background: '#0FA9E8', color: '#fff' }}
                    >
                      <CheckIcon />
                    </span>
                    <span style={{ fontSize: 14, color: '#D9DEE3', lineHeight: 1.55 }}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 self-start mt-10 no-underline transition-colors"
              style={{
                height: 40, padding: '0 18px', borderRadius: 10,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.14)',
                color: '#fff', fontSize: 14, fontWeight: 500,
              }}
            >
              Conocer más <ArrowIcon />
            </a>
          </div>

          {/* Right: product mockup */}
          <div
            className="flex items-start"
            style={{ background: '#F4F6F8', padding: '32px 28px' }}
          >
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

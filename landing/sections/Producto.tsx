'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PRODUCT_TABS } from '../constants';

// ponytail: brand pastel pairs from MySchool Brand Kit.html, cycled by tab index
const CARD_PALETTE = [
  { bg: '#EAF7FE', accent: '#0A8AC0', text: '#086C97' },
  { bg: '#BFEED9', accent: '#22A06B', text: '#1E8F5F' },
  { bg: '#FBE0A8', accent: '#E5A30B', text: '#9A6A0C' },
  { bg: '#C9EBC2', accent: '#3F8A37', text: '#3F8A37' },
  { bg: '#DCD2F3', accent: '#6E55B5', text: '#6E55B5' },
  { bg: '#F8D6C2', accent: '#B0541D', text: '#B0541D' },
];

const PEEK_W = 1144; // 1240px max-width container minus 48px px-12 padding
const GAP = 32;
const STEP = PEEK_W + GAP;
const CARD_H = 520;

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

type ProductTab = (typeof PRODUCT_TABS)[number];
type CardColor = (typeof CARD_PALETTE)[number];

function CardContent({ tab, colors }: { tab: ProductTab; colors: CardColor }) {
  return (
    <div className="w-full h-full grid" style={{ gridTemplateColumns: '1fr 1.15fr', textAlign: 'left' }}>
      <div className="flex flex-col justify-center" style={{ padding: '44px 40px' }}>
        <h3
          style={{
            fontSize: 38,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            fontWeight: 700,
            color: '#0D1116',
            margin: '0 0 14px',
          }}
        >
          {tab.headline}
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: '#404B56', margin: '0 0 24px' }}>
          {tab.description}
        </p>

        <ul className="list-none p-0 m-0 flex flex-col gap-2.5 mb-8">
          {tab.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2.5">
              <span className="flex-shrink-0 inline-flex" style={{ color: colors.accent }}>
                <CheckIcon />
              </span>
              <span style={{ fontSize: 14, color: '#2A333C', lineHeight: 1.5 }}>{bullet}</span>
            </li>
          ))}
        </ul>

        <span
          className="inline-flex items-center gap-2 self-start no-underline"
          style={{
            height: 38, padding: '0 16px', borderRadius: 10,
            border: `1px solid ${colors.accent}`,
            color: colors.text, fontSize: 14, fontWeight: 500,
          }}
        >
          Conocer más
        </span>
      </div>

      {/* ponytail: empty image slot, user drops in their own screenshot per tab */}
      <div className="flex items-center justify-center" style={{ padding: 16 }}>
        <div className="w-full h-full rounded-xl" style={{ background: 'rgba(255,255,255,0.5)' }} />
      </div>
    </div>
  );
}

export function Producto() {
  const [activeId, setActiveId] = useState(PRODUCT_TABS[0].id);
  const activeIndex = PRODUCT_TABS.findIndex((t) => t.id === activeId);
  const colorFor = (id: string) => CARD_PALETTE[PRODUCT_TABS.findIndex((t) => t.id === id) % CARD_PALETTE.length];
  const rowRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const row = rowRef.current;
    const btn = pillRefs.current[activeIndex];
    if (!row || !btn) return;
    const rr = row.getBoundingClientRect();
    const br = btn.getBoundingClientRect();
    const margin = 24; // recenter once the active pill is within this many px of the edge
    if (br.left < rr.left + margin || br.right > rr.right - margin) {
      row.scrollTo({ left: row.scrollLeft + br.left - rr.left - (rr.width - br.width) / 2, behavior: 'smooth' });
    }
  }, [activeId, activeIndex]);

  return (
    <section
      id="producto"
      className="bg-white"
      style={{
        padding: '80px 0',
        fontFamily: "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif",
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-12">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              fontWeight: 600,
              color: '#0D1116',
              margin: '0 auto',
              whiteSpace: 'nowrap',
            }}
          >
            Una plataforma para todos los flujos de trabajo de tu colegio
          </h2>
        </div>

        {/* Pill row — static infinite look, click to center */}
        <style>{`.pill-row::-webkit-scrollbar{display:none}`}</style>
        <div
          className="mb-8"
          style={{
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <div
            ref={rowRef}
            className="pill-row"
            style={{ overflowX: 'auto', scrollbarWidth: 'none' }}
          >
            <div className="flex items-center gap-2" style={{ width: 'max-content' }}>
            {[...PRODUCT_TABS, ...PRODUCT_TABS].map((tab, i) => {
              const isActive = tab.id === activeId;
              return (
                <button
                  key={i}
                  ref={(el) => { pillRefs.current[i] = el; }}
                  onClick={() => setActiveId(tab.id)}
                  className="flex-shrink-0"
                  style={{
                    padding: '7px 16px',
                    borderRadius: 8,
                    fontSize: 13.5,
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    border: 'none',
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
            </div>
          </div>
        </div>

      </div>

      {/* Peeking card carousel — full-bleed, track slides horizontally so cards glide into the center stage */}
      <div
        className="overflow-hidden mt-8"
        style={{ position: 'relative', width: '100vw', left: '50%', transform: 'translateX(-50%)', height: CARD_H }}
      >
        <div
          className="flex"
          style={{
            gap: GAP,
            transform: `translateX(calc(50vw - ${PEEK_W / 2}px - ${activeIndex * STEP}px))`,
            transition: 'transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        >
          {PRODUCT_TABS.map((tab, i) => {
            const distance = i - activeIndex;
            const isActive = distance === 0;
            const colors = colorFor(tab.id);
            return (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                className="rounded-2xl cursor-pointer border-0 p-0 overflow-hidden flex-shrink-0"
                style={{
                  width: PEEK_W,
                  height: CARD_H,
                  background: colors.bg,
                  transform: isActive ? 'scale(1)' : 'scale(0.93)',
                  transformOrigin: distance < 0 ? 'right center' : 'left center',
                  transition: 'transform 0.5s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.5s ease, box-shadow 0.5s ease',
                  zIndex: isActive ? 2 : 1,
                  opacity: isActive ? 1 : 0.4,
                  boxShadow: isActive
                    ? '0 12px 24px -18px rgba(13,17,22,0.15)'
                    : distance < 0
                    ? 'inset -12px 0 24px -12px rgba(0,0,0,0.12)'
                    : 'inset 12px 0 24px -12px rgba(0,0,0,0.12)',
                }}
                aria-label={tab.label}
              >
                <CardContent tab={tab} colors={colors} />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

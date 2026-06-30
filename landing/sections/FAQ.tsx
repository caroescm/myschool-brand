'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', flexShrink: 0 }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="bg-white border-t border-[#E9ECEF]"
      style={{
        padding: '80px 0',
        fontFamily: "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif",
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-12">
        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(48px, 6vw, 80px)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            color: '#0D1116',
            margin: '0 0 56px',
          }}
        >
          Preguntas frecuentes
        </h2>

        {/* Accordion */}
        <div>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ borderTop: '1px solid #E9ECEF' }}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between text-left transition-colors"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    padding: '24px 0',
                    gap: 24,
                  }}
                >
                  <span
                    style={{
                      fontSize: 'clamp(16px, 1.6vw, 20px)',
                      fontWeight: 500,
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                      color: '#086C97',
                    }}
                  >
                    {i + 1}. {item.question}
                  </span>
                  <span style={{ color: '#8B95A0' }}>
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>

                {/* Answer */}
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? 300 : 0,
                    transition: 'max-height 0.25s ease',
                  }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: '#5F6B77',
                      margin: '0 0 28px',
                      paddingRight: 48,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
          {/* Close the last item with a border */}
          <div style={{ borderTop: '1px solid #E9ECEF' }} />
        </div>
      </div>
    </section>
  );
}

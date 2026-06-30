'use client';

import React, { useEffect, useState } from 'react';
import { NAV_LINKS } from '../constants';

function MSMark() {
  return (
    <svg width="34" height="22" viewBox="0 0 100 60" aria-hidden="true">
      <circle cx="30" cy="30" r="26" fill="#0FA9E8" />
      <circle cx="72" cy="38" r="10" fill="#0FA9E8" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#E9ECEF] transition-shadow duration-200"
      style={{
        backdropFilter: 'saturate(140%) blur(12px)',
        WebkitBackdropFilter: 'saturate(140%) blur(12px)',
        background: 'rgba(255,255,255,0.82)',
        boxShadow: scrolled ? '0 1px 12px rgba(13,17,22,0.08)' : 'none',
        fontFamily: "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif",
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <MSMark />
          <span
            className="text-[#0D1116]"
            style={{ fontWeight: 600, fontSize: 18, letterSpacing: '-0.02em' }}
          >
            MySchool
          </span>
        </a>

        {/* Nav links */}
        <nav className="flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[#5F6B77] hover:text-[#0D1116] transition-colors no-underline"
              style={{ fontSize: 13.5, fontWeight: 500, letterSpacing: '0.01em' }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#demo"
          className="inline-flex items-center h-10 px-[18px] rounded-[10px] bg-[#0FA9E8] hover:bg-[#0A8AC0] text-white text-sm font-medium transition-colors no-underline"
          style={{
            letterSpacing: '-0.005em',
            boxShadow: '0 1px 0 rgba(255,255,255,0.18) inset, 0 1px 2px rgba(8,108,151,0.3)',
          }}
        >
          Solicitar Demo
        </a>
      </div>
    </header>
  );
}

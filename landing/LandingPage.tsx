/**
 * Fonts loaded via index.html: Inter, Instrument Serif, JetBrains Mono (Google Fonts)
 */

import React from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Producto } from './sections/Producto';
import { IA } from './sections/IA';
import { FAQ } from './sections/FAQ';
import { Demo } from './sections/Demo';
import { Footer } from './sections/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';

export function LandingPage() {
  return (
    <div
      style={{
        fontFamily: "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif",
        fontFeatureSettings: "'cv11','ss01','ss03'",
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility',
        color: '#1A2128',
        background: '#FAFBFC',
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <Producto />
        <IA />
        <FAQ />
        <Demo />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}

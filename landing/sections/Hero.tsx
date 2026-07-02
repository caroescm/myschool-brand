'use client';

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-white overflow-hidden"
      style={{ fontFamily: "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif", WebkitFontSmoothing: 'antialiased' }}
    >
      <div className="max-w-[1240px] mx-auto px-12 pt-20">
        {/* Headline + CTAs */}
        <div className="flex items-start justify-between mt-6 gap-8">
          <h1
            style={{
              fontFamily: "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif",
              fontSize: 'clamp(56px, 7vw, 88px)',
              lineHeight: 0.96,
              letterSpacing: '-0.045em',
              fontWeight: 600,
              color: '#0D1116',
              margin: 0,
              maxWidth: '62%',
            }}
          >
            Menos horas administrando,
            <br />
            <em
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#0FA9E8',
                letterSpacing: '-0.02em',
              }}
            >
              más horas educando.
            </em>
          </h1>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 pt-2 flex-shrink-0">
            <a
              href="#demo"
              className="inline-flex items-center h-11 px-6 rounded-[10px] bg-[#0D1116] hover:bg-[#2A333C] text-white font-medium transition-colors no-underline"
              style={{ fontSize: 14, letterSpacing: '-0.005em' }}
            >
              Agenda una demo hoy
            </a>
            <a
              href="#producto"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-[10px] bg-white hover:bg-[#F4F6F8] text-[#0D1116] font-medium transition-colors no-underline border border-[#D9DEE3]"
              style={{ fontSize: 14, letterSpacing: '-0.005em' }}
            >
              <span
                className="inline-grid place-items-center rounded-full text-white"
                style={{ width: 28, height: 28, background: '#0FA9E8', flexShrink: 0 }}
              >
                <PlayIcon />
              </span>
              Descubre MySchool
            </a>
          </div>
        </div>

        {/* Subtitle */}
        <p
          style={{
            marginTop: 24,
            maxWidth: 560,
            fontSize: 18,
            lineHeight: 1.5,
            color: '#5F6B77',
          }}
        >
          MySchool se encarga del papeleo, para que ese tiempo vuelva al aula.
          Todas las operaciones de tu colegio en un solo lugar.
        </p>
      </div>

      {/* ── Decorative circles row ── */}
      <div
        className="relative overflow-hidden mt-12 w-full"
        style={{ height: 300 }}
        aria-hidden="true"
      >
        {/* Far left: peach large circle (half-cut) */}
        <div
          className="absolute"
          style={{ width: 240, height: 240, borderRadius: '50%', background: '#F8D6C2', left: -80, bottom: 20 }}
        />
        {/* Left amber circle */}
        <div
          className="absolute"
          style={{ width: 110, height: 110, borderRadius: '50%', background: '#FBE0A8', left: 120, bottom: 80 }}
        />
        {/* Left peach half-circle */}
        <div
          className="absolute"
          style={{ width: 200, height: 200, borderRadius: '50%', background: '#F8D6C2', left: 160, bottom: -30 }}
        />

        {/* Large MySchool blue circle (center) */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            width: 280, height: 280, borderRadius: '50%', background: '#0FA9E8',
            left: '50%', transform: 'translateX(-240px)', bottom: -20,
          }}
        >
          {/* Mini logo mark inside */}
          <svg width="64" height="40" viewBox="0 0 100 60" aria-hidden="true">
            <circle cx="30" cy="30" r="26" fill="rgba(255,255,255,0.35)" />
            <circle cx="72" cy="38" r="10" fill="rgba(255,255,255,0.35)" />
          </svg>
        </div>

        {/* Avatar circle 1 */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            width: 200, height: 200, borderRadius: '50%', background: '#BFEED9',
            border: '5px solid #fff', left: '50%', transform: 'translateX(0px)', bottom: 10,
            overflow: 'hidden',
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 52, color: '#1E8F5F', fontFamily: 'Inter' }}>JG</span>
        </div>

        {/* Avatar circle 2 */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            width: 220, height: 220, borderRadius: '50%', background: '#BFE7DF',
            border: '5px solid #fff', left: '50%', transform: 'translateX(170px)', bottom: -10,
            overflow: 'hidden',
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 56, color: '#2A7A6B', fontFamily: 'Inter' }}>AL</span>
        </div>

        {/* Right amber circle */}
        <div
          className="absolute"
          style={{ width: 100, height: 100, borderRadius: '50%', background: '#FBE0A8', right: 160, bottom: 100 }}
        />
        {/* Right peach large circle (half-cut) */}
        <div
          className="absolute"
          style={{ width: 230, height: 230, borderRadius: '50%', background: '#F8D6C2', right: -70, bottom: 20 }}
        />
        {/* Right lilac accent circle */}
        <div
          className="absolute"
          style={{ width: 80, height: 80, borderRadius: '50%', background: '#DCD2F3', right: 120, bottom: 30 }}
        />
      </div>
    </section>
  );
}
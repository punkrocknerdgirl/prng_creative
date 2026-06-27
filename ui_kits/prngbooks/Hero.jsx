// PRNG marketing — hero. Dark split with photo, logo, badges.
function Hero() {
  return (
    <section style={{
      display: 'grid', gridTemplateColumns: '1.25fr 0.75fr',
      background: 'var(--prng-ink)', position: 'relative', overflow: 'hidden', minHeight: '78vh',
    }}>
      {/* left gradient wash over photo */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(105deg, rgba(26,10,18,0.94) 0%, rgba(92,31,59,0.75) 50%, transparent 100%)',
      }} />
      <div style={{
        gridColumn: 1, gridRow: 1, position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '4rem 1rem 4rem 5rem', maxWidth: 820,
      }}>
        <img src="../../assets/prng_logo_transparent.png" alt="PRNG logo" style={{ width: 150, height: 'auto', display: 'block', marginBottom: '1.25rem' }} />
        <h1 style={{
          fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1,
          color: '#fff', marginBottom: '0.3rem', letterSpacing: '-0.01em',
        }}>
          Bookkeeper | <span style={{ color: 'var(--prng-pink)' }}>Systems Architect</span>
        </h1>
        <p style={{
          fontSize: 'clamp(1.45rem, 2.5vw, 1.95rem)', fontWeight: 700, color: '#a6537e',
          marginBottom: '1.5rem', letterSpacing: '0.095em',
        }}>Professional Chaos Untangler</p>
        <p style={{
          fontSize: '1.05rem', color: 'var(--prng-blush-light)', lineHeight: 1.65,
          marginBottom: '1.75rem', borderLeft: '3px solid var(--prng-pink)', paddingLeft: '1rem',
        }}>
          Clean books. Clear systems. No BS.<br />
          For small businesses that need someone who actually gets it.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" as="a" href="#" size="lg">Book a Free Call</Button>
          <Button variant="ghost" as="a" href="#services" size="lg">See What I Do →</Button>
        </div>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
          <Badge tone="pink">QBO ProAdvisor Level 2</Badge>
          <Badge tone="pink">QBO Payroll Certified</Badge>
          <Badge tone="pink">Texas-Based</Badge>
        </div>
      </div>
      <div style={{ gridColumn: 2, gridRow: 1, position: 'relative' }}>
        <img src="../../assets/ernie-ritz.png" alt="Ernie" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, var(--prng-ink) 0%, transparent 40%), linear-gradient(to top, var(--prng-ink) 0%, transparent 30%)',
        }} />
      </div>
    </section>
  );
}
window.Hero = Hero;

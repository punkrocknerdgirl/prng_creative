// PRNG marketing — About + Work-with-me + Contact + Footer
function About() {
  const creds = ['QBO ProAdvisor Level 2', 'QBO Payroll Certified', 'Trucking & Construction', 'Make.com Automation'];
  return (
    <section id="about" style={{ background: '#fff', padding: '5rem 0 5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <Eyebrow slash={false}>About</Eyebrow>
        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, color: 'var(--prng-plum)', lineHeight: 1.1, margin: '0.6rem 0 0' }}>Hi. I'm Ernie.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center', marginTop: '2.5rem' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: -10, left: -10, right: 10, bottom: 10, border: '2px solid var(--prng-pink)', borderRadius: 4, zIndex: 0 }} />
            <img src="../../assets/ernie_cartoon.png" alt="Ernie cartoon" style={{ width: '100%', borderRadius: 4, display: 'block', position: 'relative', zIndex: 1 }} />
          </div>
          <div>
            {[
              <span>I run <strong style={{ color: 'var(--prng-plum)' }}>PRNG Bookkeeping Services</strong> out of rural Texas. I'm a QBO Level 2 and Payroll certified bookkeeper who also builds the systems and automations that make the bookkeeping actually work — and make your whole operation run smoother.</span>,
              <span>I'm Gen-X. I watched technology grow up. I wasn't born into it. That means I can translate between the analog way you've always done things and the digital infrastructure that can scale it.</span>,
              <span><strong style={{ color: 'var(--prng-plum)' }}>I work best with small business owners</strong> who are done being confused by their finances, sick of doing things the hard way, and ready to hand the operational chaos to someone who genuinely loves untangling it.</span>,
            ].map((p, i) => (
              <p key={i} style={{ fontSize: '0.97rem', color: '#4a2538', lineHeight: 1.78, marginBottom: '1.1rem' }}>{p}</p>
            ))}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
              {creds.map((c) => (
                <span key={c} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  background: 'var(--prng-blush-light)', border: '1px solid var(--prng-blush-mid)',
                  borderRadius: 2, padding: '0.35rem 0.75rem', fontSize: '0.75rem', fontWeight: 600,
                  color: 'var(--prng-plum)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em',
                }}>✓ {c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkWithMe() {
  const steps = [
    { n: 1, h: 'Book a Free Call', p: "Pick a time that works. 20 minutes, no obligation. We'll talk about your business, what's broken, and what you actually need." },
    { n: 2, h: 'Get a Clear Picture', p: "I'll tell you exactly what I'd do, how it works, and what it costs. No jargon, no vague proposals, no mystery pricing." },
    { n: 3, h: 'We Build It Together', p: "If it's a fit, we get started. Your books get clean, your systems get smart, and you get your brain back." },
  ];
  return (
    <section id="work" style={{ background: 'var(--prng-plum)', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <Eyebrow slash={false}>Work With Me</Eyebrow>
        <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, margin: '0.6rem 0 0.9rem' }}>Let's figure out if we're a fit.</h2>
        <p style={{ fontSize: '1rem', color: 'var(--prng-blush-mid)', maxWidth: 600, lineHeight: 1.65, margin: 0 }}>
          No pressure, no sales pitch. Book a free 20-minute call and let's talk about what's going on in your business.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', marginTop: '2.5rem' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {steps.map((s) => (
              <li key={s.n} style={{ display: 'flex', gap: '1.1rem', marginBottom: '1.6rem', alignItems: 'flex-start' }}>
                <div style={{
                  flexShrink: 0, width: '1.9rem', height: '1.9rem', background: 'var(--prng-pink)', color: '#fff',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700,
                }}>{s.n}</div>
                <div>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem', letterSpacing: '0.03em' }}>{s.h}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--prng-blush-mid)', lineHeight: 1.55, margin: 0 }}>{s.p}</p>
                </div>
              </li>
            ))}
          </ul>
          <div style={{
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,83,140,0.3)',
            borderRadius: 4, padding: '2.5rem', textAlign: 'center',
          }}>
            <p style={{ color: 'var(--prng-blush-mid)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
              Ready to stop drowning in the financial stuff and get back to actually running your business? Let's talk. First call is always free.
            </p>
            <Button variant="primary" as="a" href="#" size="lg">Schedule on Calendly →</Button>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(240,208,228,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '1rem' }}>
              Free 20-min discovery call · No commitment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const cards = [
    { label: 'Email', value: 'ernie@prngbooks.com' },
    { label: 'Schedule a Call', value: 'calendly.com/prngbooks' },
    { label: 'Website', value: 'prngbooks.com' },
    { label: 'Based In', value: 'Rural Texas · Serving everywhere' },
  ];
  return (
    <section id="contact" style={{ background: 'var(--prng-blush-light)', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <Eyebrow slash={false}>Contact</Eyebrow>
        <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 900, color: 'var(--prng-plum)', lineHeight: 1.1, margin: '0.6rem 0 0.9rem' }}>Get in touch.</h2>
        <p style={{ fontSize: '1rem', color: '#6b3050', maxWidth: 560, lineHeight: 1.65, margin: 0 }}>Prefer email over forms? Same. Here's where to find me.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
          {cards.map((c) => (
            <Card key={c.label} accent="left" hover={false} style={{ padding: '1.4rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--prng-pink)', marginBottom: '0.35rem' }}>{c.label}</div>
              <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--prng-plum)', display: 'block' }}>{c.value}</span>
            </Card>
          ))}
        </div>
      </div>
      <footer style={{ background: 'var(--prng-ink)', borderTop: '2px solid var(--prng-pink)', padding: '1.75rem 2rem', textAlign: 'center', marginTop: '5rem' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(250,234,243,0.35)', letterSpacing: '0.08em', margin: 0 }}>
          © 2026 <span style={{ color: 'var(--prng-pink)' }}>PRNG Bookkeeping Services, LLC</span> · Built with intention and zero Squarespace.
        </p>
      </footer>
    </section>
  );
}

Object.assign(window, { About, WorkWithMe, Contact });

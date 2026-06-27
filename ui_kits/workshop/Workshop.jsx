// punkrocknerdgirl — the workshop. Zine voice: Playfair italic display,
// graph-paper grid, "// " mono eyebrows. Composes DS Eyebrow + StatusTag.

const ZINE_DISPLAY = { fontFamily: 'var(--font-display)', fontStyle: 'italic' };

function WHeader() {
  const links = [['#what', "What's here"], ['#projects', 'Projects'], ['#about', 'About']];
  return (
    <header style={{
      background: 'var(--prng-plum-dark)', padding: '1rem 2rem', display: 'flex',
      alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100,
      borderBottom: '2px solid var(--prng-pink)',
    }}>
      <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--prng-pink)', letterSpacing: '0.04em', textDecoration: 'none' }}>
        punkrocknerdgirl<span style={{ color: '#fff', opacity: 0.5 }}>.com</span>
      </a>
      <nav style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
        {links.map(([href, label]) => (
          <a key={href} href={href} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>{label}</a>
        ))}
        <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'var(--prng-pink)', color: '#fff', padding: '0.35rem 0.85rem', borderRadius: 2, textDecoration: 'none' }}>Hire me →</a>
      </nav>
    </header>
  );
}

function WHero() {
  return (
    <div style={{ background: 'var(--prng-plum-dark)', padding: '5rem 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--grid-lines)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
        <Eyebrow>field notes from the workshop</Eyebrow>
        <h1 style={{ ...ZINE_DISPLAY, fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', color: '#fff', lineHeight: 1.12, margin: '1.25rem 0 1.5rem', maxWidth: 780 }}>
          Real work.<br /><em style={{ color: 'var(--prng-pink)' }}>Real systems.</em><br />No guru nonsense.
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', maxWidth: 540, lineHeight: 1.7, marginBottom: '2.5rem' }}>
          A working bookkeeper and systems builder who documents what she's actually building, learning, and breaking — in public, without the startup bro energy.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" as="a" href="#what">See what's here</Button>
          <Button variant="ghost" as="a" href="#projects">Active build log →</Button>
        </div>
      </div>
    </div>
  );
}

function SplitBanner() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '3px solid var(--prng-pink)' }}>
      <a href="#" style={{ padding: '2.25rem 2.5rem', textDecoration: 'none', background: 'var(--prng-plum)', position: 'relative', display: 'block' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.6rem' }}>You are here</p>
        <h2 style={{ ...ZINE_DISPLAY, fontSize: '1.55rem', color: '#fff', lineHeight: 1.25, marginBottom: '0.55rem' }}>The workshop</h2>
        <p style={{ fontSize: '0.875rem', lineHeight: 1.65, maxWidth: 340, color: 'rgba(255,255,255,0.6)' }}>Systems thinking, build logs, automation experiments, AI field notes, and useful observations from real paid work. No funnels. No SaaS shrine.</p>
        <span style={{ position: 'absolute', bottom: '1.5rem', right: '1.75rem', fontSize: '1.2rem', color: 'var(--prng-pink)', opacity: 0.4 }}>⌁</span>
      </a>
      <a href="#" style={{ padding: '2.25rem 2.5rem', textDecoration: 'none', background: 'var(--prng-blush)', borderLeft: '2px solid var(--prng-pink)', position: 'relative', display: 'block' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--prng-muted)', marginBottom: '0.6rem' }}>Need bookkeeping?</p>
        <h2 style={{ ...ZINE_DISPLAY, fontSize: '1.55rem', color: 'var(--prng-plum)', lineHeight: 1.25, marginBottom: '0.55rem' }}>The front desk →</h2>
        <p style={{ fontSize: '0.875rem', lineHeight: 1.65, maxWidth: 340, color: 'var(--prng-muted)' }}>PRNG Bookkeeping Services. QBO cleanup, payroll, A/R, A/P, reporting, and financial operations for small businesses.</p>
        <span style={{ position: 'absolute', bottom: '1.5rem', right: '1.75rem', fontSize: '1.2rem', color: 'var(--prng-plum)', opacity: 0.4 }}>→</span>
      </a>
    </div>
  );
}

function ZineSection({ id, bg, eyebrow, heading, body, headingColor, bodyColor, children }) {
  return (
    <section id={id} style={{ padding: '4.5rem 2rem', background: bg }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 style={{ ...ZINE_DISPLAY, fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: headingColor, margin: '0.75rem 0 1rem', lineHeight: 1.2 }}>{heading}</h2>
        <p style={{ fontSize: '0.95rem', color: bodyColor, maxWidth: 560, lineHeight: 1.75, marginBottom: '2.5rem' }}>{body}</p>
        {children}
      </div>
    </section>
  );
}

function WhatLivesHere() {
  const pillars = [
    ['01 — field notes', "What I'm actually doing", 'Short captures: what I\'m building, testing, noticing, or learning. Posted when it\'s useful, not on a content schedule.'],
    ['02 — build logs', 'Projects in progress', 'Practical notes on named projects — Ed, Diane, Kwisatz, and others — stripped of client info but honest about the process.'],
    ['03 — old lady tech', 'AI & tools for real work', 'How a working adult uses technology without turning life into a content machine. Honest takes. No hype, no doom, no influencer energy.'],
    ['04 — systems thinking', 'How workflows actually work', 'Where the paper-and-code philosophy lives. How things break, how to fix them, and why documentation isn\'t optional.'],
  ];
  return (
    <ZineSection id="what" bg="#fff" eyebrow="site map" heading="What lives here"
      headingColor="var(--prng-plum)" bodyColor="var(--prng-muted)"
      body="Not a blog. Not a brand platform. More like a public notebook for a working adult who builds things, breaks things, and writes it down.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
        {pillars.map(([num, h, p]) => (
          <div key={num} style={{ border: '1px solid var(--prng-rule)', borderTop: '3px solid var(--prng-pink)', padding: '1.5rem 1.5rem 1.75rem', background: 'var(--prng-blush-light)', borderRadius: '0 0 2px 2px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--prng-pink)', textTransform: 'uppercase', marginBottom: '0.6rem', display: 'block' }}>{num}</span>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--prng-plum)', marginBottom: '0.5rem' }}>{h}</h3>
            <p style={{ fontSize: '0.855rem', color: 'var(--prng-muted)', lineHeight: 1.65 }}>{p}</p>
          </div>
        ))}
      </div>
    </ZineSection>
  );
}

function FieldNotes() {
  const notes = [
    ['Ed / AI systems', 'Ed is a personal AI wrangler built to run my work life — not a chatbot, a system. Connected to everything, knows what I\'m supposed to be doing. Still training.', 'build-log · in progress'],
    ['old lady tech', 'Spent two hours trying to get AI to do something useful and one hour explaining why it didn\'t. Ratio improving weekly. The trick is specificity, not prompting magic.', 'field-note · workflow'],
    ['systems thinking', 'Every messy workflow I\'ve ever fixed started as someone\'s perfectly reasonable workaround for a thing that didn\'t work. Document the workaround before you kill it.', 'principle · cleanup'],
    ['Diane / automation', 'Trucking tickets are structurally simple but operationally chaotic. Diane exists because I got tired of watching that chaos eat someone\'s billing cycle every week.', 'build-log · active'],
  ];
  return (
    <ZineSection bg="var(--prng-plum-dark)" eyebrow="recent captures" heading="From the notebook"
      headingColor="#fff" bodyColor="rgba(255,255,255,0.5)" body="Sample field notes. Real ones coming soon.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 1, border: '1px solid rgba(201,83,140,0.2)' }}>
        {notes.map(([tag, body, meta]) => (
          <div key={tag} style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(201,83,140,0.18)', color: 'var(--prng-pink)', padding: '0.2rem 0.55rem', borderRadius: 1, display: 'inline-block', marginBottom: '0.75rem' }}>{tag}</span>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{body}</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em', marginTop: '1rem' }}>{meta}</p>
          </div>
        ))}
      </div>
    </ZineSection>
  );
}

function ProjectsLog() {
  const projects = [
    ['active', 'Project Diane', 'Make.com automation pipeline for trucking ticket processing and invoicing. Solving real billing chaos in a real industry. API-first design.'],
    ['active', 'Ed', 'Personal AI assistant and wrangler — connected to everything, knows what I should be doing, designed to run my work life. A system, not a chatbot.'],
    ['building', 'Project Kwisatz', 'Umbrella for small utility tools built from real workflow pain. AntiHub lives here. More under development.'],
    ['building', 'PRNG Bookkeeping Services, LLC', 'Growing the bookkeeping practice into a proper entity: bookkeeping, tax prep, subcontracting, software and systems development. One thing at a time.'],
    ['parked', 'AntiHub', 'Utility software under Project Kwisatz. Not currently the main focus but not dead — will be revisited.'],
  ];
  return (
    <ZineSection id="projects" bg="var(--prng-blush-light)" eyebrow="active build log" heading="Projects"
      headingColor="var(--prng-plum)" bodyColor="var(--prng-muted)"
      body="Named projects across automation, tools, and systems work. All grounded in industries I've actually worked in.">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {projects.map(([status, h, p], i) => (
          <div key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', padding: '1.25rem 0', borderBottom: i < projects.length - 1 ? '1px solid var(--prng-rule)' : 'none' }}>
            <div style={{ marginTop: '0.15rem', minWidth: 80, textAlign: 'center' }}><StatusTag status={status} /></div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--prng-plum)', marginBottom: '0.2rem' }}>{h}</h4>
              <p style={{ fontSize: '0.835rem', color: 'var(--prng-muted)', lineHeight: 1.6, maxWidth: 560 }}>{p}</p>
            </div>
          </div>
        ))}
      </div>
    </ZineSection>
  );
}

function WAbout() {
  const tags = ['QuickBooks Online', 'Make.com', 'Google Sheets', 'ClickUp', 'AI systems', 'bookkeeping', 'workflow design', 'automation'];
  const sidebar = [
    ['Bookkeeping work', <span>Client-facing services, cleanup, payroll, reporting, and financial operations. <a href="#" style={{ color: 'var(--prng-plum)', textDecoration: 'none', fontWeight: 700 }}>PRNG Bookkeeping →</a></span>],
    ['This site', 'The workshop. Field notes, build logs, systems thinking, and practical notes on AI and tools from a working adult who actually uses them.'],
    ['Philosophy', 'Paper and code. Independent work only. No W2 except as a last resort. Sellable systems built on real experience.'],
  ];
  return (
    <section id="about" style={{ background: '#fff', borderTop: '1px solid var(--prng-rule)', padding: '4.5rem 2rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        <div>
          <Eyebrow>the human behind this</Eyebrow>
          <h2 style={{ ...ZINE_DISPLAY, fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: 'var(--prng-plum)', margin: '0.75rem 0 1.25rem', lineHeight: 1.2 }}>I build systems from real work, not productivity fantasies.</h2>
          <p style={{ fontSize: '0.93rem', color: '#4a3040', lineHeight: 1.8, marginBottom: '1rem' }}>Bookkeeper by trade, systems builder by compulsion. QBO Level 2 and Payroll certified. I've been inside enough small business messes — bad bank feeds, mangled A/R, payroll chaos, spreadsheets that made me question humanity — that I build tools to fix the exact problems I've already lived through.</p>
          <p style={{ fontSize: '0.93rem', color: '#4a3040', lineHeight: 1.8, marginBottom: '1rem' }}>I only build for industries I've worked in. That rule keeps me honest and keeps the tools useful.</p>
          <p style={{ fontSize: '0.93rem', color: '#4a3040', lineHeight: 1.8 }}>Gen-X. Songwriter. Multi-instrumentalist. Former Austin music scene resident. Current small-town Texas operations, heavy on the coffee and the weird.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
            {tags.map((t) => (
              <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.67rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid var(--prng-rule)', color: 'var(--prng-muted)', padding: '0.25rem 0.6rem', borderRadius: 2 }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ borderLeft: '2px solid var(--prng-pink)', paddingLeft: '2rem' }}>
          {sidebar.map(([label, body], i) => (
            <div key={i} style={{ marginBottom: i < sidebar.length - 1 ? '1.5rem' : 0, paddingBottom: i < sidebar.length - 1 ? '1.5rem' : 0, borderBottom: i < sidebar.length - 1 ? '1px solid var(--prng-rule)' : 'none' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--prng-pink)', marginBottom: '0.3rem' }}>{label}</p>
              <p style={{ fontSize: '0.855rem', color: 'var(--prng-muted)', lineHeight: 1.65 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WFooter() {
  return (
    <footer style={{ background: 'var(--prng-plum-dark)', padding: '2rem', borderTop: '2px solid var(--prng-pink)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>
          <strong style={{ color: 'var(--prng-pink)' }}>punkrocknerdgirl</strong> — the workshop<br />
          <span style={{ fontSize: '0.6rem' }}>PRNG Bookkeeping is one branch of this. Not the whole thing.</span>
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {["What's here", 'Projects', 'PRNG Bookkeeping', 'GitHub'].map((l) => (
            <a key={l} href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.67rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function WorkshopApp() {
  return (
    <React.Fragment>
      <WHeader /><WHero /><SplitBanner /><WhatLivesHere /><FieldNotes /><ProjectsLog /><WAbout /><WFooter />
    </React.Fragment>
  );
}
window.WorkshopApp = WorkshopApp;

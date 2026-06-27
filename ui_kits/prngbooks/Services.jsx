// PRNG marketing — Services grid (6 cards, emoji icons, pill rows)
function Services() {
  const SERVICES = [
    { icon: '📒', title: 'Bookkeeping', body: 'Full-cycle bookkeeping, month-end close, and reporting. Your numbers are clean, current, and actually useful to you.', pills: ['QBO', 'Month-End Close', 'Reporting'] },
    { icon: '💸', title: 'A/R & A/P', body: "Invoicing, collections follow-up, vendor payments — the cash flow stuff that falls through the cracks when you're wearing too many hats.", pills: ['Invoicing', 'Collections', 'Vendor Mgmt'] },
    { icon: '👥', title: 'Payroll', body: 'QBO Payroll certified. Accurate, on-time, compliant. You pay your people right every time without it becoming a second job.', pills: ['QBO Payroll', 'Compliance', 'Certified'] },
    { icon: '⚙️', title: 'Systems & Automation', body: "Custom workflows, automation pipelines, and operational systems. If you're doing something manually that a machine could handle — let's fix that.", pills: ['Make.com', 'Google Sheets', 'AI Integration'] },
    { icon: '📊', title: 'Operations Consulting', body: 'Financial analysis, feasibility reviews, and strategic reporting for small business owners who need real answers, not corporate jargon.', pills: ['Reporting', 'Analysis', 'Strategy'] },
    { icon: '🚚', title: 'Trucking & Construction', body: 'Industry-specific bookkeeping and invoicing pipelines built from real experience working in these industries — not textbooks.', pills: ['Trucking', 'Construction', 'Fleet Ops'] },
  ];
  return (
    <section id="services" style={{ background: 'var(--prng-blush-light)', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
        <Eyebrow slash={false}>What I Do</Eyebrow>
        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, color: 'var(--prng-plum)', lineHeight: 1.1, margin: '0.6rem 0 0.9rem' }}>More than a bookkeeper.</h2>
        <p style={{ fontSize: '1rem', color: '#6b3050', maxWidth: 560, lineHeight: 1.65, margin: 0 }}>
          I don't just reconcile accounts — I build the systems that make your business make sense. Think fractional COO who also does your books.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
          {SERVICES.map((s) => (
            <Card key={s.title} accent="top" style={{ padding: '1.6rem' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '0.65rem' }}>{s.icon}</div>
              <h3 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--prng-plum)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#5a3048', lineHeight: 1.6, margin: 0 }}>{s.body}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.85rem' }}>
                {s.pills.map((p) => <Pill key={p}>{p}</Pill>)}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;

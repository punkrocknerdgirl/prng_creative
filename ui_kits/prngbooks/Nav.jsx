// PRNG marketing — top nav (fixed, dark, pink underline)
function Nav() {
  const links = ['Services', 'About', 'Work With Me', 'Contact'];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2.5rem', height: 68,
      background: 'rgba(26,10,18,0.97)', backdropFilter: 'blur(8px)',
      borderBottom: '2px solid var(--prng-pink)',
    }}>
      <div style={{ color: '#fff', fontWeight: 900, fontSize: '1.25rem', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
        PRNG Bookkeeping Services
      </div>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center', margin: 0, padding: 0 }}>
        {links.map((l) => (
          <li key={l}>
            <a href="#" style={{
              color: 'var(--prng-blush-light)', textDecoration: 'none',
              fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase',
            }}>{l}</a>
          </li>
        ))}
        <li>
          <Button variant="primary" as="a" href="#" size="sm" style={{ letterSpacing: '0.07em' }}>Book a Call</Button>
        </li>
      </ul>
    </nav>
  );
}
window.Nav = Nav;

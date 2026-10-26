import Icon from './Icon'
export default function Hero() {
  return <section id="home" className="hero-section"><div className="hero-glow"/><div className="eyebrow"><span className="live-dot"/>Fixed-scope development services</div>
    <h1>Websites and apps,<br className="desktop-break"/> delivered on a <span>fixed scope</span></h1>
    <p>Fast delivery, battle-tested engineering, and transparent fixed pricing—no surprise hourly invoices.</p>
    <div className="trust-row"><span><Icon>verified_user</Icon>Fixed prices</span><span><Icon>bolt</Icon>Clear timelines</span><span><Icon>sync_alt</Icon>Revision rounds included</span></div>
  </section>
}

import Icon from './Icon'
import type { Package } from '../data/services'
export default function PackageCard({ item }: { item: Package }) {
  return <article className={`package-card${item.popular ? ' popular' : ''}`}>
    {item.popular && <div className="popular-tag">Most popular</div>}
    <div><div className="card-top"><h3>{item.name}</h3><span className="package-type">{item.type}</span></div>
      <p className="card-description">{item.description}</p>
      <div className="price-box"><div className="price-line"><strong>{item.price}</strong>{item.price !== 'Quote on request' && <small>one-time payment</small>}</div><span className="timeline"><Icon>{item.name === 'Custom' ? 'tune' : 'schedule'}</Icon>{item.timeline}</span></div>
      <ul className="feature-list">{item.features.map(feature => <li key={feature}><span className="check"><Icon>check</Icon></span>{feature}</li>)}</ul>
    </div>
    <a className={`button ${item.popular ? 'button-primary' : 'button-muted'}`} href="#contact">{item.action}<Icon>{item.popular ? 'bolt' : 'arrow_forward'}</Icon></a>
  </article>
}

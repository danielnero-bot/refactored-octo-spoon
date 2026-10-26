import { packages } from '../data/services'
import PackageCard from './PackageCard'
export default function Packages() {
  return <section className="content-section packages-section" id="packages"><div className="section-heading"><div><span className="section-kicker">// 01 — CATALOG</span><h2>Choose your package</h2></div><p>Tailored engineering for founders, startups, and modern brands ready to ship.</p></div><div className="package-grid">{packages.map(item => <PackageCard key={item.name} item={item}/>)}</div></section>
}

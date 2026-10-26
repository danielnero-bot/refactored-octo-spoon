import { specs } from '../data/services'
import Icon from './Icon'
export default function Guarantees() {
  return <section className="content-section guarantees"><div className="guarantee-copy"><span className="section-kicker">// GUARANTEED SPECS</span><h2>Every project ships production-ready.</h2><p>No half-baked templates. Your code is semantic, accessible, maintainable, and ready to grow.</p><div className="stats"><div><strong>100%</strong><span>TypeScript strict</span></div><div><strong>95+</strong><span>Lighthouse target</span></div><div><strong>0</strong><span>Unneeded dependencies</span></div></div></div><div className="spec-grid">{specs.map(([icon, file, title, copy]) => <article className="spec-card" key={file}><div className="spec-meta"><Icon>{icon}</Icon><code>{file}</code></div><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
}

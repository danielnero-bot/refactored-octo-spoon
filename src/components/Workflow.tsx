import { steps } from '../data/services'
import Icon from './Icon'
export default function Workflow() {
  return <section className="content-section workflow"><div className="center-heading"><span className="section-kicker">// 02 — WORKFLOW</span><h2>How it works</h2><p>From kickoff to production in three clear milestones.</p></div><div className="steps-grid">{steps.map(([icon, title, copy, milestone], index) => <article className="step-card" key={title}><div className="step-top"><strong>0{index + 1}</strong><span><Icon>{icon}</Icon></span></div><h3>{title}</h3><p>{copy}</p><div className="milestone">Milestone: {milestone}</div></article>)}</div></section>
}

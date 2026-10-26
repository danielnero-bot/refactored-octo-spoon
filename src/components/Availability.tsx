import Icon from './Icon'
export default function Availability() {
  return <section className="content-section availability"><div className="availability-icon"><Icon>calendar_month</Icon></div><div className="availability-copy"><h3>Current studio availability <span className="live-dot"/></h3><p>Ask about availability for the upcoming month.</p></div><a className="button button-primary" href="#contact">Reserve a sprint slot</a></section>
}

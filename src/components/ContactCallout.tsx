import Icon from './Icon'
export default function ContactCallout() {
  return <section className="content-section contact-callout" id="contact"><div className="contact-icon"><Icon>contact_support</Icon></div><div className="contact-copy"><h3>Need a custom timeline or enterprise NDA?</h3><p>Talk directly with Nero about your project and next steps.</p></div><a className="button button-muted" href="mailto:contact@nerosdevstudio.com">Message Nero<Icon>chat</Icon></a></section>
}

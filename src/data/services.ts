export type Package = { name: string; type: string; description: string; price: string; timeline: string; features: string[]; popular?: boolean; action: string }
export const packages: Package[] = [
  { name: 'Starter', type: 'Landing page', description: 'A bespoke single-page experience for launches, waitlists, and focused marketing campaigns.', price: '₦450,000', timeline: '5–7 days delivery', features: ['One responsive page', 'Tailwind CSS styling and adaptive layout', 'Contact form and lead capture', 'SEO and Core Web Vitals optimization', 'Cross-browser and mobile QA'], action: 'Buy now' },
  { name: 'Standard', type: 'Multi-page site', description: 'A complete web presence with dynamic content, polished interactions, and production-ready architecture.', price: '₦1,250,000', timeline: '2–3 weeks delivery', features: ['Up to 5 custom designed pages', 'Fluid GSAP and CSS animations', 'CMS or Supabase content integration', '2 included revision rounds', 'Technical SEO, analytics and performance tuning', '30-day priority support and handoff'], popular: true, action: 'Buy now' },
  { name: 'Custom', type: 'Web app or backend', description: 'A full-stack application built around your product, APIs, data model, and infrastructure needs.', price: 'Quote on request', timeline: 'Timeline based on scope', features: ['Supabase authentication and Postgres', 'Custom admin dashboard and role access', 'REST or GraphQL endpoints', 'Scope tailored to product specifications', 'End-to-end QA and CI/CD deployment guide'], action: 'Request a quote' },
]
export const specs = [
  ['terminal', 'architecture.ts', 'Modern tech stack', 'React, Tailwind CSS, Supabase, and Node services selected to fit your project.'],
  ['speed', 'speed_audit.json', 'Fast delivery', 'Careful performance work, minimal layout shifts, and responsive experiences.'],
  ['verified', 'qa_protocol.sh', 'Comprehensive QA', 'Checked across modern mobile browsers and desktop engines.'],
  ['key', 'license_full.md', 'Full IP ownership', 'Repository transfer, documentation, and clear licensing at handoff.'],
]
export const steps = [
  ['inventory_2', 'Choose a package', 'Pick the tier that fits your roadmap, or request a custom quote.', 'Scope definition and agreement'],
  ['lock', 'Pay securely', 'Confirm your fixed price and reserve a spot in the studio schedule.', 'Reserved calendar sprint'],
  ['rocket_launch', 'Share your brief', 'Send designs, wireframes, or copy and development gets underway.', 'Staging link as work progresses'],
]

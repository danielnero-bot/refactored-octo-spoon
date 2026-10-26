import type { SVGProps } from 'react'

const paths: Record<string, string> = {
  arrow_forward: 'M5 12h14m-7-7 7 7-7 7',
  bolt: 'm13 2-3 9h7l-6 11 1-9H5l8-11Z',
  calendar_month: 'M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm2 10h3v3H7z',
  chat: 'M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z',
  check: 'm5 12 4 4L19 6', close: 'M18 6 6 18M6 6l12 12',
  contact_support: 'M12 18h.01M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3m9-1a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  inventory_2: 'M21 8 12 3 3 8l9 5 9-5Zm-18 0v9l9 5 9-5V8m-9 5v9',
  key: 'M21 2 19 4m-7.4 7.4a5 5 0 1 1-7.1 7.1 5 5 0 0 1 7.1-7.1Zm0 0L21 2m-4 4 3 3',
  lock: 'M5 11h14v10H5zM8 11V7a4 4 0 1 1 8 0v4',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 3-10 7L2 7',
  menu: 'M4 6h16M4 12h16M4 18h16',
  rocket_launch: 'm5 12 7-7c4-4 7-2 7-2s2 3-2 7l-7 7-5 1 1-6Zm2 0 5 5m-8-1-3 3m7-11-3-3m8 2h.01',
  schedule: 'M12 8v4l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  speed: 'M12 14 16 8m4.5 9A9 9 0 1 1 3.5 17M12 3v2m9 7h-2M5 12H3m14.4-6.4L16 7',
  sync_alt: 'm17 3 4 4-4 4M3 7h18m-14 14-4-4 4-4m14 4H3', terminal: 'm4 17 6-5-6-5m8 10h8',
  tune: 'M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M2 14h4m4-6h4m4 8h4',
  verified: 'm12 3 2.8 1.4 3.1-.2.7 3 2.2 2.2-1.5 2.8.2 3.1-3 .7-2.2 2.2-2.8-1.5-3.1.2-.7-3L5.5 11l1.5-2.8-.2-3.1 3-.7L12 3Zm-3 9 2 2 4-4',
  verified_user: 'M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Zm-3-11 2 2 4-4',
}

export default function Icon({ children, className = '', ...props }: { children: string; className?: string } & SVGProps<SVGSVGElement>) {
  const path = paths[children] ?? paths.verified
  return <svg aria-hidden="true" className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" focusable="false" {...props}><path d={path}/></svg>
}

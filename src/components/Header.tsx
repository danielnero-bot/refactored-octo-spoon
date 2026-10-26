import { useState } from 'react'
import Icon from './Icon'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)
  return <header className="site-header"><div className="nav-wrap">
    <a className="brand" href="#home"><span className="brand-mark">N</span><span>Nero's Dev Studio</span></a>
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon>{menuOpen ? 'close' : 'menu'}</Icon></button>
    <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
      <a href="#home" onClick={close}>Home</a><a href="#packages" onClick={close}>Work</a><a className="active" href="#packages" onClick={close}>Services</a><a href="#contact" onClick={close}>Contact</a>
    </nav>
    <a className="button button-primary nav-cta" href="#contact">Get a quote</a>
  </div></header>
}

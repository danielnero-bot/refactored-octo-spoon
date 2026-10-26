import Icon from './Icon'
export default function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark">N</span><span>Nero's Dev Studio</span></a><p>© {new Date().getFullYear()} Nero's Dev Studio. All rights reserved.</p></div><nav aria-label="Footer navigation"><a href="#home">Home</a><a href="#packages">Work</a><a href="#packages">Services</a><a href="#contact">Contact</a></nav><a className="footer-email" href="mailto:contact@nerosdevstudio.com"><Icon>mail</Icon>Contact</a></div></footer>
}

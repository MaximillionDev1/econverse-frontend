import logo from '../../assets/images/brand-logo.png'
import './Footer.scss'

const footerLinks = {
  Institucional: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  Ajuda: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  Termos: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
}

const IconInstagram = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round"/>
  </svg>
)

const IconFacebook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const IconLinkedin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

export function Footer() {
  return (
    <footer className="footer">
      {/* Área principal branca */}
      <div className="footer__main">
        <div className="container footer__grid">

          {/* Coluna Brand + linha divisória */}
          <div className="footer__brand-col">
            <a href="/" aria-label="Econverse" className="footer__logo-link">
              <img src={logo} alt="Econverse" className="footer__logo" />
            </a>
            <p className="footer__desc">
              Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Instagram" className="footer__social">
                <IconInstagram />
              </a>
              <a href="#" aria-label="Facebook" className="footer__social">
                <IconFacebook />
              </a>
              <a href="#" aria-label="LinkedIn" className="footer__social">
                <IconLinkedin />
              </a>
            </div>
          </div>

          {/* Divisória vertical */}
          <div className="footer__divider" aria-hidden="true" />

          {/* Colunas de links */}
          <div className="footer__links-grid">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="footer__col">
                <h3 className="footer__col-title">{section}</h3>
                <ul className="footer__col-links">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer__link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="footer__bottom">
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  )
}

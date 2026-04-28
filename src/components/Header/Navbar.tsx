import logo from '../../assets/images/brand-logo.png'
import './Navbar.scss'

const IconCompare = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="6" height="18" rx="1" stroke="#9F9F9F" strokeWidth="2"/>
    <rect x="9" y="8" width="6" height="13" rx="1" stroke="#9F9F9F" strokeWidth="2"/>
    <rect x="16" y="5" width="6" height="16" rx="1" stroke="#9F9F9F" strokeWidth="2"/>
  </svg>
)

const IconHeart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconUser = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconCart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="21" r="1" stroke="#9F9F9F" strokeWidth="2"/>
    <circle cx="20" cy="21" r="1" stroke="#9F9F9F" strokeWidth="2"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const navLinks = [
  { label: 'Todas Categorias', href: '#' },
  { label: 'Supermercado', href: '#' },
  { label: 'Livros', href: '#' },
  { label: 'Moda', href: '#' },
  { label: 'Lançamentos', href: '#' },
  { label: 'Ofertas do Dia', href: '#', highlight: true },
  { label: 'Assinatura', href: '#', subscription: true },
]

export function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegação principal">
      <div className="navbar__top container">
        <a href="/" className="navbar__logo" aria-label="Econverse">
          <img src={logo} alt="Econverse" width={139} height={42} />
        </a>

        <div className="navbar__search">
          <label htmlFor="search" className="sr-only">Buscar produtos</label>
          <input
            id="search"
            type="search"
            className="navbar__search-input"
            placeholder="O que você está buscando?"
          />
          <button className="navbar__search-btn" aria-label="Buscar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9F9F9F" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        <div className="navbar__actions">
          <button className="navbar__action-btn" aria-label="Comparar"><IconCompare /></button>
          <button className="navbar__action-btn" aria-label="Favoritos"><IconHeart /></button>
          <button className="navbar__action-btn" aria-label="Minha conta"><IconUser /></button>
          <button className="navbar__action-btn" aria-label="Carrinho"><IconCart /></button>
        </div>
      </div>

      <div className="navbar__bottom-wrap">
        <div className="container">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`navbar__link${link.highlight ? ' navbar__link--highlight' : ''}`}
                >
                  {link.subscription && (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

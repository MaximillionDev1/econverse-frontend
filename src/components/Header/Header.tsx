import './Header.scss'

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <ul className="header__list">
          <li className="header__item">
            <span className="header__icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <span>Compra <strong>100% segura</strong></span>
          </li>
          <li className="header__item">
            <span className="header__icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13" />
                <path d="M16 8h4l3 5v3h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </span>
            <span><strong>Frete grátis</strong> acima de R$ 200</span>
          </li>
          <li className="header__item">
            <span className="header__icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            </span>
            <span><strong>Parcele</strong> suas compras</span>
          </li>
        </ul>
      </div>
    </header>
  )
}

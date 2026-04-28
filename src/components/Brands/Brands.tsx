import brandLogo from '../../assets/images/brand-logo.png'
import brandCircle from '../../assets/images/brand-circle.png'
import './Brands.scss'

const brands = Array(5).fill({ logo: brandLogo, circle: brandCircle })

export function Brands() {
  return (
    <section className="brands" aria-label="Navegue por marcas">
      <div className="container">
        <h2 className="brands__title">Navegue por marcas</h2>
        <ul className="brands__list">
          {brands.map((brand, i) => (
            <li key={i} className="brands__item">
              <button type="button" className="brands__btn" aria-label={`Marca ${i + 1}`}>
                <div className="brands__circle">
                 <img src={brand.logo} alt="econverse" className="brands__logo" />
                </div>
                
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

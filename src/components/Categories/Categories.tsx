import catTec from '../../assets/images/cat-tecnologia.svg'
import catSuper from '../../assets/images/cat-supermercado.svg'
import catBebidas from '../../assets/images/cat-bebidas.svg'
import catFerramentas from '../../assets/images/cat-ferramentas.svg'
import catSaude from '../../assets/images/cat-saude.svg'
import catEsportes from '../../assets/images/cat-esportes.svg'
import catModa from '../../assets/images/cat-moda.svg'
import './Categories.scss'

const categories = [
  { label: 'Tecnologia',       icon: catTec,        active: true },
  { label: 'Supermercado',     icon: catSuper },
  { label: 'Bebidas',          icon: catBebidas },
  { label: 'Ferramentas',      icon: catFerramentas },
  { label: 'Saúde',            icon: catSaude },
  { label: 'Esportes e Fitness', icon: catEsportes },
  { label: 'Moda',             icon: catModa },
]

export function Categories() {
  return (
    <section className="categories" aria-label="Categorias">
      <div className="container">
        <ul className="categories__list">
          {categories.map((cat) => (
            <li key={cat.label}>
              <button
                className={`categories__item${cat.active ? ' categories__item--active' : ''}`}
                type="button"
                aria-pressed={cat.active}
              >
                <span className="categories__icon-wrap">
                  <img src={cat.icon} alt={cat.label} width={48} height={48} />
                </span>
                <span className="categories__label">{cat.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
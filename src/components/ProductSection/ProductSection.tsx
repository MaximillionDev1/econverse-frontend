import { useState } from 'react'
import { Product } from '../../interfaces/Product'
import { ProductCard } from '../ProductCard/ProductCard'
import './ProductSection.scss'

interface ProductSectionProps {
  title: string
  products: Product[]
  loading: boolean
  error: string | null
  onSelectProduct: (product: Product) => void
}

const TABS = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS']

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

export function ProductSection({
  title,
  products,
  loading,
  error,
  onSelectProduct,
}: ProductSectionProps) {
  const [activeTab, setActiveTab] = useState('CELULAR')

  return (
    <section className="product-section" aria-label={title}>
      <div className="container">

      
        <div className="product-section__header">
          <h2 className="product-section__title">{title}</h2>
          <a href="#" className="product-section__view-all">Ver todos</a>
        </div>

       
        <div className="product-section__tabs" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`product-section__tab${activeTab === tab ? ' product-section__tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        {loading && (
          <div className="product-section__loading" aria-live="polite">
            Carregando produtos...
          </div>
        )}

        {error && (
          <div className="product-section__error" role="alert">{error}</div>
        )}

        {!loading && !error && (
          <div className="product-section__carousel">
            
            <button className="product-section__arrow product-section__arrow--prev" type="button" aria-label="Anterior">
              <ArrowLeft />
            </button>

            
            <div className="product-section__grid" role="tabpanel">
              {products.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={onSelectProduct}
                />
              ))}
            </div>

            
            <button className="product-section__arrow product-section__arrow--next" type="button" aria-label="Próximo">
              <ArrowRight />
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

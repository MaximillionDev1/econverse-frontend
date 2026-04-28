import { useEffect, useState } from 'react'
import { Product } from '../../interfaces/Product'
import './ProductModal.scss'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!product) return
    setQuantity(1)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [product])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!product) return null

  const price = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes de ${product.name}`}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Fechar"
          type="button"
        >
          ×
        </button>

        <div className="modal__body">
          <div className="modal__image-wrap">
            <img
              src={product.photo}
              alt={product.name}
              className="modal__image"
              onError={(e) => {
                const t = e.target as HTMLImageElement
                t.src = '/src/assets/images/product-iphone.png'
              }}
            />
          </div>

          <div className="modal__details">
            <h2 className="modal__name">{product.name.toUpperCase()}</h2>
            <p className="modal__price">{price}</p>

            {product.description && (
              <p className="modal__description">{product.description}</p>
            )}

            <a href="#" className="modal__details-link">
              Veja mais detalhes do produto &gt;
            </a>

            <div className="modal__quantity-row">
              <div className="modal__quantity">
                <button
                  type="button"
                  className="modal__qty-btn"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Diminuir"
                >
                  −
                </button>
                <span className="modal__qty-value">
                  {String(quantity).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  className="modal__qty-btn"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Aumentar"
                >
                  +
                </button>
              </div>

              <button type="button" className="modal__buy-btn">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

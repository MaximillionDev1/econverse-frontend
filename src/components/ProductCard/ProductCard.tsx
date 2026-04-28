import { Product } from '../../interfaces/Product'
import './ProductCard.scss'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const price = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const installmentValue = product.installments?.value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <article className="product-card" onClick={() => onSelect(product)}>
      <div className="product-card__image-wrap">
        <img
          src={product.photo}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = '/src/assets/images/product-iphone.png'
          }}
        />
      </div>

      <div className="product-card__info">
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__price-old">R$ {(product.price * 1.1).toFixed(2).replace('.', ',')}</p>
        <p className="product-card__price">{price}</p>
        {product.installments && (
          <p className="product-card__installments">
            ou {product.installments.quantity}x de {installmentValue} sem juros
          </p>
        )}
        <p className="product-card__shipping">Frete grátis</p>
      </div>

      <button
        className="product-card__btn"
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onSelect(product)
        }}
      >
        COMPRAR
      </button>
    </article>
  )
}

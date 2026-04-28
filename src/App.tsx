import { useEffect, useState } from 'react'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Header/Navbar'
import { Hero } from './components/Hero/Hero'
import { Categories } from './components/Categories/Categories'
import { ProductSection } from './components/ProductSection/ProductSection'
import { PartnerBanner } from './components/Brands/PartnerBanner'
import { Brands } from './components/Brands/Brands'
import { Footer } from './components/Footer/Footer'
import { ProductModal } from './components/ProductModal/ProductModal'
import { fetchProducts } from './services/api'
import { Product } from './interfaces/Product'
import './styles/global.scss'
import { Newsletter } from './components/Newsletter/Newsletter'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setError('Erro ao carregar produtos.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <ProductSection
          title="Produtos relacionados"
          products={products}
          loading={loading}
          error={error}
          onSelectProduct={setSelectedProduct}
        />
        <PartnerBanner />
        <ProductSection
          title="Produtos relacionados"
          products={products}
          loading={loading}
          error={error}
          onSelectProduct={setSelectedProduct}
        />
        <PartnerBanner />
        <Brands />
        <ProductSection
          title="Produtos relacionados"
          products={products}
          loading={loading}
          error={error}
          onSelectProduct={setSelectedProduct}
        />
      </main>
      <Newsletter />
      <Footer />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}

export default App

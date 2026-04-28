import { Product } from '../interfaces/Product'
import localProducts from '../data/products.json'

const API_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const data = await response.json()
    const list: Product[] = Array.isArray(data)
      ? data
      : (data.products ?? data.data ?? [])
    if (list.length === 0) throw new Error('Empty response')
    return list
  } catch {
    console.warn('API indisponível, usando dados locais.')
    return localProducts as Product[]
  }
}

export interface Product {
  id: number
  name: string
  description: string
  photo: string
  price: number
  installments?: {
    quantity: number
    value: number
  }
}

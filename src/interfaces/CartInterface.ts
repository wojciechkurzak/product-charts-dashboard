import Product from './ProductInterface'

export default interface Cart {
  discountedTotal?: number
  id: number
  products: Product[]
  total?: number
  totalProducts?: number
  totalQuantity?: number
  userId?: number
}

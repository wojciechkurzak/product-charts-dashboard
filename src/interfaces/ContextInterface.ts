import Cart from './CartInterface'
import Product from './ProductInterface'

export interface ContextInteface {
  carts: Cart[]
  addCart: (product: Product[]) => void
}

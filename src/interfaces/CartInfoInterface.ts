import Cart from './CartInterface'

export default interface CartInfo {
  carts: Cart[]
  total: number
  skip: number
  limit: number
}

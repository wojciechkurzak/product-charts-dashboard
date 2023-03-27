import { Cart } from '../components/interfaces/CartInterface'

export type CartAddButtonProps = {
  onClick: () => void
}

export type CartEditButtonProps = {
  edit: boolean
  onClick: () => void
}

export type CartListProps = {
  carts: Cart[]
  edit: boolean
  remove: (value: string) => void
}

export type CartListItemProps = {
  cart: Cart
  edit: boolean
  remove: (value: string) => void
}

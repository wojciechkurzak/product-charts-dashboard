import { Cart } from '../interfaces/CartInterface'

export type NavigationProps = {
  carts: Cart[]
  add: (name: string) => void
  remove: (id: string) => void
  menu: boolean
  menuHide: () => void
}

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
  menuHide: () => void
}

export type CartListItemProps = {
  cart: Cart
  edit: boolean
  remove: (value: string) => void
  menuHide: () => void
}

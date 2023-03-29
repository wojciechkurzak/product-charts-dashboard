import Cart from '../interfaces/CartInterface'

export type NavigationProps = {
  carts: Cart[]
  remove: (id: number) => void
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
  remove: (id: number) => void
  menuHide: () => void
}

export type CartListItemProps = {
  cart: Cart
  edit: boolean
  remove: (id: number) => void
  menuHide: () => void
}

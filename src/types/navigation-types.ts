export type CartType = {
  id: string
  name: string
}

export type CartAddButtonProps = {
  onClick: () => void
}

export type CartEditButtonProps = {
  onClick: () => void
}

export type CartListProps = {
  carts: CartType[]
  edit: boolean
  remove: (value: string) => void
}

export type CartListItemProps = {
  cart: CartType
  edit: boolean
  remove: (value: string) => void
  route: number
}

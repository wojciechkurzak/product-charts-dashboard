export type CartAddButtonProps = {
  onClick: () => void
}

export type CartEditButtonProps = {
  onClick: () => void
}

export type CartListProps = {
  carts: number[]
  edit: boolean
  remove: (value: number) => void
}

export type CartListItemProps = {
  cart: number
  edit: boolean
  remove: (value: number) => void
}

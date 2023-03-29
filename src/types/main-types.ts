import Product from '../interfaces/ProductInterface'

export type ChartProps = {
  products: Product[]
}

export type ProductListProps = {
  products: Product[]
}

export type ProductProps = {
  product: Product
}

export type AddProductButtonProps = {
  create: () => void
}

export type AddProductListProps = {
  add: (product: Product) => void
}

export type AddProductItemProps = {
  product: Product
  add: (product: Product) => void
}

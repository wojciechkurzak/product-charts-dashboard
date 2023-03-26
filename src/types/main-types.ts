import Product from '../components/interfaces/ProductInterface'

export type ChartProps = {
  products: Product[]
}

export type ProductListProps = {
  products: Product[]
}

export type ProductProps = {
  title: string
  price: number
  discountedPrice: number
}

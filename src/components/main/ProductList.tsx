import { ProductListProps } from '../../types/main-types'
import Product from '../interfaces/ProductInterface'
import ProductItem from './ProductItem'
import '../../styles/main/ProductList.scss'

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className='product-list'>
      <p>Products</p>
      <div className='list'>
        {products.map((product: Product, index) => (
          <ProductItem
            title={product.title}
            price={product.price}
            discountedPrice={product.discountedPrice / product.quantity}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList

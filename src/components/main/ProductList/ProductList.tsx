import { ProductListProps } from '../../../types/main-types'
import Product from '../../../interfaces/ProductInterface'
import ProductItem from '../ProductItem/ProductItem'
import './ProductList.scss'

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className='product-list'>
      <div className='title'>
        <p>Products</p>
      </div>
      <div className='list'>
        {products.map((product: Product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ProductList

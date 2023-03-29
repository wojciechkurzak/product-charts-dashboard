import { ProductProps } from '../../types/main-types'
import '../../styles/main/ProductItem.scss'

const ProductItem = ({ product }: ProductProps) => {
  return (
    <div className='product-item'>
      <p>
        {product.quantity} x {product.title}
      </p>
      <div className='price'>
        <p>Price: {product.price}</p>
        <p>
          Discounted Price:{' '}
          {Math.ceil(
            product.price - (product.price * product.discountPercentage) / 100
          )}
        </p>
        <p>
          Total:{' '}
          {Math.ceil(
            (product.price -
              (product.price * product.discountPercentage) / 100) *
              product.quantity
          )}
        </p>
      </div>
    </div>
  )
}

export default ProductItem

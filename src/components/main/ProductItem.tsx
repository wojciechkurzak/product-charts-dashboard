import { ProductProps } from '../../types/main-types'
import '../../styles/main/ProductItem.scss'

const ProductItem = ({ title, price, discountedPrice }: ProductProps) => {
  return (
    <div className='product-item'>
      <p>{title}</p>
      <div className='price'>
        <p>Price: {price.toFixed(2)}</p>
        <p>Discounted Price: {discountedPrice.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductItem

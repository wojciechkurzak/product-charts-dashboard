import AddProductItem from '../AddProductItem/AddProductItem'
import { AddProductListProps } from '../../../types/main-types'
import './AddProductList.scss'

const AddProductList = ({ add, products }: AddProductListProps) => {
  return (
    <div className='add-product-list'>
      {products &&
        products.map((product, index) => (
          <AddProductItem product={product} add={add} key={index} />
        ))}
    </div>
  )
}

export default AddProductList

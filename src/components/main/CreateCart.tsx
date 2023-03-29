import { useState } from 'react'
import AddProductButton from './AddProductButton'
import AddProductList from './AddProductList'
import { useOutletContext } from 'react-router-dom'
import { ContextInteface } from '../../interfaces/ContextInterface'
import Product from '../../interfaces/ProductInterface'
import '../../styles/main/CreateCart.scss'

const CreateCart = () => {
  const [pickedProducts, setPickedProducts] = useState<Product[]>([])

  const context = useOutletContext<ContextInteface>()
  const addCart = context.addCart

  const handleSetPickedProducts = (product: Product): void => {
    const updatedProducts = pickedProducts.filter(
      (picked) => picked.id !== product.id
    )
    setPickedProducts([...updatedProducts, product])
  }

  const handleAddCart = (): void => {
    addCart(pickedProducts)
  }

  return (
    <div className='create-cart'>
      <div className='title'>
        <p>Create new cart</p>
        <AddProductButton create={handleAddCart} />
      </div>
      <AddProductList add={handleSetPickedProducts} />
    </div>
  )
}

export default CreateCart

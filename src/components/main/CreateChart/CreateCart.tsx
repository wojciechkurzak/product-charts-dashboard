import { useState, useEffect } from 'react'
import AddProductButton from '../AddProductButton/AddProductButton'
import AddProductList from '../AddProdcutList/AddProductList'
import { useOutletContext } from 'react-router-dom'
import { ContextInteface } from '../../../interfaces/ContextInterface'
import Product from '../../../interfaces/ProductInterface'
import LoadingPage from '../../misc/LoadingPage/LoadingPage'
import './CreateCart.scss'

const CreateCart = () => {
  const [products, setProducts] = useState<Product[] | null>(null)
  const [pickedProducts, setPickedProducts] = useState<Product[]>([])
  const [pending, setPending] = useState<boolean>(true)

  const context = useOutletContext<ContextInteface>()
  const addCart = context.addCart

  const handleGetProducts = async (): Promise<void> => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    setProducts(data.products)
    setPending(false)
  }

  const handleSetPickedProducts = (product: Product): void => {
    const updatedProducts = pickedProducts.filter(
      (picked) => picked.id !== product.id
    )
    setPickedProducts([...updatedProducts, product])
  }

  const handleAddCart = (): void => {
    addCart(pickedProducts)
  }

  useEffect(() => {
    handleGetProducts()
  }, [])

  return (
    <div className='create-cart'>
      {!pending ? (
        <>
          <div className='title'>
            <p>Create new cart</p>
            <AddProductButton create={handleAddCart} />
          </div>
          <AddProductList add={handleSetPickedProducts} products={products!} />
        </>
      ) : (
        <div className='loading-page'>
          <LoadingPage />
        </div>
      )}
    </div>
  )
}

export default CreateCart

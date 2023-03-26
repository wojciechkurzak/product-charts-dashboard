import { useLocation } from 'react-router-dom'
import Chart from './Chart'
import { useEffect, useState } from 'react'
import CartItems from '../interfaces/CartItemsInterface'
import '../../styles/main/MainContent.scss'
import ProductList from './ProductList'

const MainContent = () => {
  const [cartItems, setCartItems] = useState<CartItems | null>(null)

  const location = useLocation()
  const routeId = location.pathname.slice(6, 8)

  const handleGetData = async (): Promise<void> => {
    const response = await fetch(`https://dummyjson.com/carts/${routeId}`)
    const data = await response.json()
    setCartItems(data)
    console.log(data)
  }

  useEffect(() => {
    handleGetData()
  }, [routeId])

  return (
    <div className='main-content'>
      {cartItems && (
        <>
          <Chart products={cartItems.products} />
          <ProductList products={cartItems.products} />
        </>
      )}
    </div>
  )
}

export default MainContent

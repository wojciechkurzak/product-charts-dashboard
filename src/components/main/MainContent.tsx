import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import Chart from './Chart'
import { useEffect, useState } from 'react'
import CartItems from '../../interfaces/CartItemsInterface'
import ProductList from './ProductList'
import LoadingPage from '../misc/LoadingPage'
import '../../styles/main/MainContent.scss'

const MainContent = () => {
  const [cartItems, setCartItems] = useState<CartItems | null>(null)
  const carts = useOutletContext<CartItems[]>()

  const navigate = useNavigate()
  const location = useLocation()

  const routeId = location.pathname.slice(6, 8)
  const isCartExist = carts.some((cart) => cart.id.toString() === routeId)

  const handleGetData = async (): Promise<void> => {
    const response = await fetch(`https://dummyjson.com/carts/${routeId}`)
    const data = await response.json()
    setCartItems(data)
  }

  useEffect(() => {
    handleGetData()
  }, [routeId])

  return (
    <div className='main-content'>
      {cartItems ? (
        isCartExist ? (
          <>
            <Chart products={cartItems.products} />
            <ProductList products={cartItems.products} />
          </>
        ) : (
          <div className='not-found'>
            <p>Cart not found</p>
          </div>
        )
      ) : (
        <LoadingPage />
      )}
    </div>
  )
}

export default MainContent

import { useLocation, useOutletContext } from 'react-router-dom'
import Chart from './Chart'
import ProductList from './ProductList'
import { ContextInteface } from '../../interfaces/ContextInterface'
import '../../styles/main/MainContent.scss'

const MainContent = () => {
  const context = useOutletContext<ContextInteface>()
  const carts = context.carts

  const location = useLocation()

  const routeId = location.pathname.slice(6, 8)
  const currentCart = carts.filter((cart) => cart.id === parseInt(routeId))
  const isCartExist = carts.some((cart) => cart.id === parseInt(routeId))

  return (
    <div className='main-content'>
      {isCartExist ? (
        <>
          <Chart products={currentCart[0].products} />
          <ProductList products={currentCart[0].products} />
        </>
      ) : (
        <div className='not-found'>
          <p>Cart not found</p>
        </div>
      )}
    </div>
  )
}

export default MainContent

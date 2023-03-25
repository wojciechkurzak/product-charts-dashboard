import { useLocation, useOutletContext } from 'react-router-dom'
import { Cart } from '../interfaces/CartInterface'
import '../../styles/main/MainContent.scss'

const MainContent = () => {
  const carts = useOutletContext<Cart[]>()

  const location = useLocation()
  const routeId = location.pathname.slice(6, 8)

  return (
    <div className='main-content'>
      <p>Cart</p>
    </div>
  )
}

export default MainContent

import { CartListProps } from '../../types/navigation-types'
import CartListItem from './CartListItem'
import '../../styles/navigation/CartList.scss'

const CartList = ({ carts }: CartListProps) => {
  return (
    <ul className='cart-list'>
      {carts.map((cart) => (
        <CartListItem cart={cart} key={cart} />
      ))}
    </ul>
  )
}

export default CartList

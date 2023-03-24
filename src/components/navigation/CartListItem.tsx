import { CartListItemProps } from '../../types/navigation-types'
import '../../styles/navigation/CartListItem.scss'

const CartListItem = ({ cart }: CartListItemProps) => {
  return (
    <li className='cart-list-item'>
      <p>Cart {cart}</p>
    </li>
  )
}

export default CartListItem

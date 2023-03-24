import { CartListItemProps } from '../../types/navigation-types'
import { IoMdTrash } from 'react-icons/io'
import '../../styles/navigation/CartListItem.scss'

const CartListItem = ({ cart, edit, remove }: CartListItemProps) => {
  return (
    <li className='cart-list-item'>
      <p>Cart {cart}</p>
      {edit && (
        <div onClick={() => remove(cart)}>
          <IoMdTrash />
        </div>
      )}
    </li>
  )
}

export default CartListItem

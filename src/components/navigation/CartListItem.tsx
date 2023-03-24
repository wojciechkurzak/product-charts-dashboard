import { CartListItemProps } from '../../types/navigation-types'
import { IoMdTrash } from 'react-icons/io'
import '../../styles/navigation/CartListItem.scss'

const CartListItem = ({ cart, edit, remove, route }: CartListItemProps) => {
  return (
    <li className='cart-list-item'>
      <p>{cart.name}</p>
      {edit && (
        <div onClick={() => remove(cart.id)}>
          <IoMdTrash />
        </div>
      )}
    </li>
  )
}

export default CartListItem

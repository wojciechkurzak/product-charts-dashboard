import { CartListItemProps } from '../../../types/navigation-types'
import { IoMdTrash } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import './CartListItem.scss'

const CartListItem = ({ cart, edit, remove, menuHide }: CartListItemProps) => {
  return (
    <li className='cart-list-item'>
      <NavLink
        to={`/cart/${cart.id}`}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
        onClick={menuHide}
      >
        <p>Cart {cart.id}</p>
      </NavLink>
      {edit && (
        <div onClick={() => remove(cart.id)}>
          <IoMdTrash />
        </div>
      )}
    </li>
  )
}

export default CartListItem

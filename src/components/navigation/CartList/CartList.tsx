import { CartListProps } from '../../../types/navigation-types'
import CartListItem from '../CartListItem/CartListItem'
import './CartList.scss'

const CartList = ({ carts, edit, remove, menuHide }: CartListProps) => {
  return (
    <ul className='cart-list'>
      {carts &&
        carts.map((cart) => (
          <CartListItem
            cart={cart}
            edit={edit}
            remove={remove}
            menuHide={menuHide}
            key={cart.id}
          />
        ))}
    </ul>
  )
}

export default CartList

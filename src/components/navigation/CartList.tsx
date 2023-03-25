import { CartListProps } from '../../types/navigation-types'
import CartListItem from './CartListItem'
import '../../styles/navigation/CartList.scss'

const CartList = ({ carts, edit, remove }: CartListProps) => {
  return (
    <ul className='cart-list'>
      {carts.map((cart) => (
        <CartListItem cart={cart} edit={edit} remove={remove} key={cart.id} />
      ))}
    </ul>
  )
}

export default CartList

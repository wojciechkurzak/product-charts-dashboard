import { CartAddButtonProps } from '../../types/navigation-types'
import '../../styles/navigation/CartAddButton.scss'

const CartAddButton = ({ onClick }: CartAddButtonProps) => {
  return (
    <button onClick={onClick} className='header-add-button'>
      Add new cart
    </button>
  )
}

export default CartAddButton

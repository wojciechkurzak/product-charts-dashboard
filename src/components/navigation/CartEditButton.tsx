import { CartEditButtonProps } from '../../types/navigation-types'
import { MdEdit } from 'react-icons/md'
import '../../styles/navigation/CartEditButton.scss'

const CartEditButton = ({ onClick }: CartEditButtonProps) => {
  return (
    <button onClick={onClick} className='header-edit-button'>
      <MdEdit />
    </button>
  )
}

export default CartEditButton

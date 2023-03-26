import { CartEditButtonProps } from '../../types/navigation-types'
import { MdEdit } from 'react-icons/md'
import '../../styles/navigation/CartEditButton.scss'

const CartEditButton = ({ edit, onClick }: CartEditButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={edit ? 'header-edit-button edit-active' : 'header-edit-button'}
    >
      <MdEdit />
    </button>
  )
}

export default CartEditButton

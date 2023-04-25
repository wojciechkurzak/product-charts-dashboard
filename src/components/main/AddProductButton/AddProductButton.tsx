import { AddProductButtonProps } from '../../../types/main-types'
import './AddProductButton.scss'

const AddProductButton = ({ create }: AddProductButtonProps) => {
  return (
    <>
      <button onClick={create} className='add-product'>
        Create new cart
      </button>
    </>
  )
}

export default AddProductButton

import { useState, useEffect } from 'react'
import { AddProductItemProps } from '../../types/main-types'
import '../../styles/main/AddProductItem.scss'

const AddProductItem = ({ product, add }: AddProductItemProps) => {
  const [quantity, setQuantity] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuantity(e.target.value)
  }

  const handleUpdateCart = (): void => {
    if (isNaN(parseInt(quantity))) return
    add({
      ...product,
      quantity: parseInt(quantity),
    })
  }

  useEffect(() => {
    if (parseInt(quantity) !== 0) handleUpdateCart()
  }, [quantity])

  return (
    <div className='add-product-item'>
      <div>
        <p>{product.title}</p>
      </div>
      <div>
        <p>{product.price}</p>
      </div>
      <div>
        <input
          type='text'
          value={quantity}
          onChange={handleInputChange}
        ></input>
      </div>
    </div>
  )
}

export default AddProductItem

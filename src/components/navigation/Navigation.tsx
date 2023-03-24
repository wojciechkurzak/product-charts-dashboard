import React, { useState } from 'react'
import CartAddButton from './CartAddButton'
import '../../styles/navigation/Navigation.scss'
import CartEditButton from './CartEditButton'
import CartList from './CartList'

const Navigation = () => {
  const [carts, setCarts] = useState<number[]>([])
  const [edit, setEdit] = useState<boolean>(false)

  const handleAddCart = (): void => {
    setCarts([...carts, carts.length + 1])
  }

  const handleToggleEdit = (): void => {
    setEdit(!edit)
  }

  const handleRemoveItem = (cart: number): void => {
    setCarts(carts.filter((element) => element !== cart))
  }

  return (
    <nav>
      <div className='navigation-buttons'>
        <CartAddButton onClick={handleAddCart} />
        <CartEditButton onClick={handleToggleEdit} />
      </div>
      <div className='navigation-carts'>
        <CartList carts={carts} edit={edit} remove={handleRemoveItem} />
      </div>
    </nav>
  )
}

export default Navigation

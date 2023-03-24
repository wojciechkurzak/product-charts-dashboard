import { useState } from 'react'
import CartAddButton from './CartAddButton'
import CartEditButton from './CartEditButton'
import CartList from './CartList'
import { CartType } from '../../types/navigation-types'
import '../../styles/navigation/Navigation.scss'

const Navigation = () => {
  const [carts, setCarts] = useState<CartType[]>([])
  const [name, setName] = useState<string>('')
  const [edit, setEdit] = useState<boolean>(false)

  const handleAddCart = (): void => {
    if (!name.length) return
    const id = crypto.randomUUID()
    setCarts([...carts, { id: id, name: name }])
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleToggleEdit = (): void => {
    setEdit(!edit)
  }

  const handleRemoveItem = (id: string): void => {
    setCarts(carts.filter((cart) => cart.id !== id))
  }

  return (
    <nav>
      <input
        type='text'
        value={name}
        onChange={handleInputChange}
        placeholder='Cart name'
      />
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

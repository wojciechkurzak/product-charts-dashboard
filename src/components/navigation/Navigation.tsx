import { useState } from 'react'
import CartAddButton from './CartAddButton'
import CartEditButton from './CartEditButton'
import CartList from './CartList'
import '../../styles/navigation/Navigation.scss'

const Navigation = ({ carts, add, remove }: any) => {
  const [name, setName] = useState<string>('')
  const [edit, setEdit] = useState<boolean>(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleToggleEdit = (): void => {
    setEdit(!edit)
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
        <CartAddButton onClick={() => add(name)} />
        <CartEditButton edit={edit} onClick={handleToggleEdit} />
      </div>
      <div className='navigation-carts'>
        <CartList carts={carts} edit={edit} remove={remove} />
      </div>
    </nav>
  )
}

export default Navigation

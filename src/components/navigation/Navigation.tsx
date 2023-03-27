import { useState } from 'react'
import CartAddButton from './CartAddButton'
import CartEditButton from './CartEditButton'
import CartList from './CartList'
import { NavigationProps } from '../../types/navigation-types'
import '../../styles/navigation/Navigation.scss'

const Navigation = ({
  carts,
  add,
  remove,
  menu,
  menuHide,
}: NavigationProps) => {
  const [name, setName] = useState<string>('')
  const [edit, setEdit] = useState<boolean>(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleToggleEdit = (): void => {
    setEdit(!edit)
  }

  const handleAddItem = (): void => {
    add(name)
    setName('')
  }

  return (
    <nav className={menu ? 'menu-open' : ''}>
      <input
        type='text'
        value={name}
        onChange={handleInputChange}
        placeholder='Cart name'
      />
      <div className='navigation-buttons'>
        <CartAddButton onClick={handleAddItem} />
        <CartEditButton edit={edit} onClick={handleToggleEdit} />
      </div>
      <div className='navigation-carts'>
        <CartList
          carts={carts}
          edit={edit}
          remove={remove}
          menuHide={menuHide}
        />
      </div>
    </nav>
  )
}

export default Navigation

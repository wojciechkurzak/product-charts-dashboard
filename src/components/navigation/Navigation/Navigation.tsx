import { useState } from 'react'
import CartAddButton from '../CartAddButton/CartAddButton'
import CartEditButton from '../CartEditButton/CartEditButton'
import CartList from '../CartList/CartList'
import { NavigationProps } from '../../../types/navigation-types'
import { useNavigate } from 'react-router-dom'
import './Navigation.scss'

const Navigation = ({ carts, remove, menu, menuHide }: NavigationProps) => {
  const [edit, setEdit] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleToggleEdit = (): void => {
    setEdit(!edit)
  }

  const handleAddCart = (): void => {
    navigate('create')
  }

  return (
    <nav className={menu ? 'menu-open' : ''}>
      <div className='navigation-buttons'>
        <CartAddButton onClick={handleAddCart} />
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

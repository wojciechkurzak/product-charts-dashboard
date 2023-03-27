import { useState } from 'react'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Cart } from './components/interfaces/CartInterface'
import './App.scss'

const App = () => {
  const [carts, setCarts] = useState<Cart[]>([])
  const [menu, setMenu] = useState<boolean>(false)

  const navigate = useNavigate()
  const location = useLocation()

  const handleMenuToggle = (): void => {
    setMenu(!menu)
  }

  const handleMenuHide = (): void => {
    setMenu(false)
  }

  const handleGetAvaibleId = (): string => {
    let id: number
    for (id = 1; id < 20; id++) {
      if (!carts.some((cart) => cart.id === id.toString())) return id.toString()
    }
    return id.toString()
  }

  const handleAddCart = (name: string): void => {
    if (!name.length || carts.length >= 20) return
    const id = handleGetAvaibleId()
    setCarts([{ id: id, name: name }, ...carts])
  }

  const handleRemoveItem = (id: string): void => {
    const routeId = location.pathname.slice(6, 8)
    if (routeId === id) navigate('/')
    setCarts(carts.filter((cart) => cart.id !== id))
  }

  return (
    <div className='App'>
      <Header onClick={handleMenuToggle} />
      <Navigation
        carts={carts}
        add={handleAddCart}
        remove={handleRemoveItem}
        menu={menu}
        menuHide={handleMenuHide}
      />
      <Outlet context={carts} />
    </div>
  )
}

export default App

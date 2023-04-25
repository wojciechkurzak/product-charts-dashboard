import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation/Navigation'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Cart from './interfaces/CartInterface'
import LoadingPage from './components/misc/LoadingPage/LoadingPage'
import Product from './interfaces/ProductInterface'
import './App.scss'

const App = () => {
  const [carts, setCarts] = useState<Cart[]>([])
  const [pending, setPending] = useState<boolean>(true)
  const [menu, setMenu] = useState<boolean>(false)

  const navigate = useNavigate()
  const location = useLocation()

  const handleGetCarts = async (): Promise<void> => {
    const response = await fetch('https://dummyjson.com/carts')
    const data = await response.json()
    setCarts(data.carts)
    setPending(false)
  }

  const handleMenuToggle = (): void => {
    setMenu(!menu)
  }

  const handleMenuHide = (): void => {
    setMenu(false)
  }

  const handleGetAvaibleId = (): number => {
    let id: number = 1
    for (let cart in carts) {
      if (!carts.some((cart) => cart.id === id)) return id
      id++
    }
    return id
  }

  const handleAddCart = (products: Product[]): void => {
    if (products.length === 0) return
    const id = handleGetAvaibleId()
    const newCart = { id: id, products: products }
    setCarts([newCart, ...carts])
    navigate(`/cart/${id}`)
  }

  const handleRemoveCart = (id: number): void => {
    const routeId = location.pathname.slice(6, 8)
    if (parseInt(routeId) === id) navigate('/')
    setCarts(carts.filter((cart) => cart.id !== id))
  }

  useEffect(() => {
    handleGetCarts()
  }, [])

  return (
    <div className='App'>
      {!pending ? (
        <>
          <Header onClick={handleMenuToggle} />
          <Navigation
            carts={carts}
            remove={handleRemoveCart}
            menu={menu}
            menuHide={handleMenuHide}
          />
          <Outlet context={{ carts: carts, addCart: handleAddCart }} />
        </>
      ) : (
        <LoadingPage />
      )}
    </div>
  )
}

export default App

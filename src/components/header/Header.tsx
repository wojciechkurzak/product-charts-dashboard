import { NavLink } from 'react-router-dom'
import '../../styles/header/Header.scss'

const Header = () => {
  return (
    <header>
      <h1>
        <NavLink to='/'>Dashboard</NavLink>
      </h1>
    </header>
  )
}

export default Header

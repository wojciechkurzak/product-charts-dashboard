import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { HeaderProps } from '../../types/header-types'
import logo from '../../images/logo.png'
import './Header.scss'

const Header = ({ onClick }: HeaderProps) => {
  return (
    <header>
      <button onClick={onClick}>
        <FiMenu />
      </button>
      <h1>
        <NavLink to='/'>
          <div className='logo'>
            <img src={logo} alt='logo' />
            <p>Dashboard</p>
          </div>
        </NavLink>
      </h1>
    </header>
  )
}

export default Header

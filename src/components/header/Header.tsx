import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { HeaderProps } from '../../types/header-types'
import '../../styles/header/Header.scss'

const Header = ({ onClick }: HeaderProps) => {
  return (
    <header>
      <button onClick={onClick}>
        <FiMenu />
      </button>
      <h1>
        <NavLink to='/'>Dashboard</NavLink>
      </h1>
    </header>
  )
}

export default Header

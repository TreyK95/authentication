import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

// class NavBar extends React.Component {

// }

 
const NavBar = () => {
  const {pathname} = useLocation()
  return (
    <div>
      <Menu>
        <Link to='/'>
        <Menu.Item active={pathname === '/'}>
          Home
        </Menu.Item>
        </Link>
        <Link to='/about'>
          <Menu.Item active={pathname === '/about'}>
            About
          </Menu.Item>
        </Link>
        <Link to='/componentDemo'>
        <Menu.Item active={pathname === '/componentDemo'}>
            Component Demo
        </Menu.Item>
        </Link>
      </Menu>
    </div>
  )
}


export default NavBar

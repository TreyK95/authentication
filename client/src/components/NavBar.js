  
import React from 'react'
import { Link, useLocation, withRouter } from 'react-router-dom'
import { Menu, MenuItem } from 'semantic-ui-react'
import { AuthConsumer } from '../providers/AuthProvider'
class NavBar extends React.Component {

  getRightNavBar = ()=>{
    const { auth, location, history } = this.props
    const { user, handleLogout } = auth

    if(user){
      return(
        <Menu.Menu position='right'>
      
            <Menu.Item onClick={()=>handleLogout(history) }active={location.pathname === '/'} >
              Logout
              </Menu.Item >
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
         <Link to='/register'>
            <Menu.Item active={location.pathname === '/register'} >
              Register
            </Menu.Item >
          </Link>
          <Link to='/login'>
            <Menu.Item active={location.pathname === '/login'} >
              Login
            </Menu.Item >
          </Link>
        </Menu.Menu>
      )
    }
  }
     
    render(){
        const { location, auth } = this.props
        const { user } = auth
        return(

            <Menu>
                <Link to='/'>
                  <Menu.Item active={location.pathname === '/'} >
                    Home
                  </Menu.Item >
                </Link>
                <Link to='/about'>
                  <Menu.Item active={location.pathname === '/about'} >
                    About    
                 </Menu.Item >
                </Link>
                <Link to='/componentDemo'>
                  <Menu.Item active={location.pathname === '/componentDemo'} >
                    Component Demo    
                 </Menu.Item >
                </Link>
                {this.getRightNavBar()}
            </Menu>
        )

    }
}

class ConnectedNavBar extends React.Component {
  render(){
    return (
      <AuthConsumer>
        {(value)=>(
          <NavBar {...this.props} auth={value}/>
        )}
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavBar)


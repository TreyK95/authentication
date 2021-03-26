import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Segment, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import Button from './Button';

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='Sign in'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='Sign Up'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  render() {
    return (
      <div>
        <Segment inverted>
        <Menu inverted pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='myFriendster'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          <Link to='/people'>
            <Menu.Item
              name='People'
              id='people'
              active={this.props.location.pathname === '/people'}
            />
          </Link>
          <Link to='/posts'>
            <Menu.Item
              name='My Posts'
              id='Posts'
              active={this.props.location.pathname === '/posts'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
        </Segment>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);


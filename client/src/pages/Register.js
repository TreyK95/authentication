import React from 'react'
import { Form, Header, Segment } from 'semantic-ui-react';
import Button from '../components/Button';
import { AuthConsumer } from '../providers/AuthProvider';

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: ''};

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password, passwordConfirmation} = this.state
    const { auth: {handleRegister, }, history, } = this.props

    if (password === passwordConfirmation)
      handleRegister({email, password, passwordConfirmation}, history);
    else 
      alert('Passwords Do Not Match')
  };

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value,})
  }

  render(){
  const { email, password, passwordConfirmation} = this.state

  return (
    <Segment basic>
    <Header as='h1' textAlign='center'>Register</Header>
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
      label="Email:"
      required
      autoFocus 
      name='email'
      value={email}
      placeholder='Enter Email'
      onChange={this.handleChange}
      />
      <Form.Input
      label="Password:"
      required
      name='password'
      value={password}
      placeholder='Enter Password'
      type='password'
      onChange={this.handleChange}
      />
      <Form.Input
      label="Password Confirmation"
      required
      name="passwordConfirmation"
      value={passwordConfirmation}
      placeholder="Please Confirm Password"
      type="password"
      onChange={this.handleChange}
      />
      <Segment textAlign='center' basic>
        <Button primary color='green' type='submit'>Register</Button>
      </Segment>
    </Form>
    </Segment>
  )
  }
}

export default class ConnectedRegister extends React.Component {
  render () {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props} auth={auth} />}
      </AuthConsumer>
    )

  }
}

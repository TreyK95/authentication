import React from 'react'
import { Form, Grid, Header, Segment } from 'semantic-ui-react';
import Button from '../components/Button';
import { AuthConsumer } from '../providers/AuthProvider';

class Login extends React.Component {
  state = {email:'', password: ''}

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    this.props.auth.handleLogin({email,password}, this.props.history);
  }

  handleChange = (e) => {
    const {name, value } = e.target;
    this.setState({[name]: value,})
  }

  render () {
    const {email, password} = this.state;

    return (
      <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
      <Segment  stacked inverted>
        <Header as='h1' textAlign='center'>Sign In</Header>
        <Form  inverted onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
          <Form.Input
          label="Email:"
          autoFocus
          required 
          name='email'
          value={email}
          placeholder='Enter Email'
          onChange={this.handleChange}
          />
        <Form.Input
        label="Password"
        required
        name='password'
        value={password}
        placeholder="Enter Password"
        type='password'
        onChange={this.handleChange}
        />
        </Form.Group>
        <Segment textAlign='center' basic>
          <Button primary type='submit'>Sign In</Button>
        </Segment>
        </Form>
      </Segment>
      </Grid.Column>
      </Grid>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render (){
    return (
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth}/>}
      </AuthConsumer>
    )
  }
}
import React from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null}

  handleRegister = (user, history) =>{
    axios.post("/api/auth", user)
    .then(res => {
      this.setState({user: res.data.data,});
      history.push("/")
    })
    .catch(res => {
      console.log(res)
    })
  }

  handleLogin = (user, history)=>{
    axios.post("/api/auth/sign_in", user)
    .then (res => {
      this.setState({ user: res.data.data})
      history.push("/")
    })
    .catch (res=> {
      console.log(res)
    })
  }

  render () {
    return (
      <AuthContext.Provider value={{
      ...this.state, 
      handleRegister: this.handleRegister,
      handleLogin: this.handleLogin,}}>
      {this.props.children}
    </AuthContext.Provider>
    );
  }
}

export default AuthProvider

// render () {
//   return (
//     <AuthContext.Provider value={{
//       ...this.state,

//     }}>
//     {this.props.children}
//   </AuthContext.Provider>
//   );
// }


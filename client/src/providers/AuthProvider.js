import React from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user:{name: 'Yert', age: 21} }
  render () {
    return (
      <AuthContext.Provider value={this.state}>
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


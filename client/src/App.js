import './App.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router';
import NavBar from './components/NavBar';
import About from './pages/About';
import ComponentDemo from './pages/ComponentDemo';
import { Container } from 'semantic-ui-react';
import Register from './pages/Register';
import ConnectedLogin from './pages/Login';
import ConnectedFetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import NoMatch from './components/NoMatch';
import Posts from './pages/Posts';
import People from './pages/People';
import MyBuddies from './pages/MyBuddies';

function App() {
  return (
    <>
    <NavBar/>
    <ConnectedFetchUser>
    <Container>
      <Switch>
        <ProtectedRoute exact path="/" component={Home}/>
        <ProtectedRoute exact path='/people' component={People}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/componentDemo' component={ComponentDemo}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={ConnectedLogin}/>
        <ProtectedRoute exact path='/posts' component={Posts} />
        <ProtectedRoute exact path='/mybuddies' component={MyBuddies} />
        <Route component={NoMatch}/>
      </Switch>
      </Container>
      </ConnectedFetchUser>
    </>
  );
}

export default App;

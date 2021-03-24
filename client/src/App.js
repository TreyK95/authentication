import './App.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router';
import NavBar from './components/NavBar';
import About from './pages/About';
import ComponentDemo from './pages/ComponentDemo';
import { Container } from 'semantic-ui-react';
import Register from './pages/Register';
import ConnectedLogin from './pages/Login';

function App() {
  return (
    <>
    <NavBar/>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/about' component={About}/>
        <Route exact path='/componentDemo' component={ComponentDemo}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={ConnectedLogin}/>
      </Switch>
      </Container>
    </>
  );
}

export default App;

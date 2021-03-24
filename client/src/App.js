import './App.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router';
import NavBar from './components/NavBar';
import About from './pages/About';
import ComponentDemo from './pages/ComponentDemo';

function App() {
  return (
    <>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/about' component={About}/>
        <Route exact path='/componentDemo' component={ComponentDemo}/>
        {/* <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/> */}
      </Switch>
    </>
  );
}

export default App;

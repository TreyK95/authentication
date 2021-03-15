import './App.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router';
import NavBar from './components/NavBar';
import About from './pages/About';

function App() {
  return (
    <>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/about' component={About}/>
      </Switch>
    </>
  );
}

export default App;

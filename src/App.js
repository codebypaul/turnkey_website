import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from  './pages/Contact'
import Ready from './pages/Ready'
import Services from  './pages/Services'
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/ready_for_service' component={Ready}/>
        <Route path='/services' component={Services}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import SignUp from './pages/SignUp';
import Marketing from './pages/Marketing';
import Consulting from './pages/Consulting';
import SportsCollections from './pages/SportsCollections';
import LogIn from './pages/LogIn';



function App() {
  return (
    <Router>
      <Navbar />
      <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={Contacts} />
        <Route path='/log-in' component={LogIn} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/SportsCollections' component={SportsCollections}  />
     
      </Switch>
    </Router>
  );
}

export default App;
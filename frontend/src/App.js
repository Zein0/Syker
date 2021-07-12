import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import SportsCollections from './pages/SportsCollections';
import MainNavBar from './components/MainNavBar';
import axios from 'axios';
import Contacts from './pages/Contacts';


class App extends Component {
  
  render (){
    return (
     <div>
          <BrowserRouter>
            <div className = "App">
              <MainNavBar />
            </div>
          </BrowserRouter>
      
      </div>
     
    )
  }
}

export default App;

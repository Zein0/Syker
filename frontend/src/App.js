import './App.css';
import React, { Component,useState } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import SportsCollections from './pages/SportsCollections';
import MainNavBar from './components/MainNavBar';
import axios from 'axios';
import Contacts from './pages/Contacts';
import Casual from './pages/Casual';
import Home from './pages/Home';



class App extends Component {
  
  render (){

    return (
     <div>
       <div className = "App">
          <BrowserRouter>
              <MainNavBar />
          </BrowserRouter>
         
          
          
        
         
         
         
       </div>
      
      </div>
     
    )
  }
}

export default App;

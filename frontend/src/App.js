import './App.css';
import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import MainNavBar from './components/MainNavBar';




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

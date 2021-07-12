import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import './mainNavBar.css'
import skyerLogo from '../Img/Sykerlogo.png'
import Category from '../pages/Category';

class MainNavBar extends Component {
  state = {
    contacts: [],
    error_message:null
  };
 
  
  render(){
    return (
      <div className="mainNavBar">
      <header>
        
          <nav>
            
           
           <img className="logoSkyer" src={skyerLogo} />
          
          
          
            <div className="secondNav"> 
           
               <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/Contacts">Contacts</Link></li>   
              </ul>
            
             
              </div>
             
          </nav>
          <ul id="categoriesNav">
                  <li><Link to='/Category'>Category 1</Link></li>
                  <li><Link to="/Category">Category 2</Link></li> 
                  <li><Link to="/Category">Category 3</Link></li>   
                  <li><Link to="/Category">Category 4</Link></li>   
                  <li><Link to="/Category">Category 5</Link></li>   
                  <li><Link to="/Category">Category 6</Link></li>
                  <li><Link to="/Category">Casual</Link></li>       
              </ul>
      </header>
      
       <Route path="/" exact component={Home} />
      <Route path="/Contacts" component={Contacts} />
      <Route path="/Category" component={Category} />
  </div>
        
    )
  }
}

export default MainNavBar;
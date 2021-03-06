import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import './mainNavBar.css'
import skyerLogo from '../Img/Sykerlogo.png'
import Category from '../pages/Category';
import Category_2 from '../pages/Category_2';
import Category_3 from '../pages/Category_3';
import Category_4 from '../pages/Category_4';
import Category_5 from '../pages/Category_5';
import SportsCollections from '../pages/SportsCollections';
import Casual from '../pages/Casual';

// function seem(){

//   return window.location.href;
// }

class MainNavBar extends Component {
  state = {
    contacts: [],
    error_message:null,
    visible:true,
  
  }; 
  
  render(){  
    return (
      <div className="mainNavBar">
      <header>   
          <nav>      
           <img alt="Syker-Logo"className="logoSkyer" src={skyerLogo} />
            <div className="secondNav">     
               <ul>           
                  <li><Link onClick={event =>{
                    this.setState({visible:true}) 
                  }
                } to="/">Home</Link></li>
                  <li><Link onClick={event =>{
                    this.setState({visible:false}) 
                  }
                }
                   to="/Contacts">
                      Contacts
                    </Link></li>               
              </ul>   
              </div>    
          </nav> {
           this.state.visible?
           
          <ul id="categoriesNav" >        
                  <li><Link to='/Category'>Category 1</Link></li>
                  <li><Link to="/Category_2">Category 2</Link></li> 
                  <li><Link to="/Category_3">Category 3</Link></li>   
                  <li><Link to="/Category_4">Category 4</Link></li>   
                  <li><Link to="/Category_5">Category 5</Link></li>   
                  <li><Link to="/Category">Category 6</Link></li>
                  <li><Link to="/Casual">Casual</Link></li>       
              </ul>:null
  }
      </header>    
      <Route path="/" exact component={Home} />
      <Route  path="/Contacts" component={Contacts}   />
      <Route path="/Category" component={Category} />
      <Route path="/Category_2" component={Category_2} />
      <Route path="/Category_3" component={Category_3} />
      <Route path="/Category_4" component={Category_4} />
      <Route path="/Category_5"  component={Category_5} />
      <Route  path="/SportsCollections"  component={SportsCollections}   />
      <Route path="/Casual"  component={Casual} />
      
  </div>
        
    )
  }
}

export default MainNavBar;
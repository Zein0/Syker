import React, { Component } from 'react';
import './Home.css'
import {Route, Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import { SliderDataSports_1,SliderDataSports_2,SliderDataSports_3,SliderDataCasual_1,SliderDataCasual_2,SliderDataCasual_3 } from '../components/SliderData';


const API_URL = "http://localhost:8000";
class Home extends React.Component {
  
  render(){
    return (

     <body>
      <div>
     
     
    <div className="containerImage">
      
            <div className="container-box-Image">
            < ImageSlider slides={SliderDataSports_1} />
                <div class="overlay">
                {/* <div class="homeImage-overlay-button"><Link to='/ImageSlider'> BUTTON </Link></div> */}
                </div>
                
            </div>
           



            <div className="container-box-Image">
            < ImageSlider slides={SliderDataSports_2} />
            <div class="overlay">
                {/* <div class="homeImage-overlay-button"><a href={`${API_URL}/uploads/home-3.jpg`} > BUTTON </a></div> */}
                </div>
                
            </div>
             <div className="container-box-Image">
               <div className="homeImage3">
             < ImageSlider slides={SliderDataSports_3} />
            <div class="overlay">
            </div>
                {/* <div class="homeImage-overlay-button"><a href="#"> button </a></div> */}
                </div>
                
            </div>

            
                <div className="shopNow-Container">
                        <Link to="/SportsCollections">
                 <button className="shopNow">SHOP NOW</button>
                        </Link>
                </div>
            {/* <button onClick={message}> Press me to print a message! </button> */}
    

    </div>
    <br/>
    <div className="containerImage">
      
      <div className="container-box-Image">
      < ImageSlider slides={SliderDataCasual_1} />
          <div class="overlay">
          {/* <div class="homeImage-overlay-button"><Link to='/ImageSlider'> BUTTON </Link></div> */}
          </div>
          
      </div>
     



      <div className="container-box-Image">
      < ImageSlider slides={SliderDataCasual_2} />
      <div class="overlay">
          {/* <div class="homeImage-overlay-button"><a href={`${API_URL}/uploads/home-3.jpg`} > BUTTON </a></div> */}
          </div>
          
      </div>
       <div className="container-box-Image">
         <div className="homeImage3">
       < ImageSlider slides={SliderDataCasual_3} />
      <div class="overlay">
      </div>
          {/* <div class="homeImage-overlay-button"><a href="#"> button </a></div> */}
          </div>
          
      </div>

      
          <div className="shopNow-Container">
                  <Link to="/Casual">
           <button className="shopNow">SHOP NOW</button>
                  </Link>
          </div>
      {/* <button onClick={message}> Press me to print a message! </button> */}


</div>
    
    </div>
     
    </body>
    
  
        
    )
  }
}

export default Home;
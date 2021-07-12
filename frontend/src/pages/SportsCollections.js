import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import itemViews from '../components/itemView';

class SportsCollections extends Component {
  render () {
    return (
      
      <div>
      
        <Link to="/SportsCollections" >Home </Link>
     <Route path="/SportsCollections" component={itemViews} /> 
      </div>

    );
  }
}

export default SportsCollections;

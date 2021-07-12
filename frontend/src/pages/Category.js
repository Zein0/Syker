import React from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

class Category extends React.Component {
  state ={
    posts:[]
  };

  componentDidMount(){
    axios.get('http://localhost:8000/read')
    .then(res =>{
      console.log(res);
      this.setState({posts:res.data});
    })
  }

  render(){
    return (
     <h1>
       {this.state.posts.map(post =>
       <li>
         {post.shirt}
       </li>)}
         Category
     </h1>
        
    )
  }
}

export default Category;
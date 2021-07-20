import React from 'react';
import axios from 'axios';
import './Category_2.css'

class Category_2 extends React.Component {
  state ={
    posts:[],
    img:''
  };
//   componentDidMount() {
//     axios.get('http://localhost:8000/image')
//     .then((res) => res.json())
//     .then((data) => {
//         // console.log(img)
//         var base64Flag = 'data:image/jpeg;base64,';
//         var imageStr = this.arrayBufferToBase64(data.img.data.data);
//         this.setState({
//             img: base64Flag + imageStr
//         })
//     })
// }

  componentDidMount(){
    axios.get('http://localhost:8000/readCatgories')
    .then(res =>{
      console.log(res);
      this.setState({posts:res.data});
    })
  }

  render(){
   
    return (
      <div>
         <h1>
          Category
     </h1>
     
      <div className="Category">
     
     


       {this.state.posts.map(post =>
       <div >
         {post.pants}
       </div>)}
       </div>
       </div>
      
        
    )
  }
}

export default Category_2;
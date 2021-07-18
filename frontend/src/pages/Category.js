import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import DefaultImg from './assets/default-img.jpg';
import FileBase64 from 'react-file-base64';

const API_URL = "http://localhost:8000";
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
        multerImage: DefaultImg,
          
         
        }
       
    }
    setDefaultImage(uploadType){
    if(uploadType === "multer"){
        this.setState({
            multerImage: DefaultImg
        });
    }
}
  
    
    uploadImage(e,method){
        if(typeof e.target.files[0] =="undefined") return;
        if(method === "multer"){
            let imageFormObj = new FormData();
            imageFormObj.append("imageName", e.target.files[0].name + Date.now()); //e.target.files[0].name to name in mongodb same as the image name
            imageFormObj.append("imageData",e.target.files[0]);
        this.setState({
            multerImage:URL.createObjectURL(e.target.files[0])
        });
        axios.post(`${API_URL}/image/uploadmulter`,imageFormObj)
            .then((data)=>{
                if (data.data.success){
                    alert("Image have been successfully uploaded using multer");
                    this.setDefaultImage("multer");
                }
            })
            .catch((err)=>{
                alert("Error while uploading image using multer");
                this.setDefaultImage("multer");
            });
        }
    }
    render(){
        return (
        <div>
            {/* <img  src={`${API_URL}/uploads/2021-07-17T05:39:52.083Zchris.jpg`}/> */}
    
            <h4>Upload image</h4>
            <input type="file" onChange={(e)=> this.uploadImage(e,"multer")} />
            <img src={this.state.multerImage} alt="upload.image" />
        </div>
        )
    }
}

export default Category;


// OUTPUT NAME OF FILE

// this.handleSubmit = this.handleSubmit.bind(this);  //this in state
// this.fileInput = React.createRef();

// handleSubmit(event) {
//     event.preventDefault();
//     alert(
//       `Selected file - ${
//         this.fileInput.current.files[0].name
//       }`,
//        console.log(this.fileInput.current.files[0].name)
//     );
//   }


{/* <form onSubmit={this.handleSubmit}>
<label>
  Upload file:
  <input type="file" ref={this.fileInput} />
</label>
<br />
<button type="submit">Submit</button>
</form> */}

// OUTPUT NAME OF FILE
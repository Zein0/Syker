import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const SignUpButton=(link)=>{
  if(link==="sign-up"){
    return "Sign Up"
}
else{
 return "Log In"
}
}

export function Button({link}) {
  return (
    <Link to={link}>
  
            <button className='btn-Sign-Up'>{SignUpButton(link)}</button>
     
  
     
    </Link>
    
  
  );
}

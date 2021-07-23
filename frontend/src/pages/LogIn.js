import React from 'react';
import './LogIn.css';
export default function LogIn() {
    
      return (
        <form action="/login">
 <center><h2 > Login </h2></center> 
  <label for="email" > Email</label>
  <input type="text" name="email" placeholder="Email / UserName" />
  <div className="email error"></div>
  <label for="password">Password</label>
  <input type="password" name="password" placeholder="Password" />
  <div className="password error"></div>
  <button class="btnSign">login</button>
</form>
      )
    }

  

import React from 'react';
import './LogIn.css';
import axios from 'axios';




export default function SignUp() {

 async function  SignUpForm(e){ 
  

  // get values
  const form = document.querySelector('form');
  e.preventDefault();
  const emailError = document.querySelector('.email.error');
  const passwordError = document.querySelector('.password.error');
  const nameError = document.querySelector('.name.error');
  const userError = document.querySelector('.username.error');
  const addressError = document.querySelector('.address.error');
  const email = form.email.value;
  const password = form.password.value;
  const name = form.name.value;
  const username = form.username.value;
  const address = form.address.value;
  emailError.textContent = '';
  passwordError.textContent = '';
  nameError.textContent = '';
  userError.textContent = '';
  addressError.textContent = '';
   
  try {
    const res = await fetch("http://localhost:8000/user/signup", { 
      method: 'POST', 
      body: JSON.stringify({ email, password,name, username, address }),
      headers: {'Content-Type': 'application/json'}
    });
    const data = await res.json();
    console.log(data);
    if (data.errors) {
      emailError.textContent = data.errors.email;
      passwordError.textContent = data.errors.password;
      nameError.textContent = data.errors.name;
      userError.textContent = data.errors.username;
      addressError.textContent = data.errors.address;
    
    }
    if (data.user) {
      window.location.assign('/');
    }
  }
  catch (err) {
    console.log(err);
  }
  }
      return (
        <form onSubmit={SignUpForm.bind(this)} >
  <center><h2 >Sign Up</h2> </center> 
  
  <label for="name" > Name</label>
  <input type="text" name="name" placeholder="Name" />
  <div className="name error"></div>

  <label for="user" > UserName</label>
  <input type="text" name="username" placeholder="UserName" />
  <div className="username error"></div>

  <label for="email" > Email</label>
  <input type="text" name="email" placeholder="Email" />
  <div className="email error"></div>

  <label for="password">Password</label>
  <input type="password" name="password" placeholder="Password" />
  <div className="password error"></div>

  <label for="address">Address</label>
  <input type="text" name="address" placeholder="Address" />
  <div className="address error"></div>


  <button class="btnSign">Create </button>
</form>
      )
    }

  

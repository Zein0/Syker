import React from 'react';
import './LogIn.css';

export default function LogIn() {


 async function  LogInForm(e){ 


  // get values
  const form = document.querySelector('form');
  e.preventDefault();
  const emailError = document.querySelector('.email.error');
  const passwordError = document.querySelector('.password.error');

  const email = form.email.value;
  const password = form.password.value;

  emailError.textContent = '';
  passwordError.textContent = '';
 if(email.trim()===''||password.trim()===''){
   if(email.trim()===''){
     emailError.textContent = 'Please Enter a Valid email or Username'
   }
   if(password.trim()===''){
    passwordError.textContent = 'Please Enter a Valid email or Username'
  }
  return ;
 }

  try {
    const res = await fetch("http://localhost:8000/user/login", { 
      method: 'POST', 
      body: JSON.stringify({ email, password }),
      headers: {'Content-Type': 'application/json'},
      credentials:'include'

    });
    const data = await res.json();
    console.log(data);
    if (data.errors) {
      emailError.textContent = data.errors;
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
        <div>


        <form onSubmit={LogInForm.bind(this)}>
 <center><h2 > Login </h2></center> 
  <label for="email" > Email</label>
  <input type="text" name="email" placeholder="Email / UserName" />
  <div className="email error"></div>
  <label for="password">Password</label>
  <input type="password" name="password" placeholder="Password" />
  <div className="password error"></div>
  <button class="btnSign">login</button>
</form>
</div>
      )
    }
  

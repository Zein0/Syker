import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './Contacts.css'

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject:'',
      message: ''
    }
}
submitEmail(e){
  e.preventDefault();
  axios({
    method: "POST", 
    url:"http://localhost:8000/send", 
    data:  this.state
  }).then((response)=>{
    if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
    }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
    }
  })
}

resetForm(){
  this.setState({name: '', email: '',subject:'', message: ''})
}

render() {
  return (


<div>
	<div className="container">
		<div className="contact-box">
			<div className="left">
      <br/>
                <p>Feel free to contact us for

            Assosciating with us

            Help buying products

            Any query regarding shipping, products etc.</p>
            
            <h2>About Us</h2>
             
            <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet nec. 
            Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Tincidunt eget nullam non nisi est. 
            Id aliquet risus feugiat in ante metus dictum at. Ut aliquam purus sit amet luctus venenatis. 
            Sodales ut eu sem integer vitae justo eget magna fermentum. Tempor nec feugiat nisl pretium fusce id velit.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Risus at ultrices mi tempus. 
            Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Diam maecenas ultricies mi eget mauris 
            pharetra et ultrices neque. Arcu bibendum at varius vel pharetra. Id diam vel quam elementum pulvinar. 
            Scelerisque in dictum non consectetur a erat nam at. Eleifend quam adipiscing vitae proin sagittis 
            nisl rhoncus mattis. Lacinia quis vel eros donec. Diam donec adipiscing tristique risus.
            </p>
      </div>
      
			<div class="right">
    
				<h2>Contact Us</h2>
        <form id="contact-form" onSubmit={this.submitEmail.bind(this)} 
                              method="POST">
				<input placeholder="Your Name" type="text" className="field"  required value={this.state.name} 
                                 onChange={this.onNameChange.bind(this)} />
				<input placeholder="Your Email" type="email" className="field" required value={this.state.email} 
                                 onChange={this.onEmailChange.bind(this)}  />
       <input placeholder = "Subject" type="text" className="field" required value={this.state.subject}
                                onChange={this.onSubjectChange.bind(this)} />
				
				<textarea placeholder="Message" className="field" required value={this.state.message}
                                 onChange= {this.onMsgChange.bind(this)}/>
			
			  <button type="submit" className="btn">Send</button>
       </form>
      </div>
    
		</div>
	</div>
 
</div>

  );
}
onNameChange(event) {
  this.setState({name: event.target.value})
}

onEmailChange(event) {
  this.setState({email: event.target.value})
}

onSubjectChange(event) {
  this.setState({subject: event.target.value})
}

onMsgChange(event) {
  this.setState({message: event.target.value})
}
}


  



export default Contacts;
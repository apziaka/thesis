import React from 'react';
//import './Signin.css';

class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInUsername: '',
			signInPassword: ''
		}
	}

	onUsernameChange = (event) => {
		this.setState({signInUsername: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				username: this.state.signInUsername,
				password: this.state.signInPassword
			})
		})
		   .then(response => response.json())
		   .then(user => {
		   	  if (user.username) {
		   	  	this.props.onRouteChange('firstpage');
		   	  }
		   })	
	}

	render(){
		const { onRouteChange } = this.props;
		return(  
	
	 	<div className="sans-serif w-90 white mw6 center relative cover bg-top mt2">
      		
      		<article id="overlay" className="br3 ba dark-gray w-100 w-50-m w-100-l mw7 shadow-5 center absolute absolute--fill bg-navy o-70 z-unset"></article>
      		<div className="relative pa4 pa5-m">
        		<h1 className="f1 serif tracked ma0 mb4 pv3 white">Sign In</h1>
        		<div action="" id="login" className="">
          		  <div className="mb3">
            		<label htmlFor="username" className="db f4 white ttu ph2 mb2">Username</label>
            		<input type="text" 
            		name="username" 
            		className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
         		    onChange = {this.onUsernameChange}
         		    />
         		  </div>
          		  <div className="mb4">
           			<label htmlFor="password" className="db f4 white ttu ph2 mb2">Password</label>
            		<input type="password" 
            		name="password" 
            		className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
          		    onChange = {this.onPasswordChange}
          		    />
          		  </div>
          	      <div>
            		<button onClick={this.onSubmitSignIn} className="input-reset db w-100 light-gray f4 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill">Sign In</button>
          		  </div>
        		</div>
        
        		<div className="tc b f5 mt4 o-70 glow pa2 i pointer">
         		  <p onClick={() => onRouteChange('register')} className="register" >New Member? Register</p>
        		</div>
     		</div>
   		</div>
  
		);
	}
}

export default Signin;



  /* <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw7 shadow-5 center">
	  <main className="pa4 black-80">
		  <form className="measure center">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
		      <div class="mt3">
		        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" for="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
		      </div>
		    </fieldset>
		    <div className="">
		      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
		    </div>
		    <div className="lh-copy mt3">
		      <a href="#0" className="f6 link dim black db">Sign up</a>    
		    </div>
		  </form>
	  </main>
	 </article>  */
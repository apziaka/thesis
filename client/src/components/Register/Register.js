import React from 'react';
//import './Signin.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      gender: '',
      dateBirth: '',
      details: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onFirstNameChange = (event) => {
    this.setState({firstName: event.target.value})
  }

  onLastNameChange = (event) => {
    this.setState({lastName: event.target.value})
  }
  onUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onGenderChange = (event) => {
    this.setState({gender: event.target.value})
  }

  onDateBirthChange = (event) => {
    this.setState({dateBirth: event.target.value})
  }

  onDetailsChange = (event) => {
    this.setState({details: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
        gender: this.state.gender,
        dateBirth: this.state.dateBirth,
        details: this.state.details
      })
    })
       .then(response => response.json())
       .then(user => {
          if (user.username) {
            this.props.loadUser(user);
            this.props.onRouteChange('home');
          }
       }) 
  }
  
  render() {
    const { onRouteChange } = this.props;
    return(  
  
    <div className="sans-serif w-90 white mw6 center relative cover bg-top mt2">
          
          <article id="overlay" className="br3 ba dark-gray w-100 w-50-m w-100-l mw7 shadow-5 center absolute absolute--fill bg-navy o-70 z-unset"></article>
          <div className="relative pa4 pa5-m">
            <h1 className="f1 serif tracked ma0 mb4 pv3 white">Register</h1>
            <div action="" id="login" className="">

              <div className="mb4">
                <label htmlFor="email" className="db f4 white ph2 mb2">Email</label>
                  <input type="text" 
                  name="email" 
                  className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
                  onChange = {this.onEmailChange}
                  />
              </div>

              <div className="mb4">
                <label htmlFor="firstName" className="db f4 whit ph2 mb2">First Name</label>
                  <input type="text" 
                  name="firstName" 
                  className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
                  onChange = {this.onFirstNameChange}
                  />
              </div>

              <div className="mb4">
                <label htmlFor="lastName" className="db f4 white ph2 mb2">Last Name</label>
                  <input type="text" 
                  name="lastName" 
                  className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
                  onChange = {this.onLastNameChange}
                  />
              </div>

              <div className="mb4">
                <label htmlFor="username" className="db f4 white ph2 mb2">Username</label>
                  <input type="text" 
                  name="username" 
                  className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
                  onChange = {this.onUsernameChange}
                  />
              </div>

              <div className="mb4">
                <label htmlFor="password" className="db f4 white ph2 mb2">Password</label>
                <input type="password" 
                name="password" 
                className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
                onChange = {this.onPasswordChange}
                />
              </div>

              <div className="mb4">
                <label htmlFor="gender" className="db f4 white ph2 mb2">Gender</label>
                <input type="text" 
                name="gender" 
                className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
                onChange = {this.onGenderChange}
                />
              </div>

              <div className="mb4">
                <label htmlFor="dateBirth" className="db f4 white ph2 mb2">Date of Birth</label>
                <input type="text" 
                name="dateBirth" 
                className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
                onChange = {this.onDateBirthChange}
                />
              </div>

               <div className="mb4">
                <label htmlFor="details" className="db f4 white ph2 mb2">Details</label>
                <input type="text" 
                name="details" 
                className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-50 hover-bg-white-70 hover-gray outline-0 bn br-pill" 
                onChange = {this.onDetailsChange}
                />
              </div>

              <div>
                <button onClick={this.onSubmitSignIn} 
                className="input-reset db w-100 light-gray f4 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill">Register</button>
                </div>
            </div>
        </div>
    </div>
    //</article>

    );
  }
	

}

export default Register;
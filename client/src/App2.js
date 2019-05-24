import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import About from './components/About/About';
import SearchRide from './components/SearchRide/SearchRide';
import MainButtons from './components/MainButtons/MainButtons';
import './App.css';

const initialState = {
  route: 'home',
  isSignedIn: false,
  //search: false,
  user: {
   email: '',
   firstName: '',
   lastName: '',
   username: '',
   gender: '',
   dateBirth: '',
   details: ''
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
    //this.searchOn = this.searchOn.bind(this);
    //this.searchOff = this.searchOff.bind(this);
  }

  loadUser = (data) => {
    this.setState({user: {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      gender: data.gender,
      dateBirth: data.dateBirth,
      details: data.details 
    }})
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'firstpage') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }
/*
  searchOn() {
    this.setState({
      search: true
    });
  }

  searchOff() {
    this.setState({
      sea: false
    });
  }
*/
  renderInputField() {
    if(this.state.route === 'home' || this.state.route === 'firstpage') {
      return (
        <MainButtons onRouteChange={this.onRouteChange} />
        if( this.state.route === 'rides' ) {
          <SearchRide onRouteChange={this.onRouteChange} />
        } else {
          <p className='f3 link dim white underline pa3 pointer'>Offer</p>
        }
      ) ;
    } else if ( this.state.route === 'signin') {
      return (
          <Signin onRouteChange={this.onRouteChange} />
      );
    } else {
      return (
          <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
      );
    }
  }


  render() {
    return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        <Logo />
        {(this.state.route === 'home' || this.state.route === 'firstpage')
          ? <div>
              <MainButtons onRouteChange={this.onRouteChange} />
              {( this.state.route === 'rides' 
                ? <SearchRide onRouteChange={this.onRouteChange} />
                : <p className='f3 link dim white underline pa3 pointer'>Offer</p>
               )
              }
              
              <About />
              
            {
            /*
             <Logo />
             <SearchRide />
             <OfferRide />
              */}

            </div>
          : ( this.state.route === 'signin'
              ? <Signin onRouteChange={this.onRouteChange} />
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
}

export default App;

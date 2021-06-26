import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Usergreetin() {
  return <h1>Welcome back</h1>
}
function Guestgreetin() {
  return <h1>Signup</h1>
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <Usergreetin/>   
  }
  else {
    return  <Guestgreetin/>
  }
  
}
function Login(props) {
  return (
  <button onClick = {props.onClick}>
    Login
    </button>
  )
}
function Logout(props) {
  return (
  <button onClick = {props.onClick}>
    Logout
    </button>
  )
}

class Logcontroller extends React.Component{
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.loginhandle = this.loginhandle.bind(this)
    this.logouthandle = this.logouthandle.bind(this)
  }
  loginhandle() {
    this.setState({isLoggedIn:true})
  }
  logouthandle() {
    this.setState({ isLoggedIn: false})
  }
  
  render()
    {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
    
      button = <Logout onClick={this.logouthandle}/>
    }
    else {
      button = <Login onClick={this.loginhandle} />
    }
    return (
      <div>
         <Greeting isLoggedIn={isLoggedIn} />
      {button}
      </div>
     
    );
    }
  
}



ReactDOM.render(
    <Logcontroller/>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


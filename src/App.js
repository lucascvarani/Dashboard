import React from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login'

function App() {
  const responseFacebook = (response) => {
    console.log(response);
  }
  return (
    <div className="App">
      <FacebookLogin
    appId="372043986858165"
    autoLoad={true}
    fields="name,email,picture"
    onClick={console.log('clicou')}
    callback={responseFacebook} />
    </div>
  );
}

export default App;

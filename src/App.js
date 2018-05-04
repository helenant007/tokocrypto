import React, { Component } from 'react';
import './App.css';
import Home from './views/Home';
import DefaultNavbar from './component/DefaultNavbar';
import DefaultFooter from './component/DefaultFooter';
import { Container, Row } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <DefaultNavbar />
        <Home />
        <DefaultFooter />
      </div>
    );
  }
}

export default App;

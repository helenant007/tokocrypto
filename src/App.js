import React, { Component } from 'react';
import './App.css';
import Home from './views/Home';
import DefaultNavbar from './component/DefaultNavbar';
import DefaultFooter from './component/DefaultFooter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBalance: 10000000
    };
  }

  componentDidMount() {
    let currentBalance = localStorage.getItem('currentBalance');
    if (!currentBalance) {
      localStorage.setItem('currentBalance', this.state.currentBalance);
    } else {
      this.setState({
        currentBalance: currentBalance
      });
    }
  }

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

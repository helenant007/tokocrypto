import React, { Component } from 'react';
import './App.css';
import Home from './views/Home';
import History from './views/History';
import DefaultNavbar from './component/DefaultNavbar';
import DefaultFooter from './component/DefaultFooter';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBalance: 10000000.0,
      transactionHistory: []
    };
  }

  doTransaction = (action, symbol, amount, price) => {
    if (action == 'buy') {
      price *= -1;
    }
    let total = amount * price;

    let transactionHistory = [
      ...this.state.transactionHistory,
      {
        action,
        symbol,
        amount,
        price,
        total: amount * price
      }
    ];

    let currentBalance = parseFloat(this.state.currentBalance) + total;

    this.setState(
      {
        currentBalance,
        transactionHistory
      },
      () => {
        this.saveToLocalStorage();
      }
    );
  };

  saveToLocalStorage = () => {
    localStorage.setItem('currentBalance', this.state.currentBalance);
    localStorage.setItem(
      'transactionHistory',
      JSON.stringify(this.state.transactionHistory)
    );
  };

  componentDidMount() {
    let currentBalance = localStorage.getItem('currentBalance');
    if (!currentBalance) {
      localStorage.setItem('currentBalance', this.state.currentBalance);
    } else {
      this.setState({
        currentBalance: parseFloat(currentBalance)
      });
    }

    let transactionHistory = localStorage.getItem('transactionHistory');
    if (transactionHistory) {
      this.setState({
        transactionHistory: JSON.parse(transactionHistory)
      });
    }
  }

  render() {
    return (
      <Router>
        <div>
          <DefaultNavbar currentBalance={this.state.currentBalance} />
          <Route
            path="/"
            exact
            render={() => (
              <Home
                doTransaction={this.doTransaction}
                currentBalance={this.state.currentBalance}
              />
            )}
          />
          <Route
            path="/history"
            exact
            render={() => (
              <History transactionHistory={this.state.transactionHistory} />
            )}
          />
          <DefaultFooter />
        </div>
      </Router>
    );
  }
}

export default App;

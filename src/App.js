import React, { Component } from 'react';
import './App.css';
import Home from './views/Home';
import { connect } from 'react-redux';
import History from './views/History';
import DefaultNavbar from './component/DefaultNavbar';
import DefaultFooter from './component/DefaultFooter';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { setCurrentBalance } from './reducers/user';

class App extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    
  }

  // doTransaction = (action, symbol, amount, price) => {
  //   if (action === 'buy') {
  //     price *= -1;
  //   }
  //   let total = amount * price;

  //   let transactionHistory = [
  //     ...this.state.transactionHistory,
  //     {
  //       action,
  //       symbol,
  //       amount,
  //       price,
  //       total: amount * price
  //     }
  //   ];

  //   let currentBalance = parseFloat(this.state.currentBalance) + total;
  //   this.setState(
  //     {
  //       currentBalance,
  //       transactionHistory
  //     },
  //     () => {
  //       this.saveToLocalStorage();
  //     }
  //   );
  // };



  render() {
    return (
      <Router>
        <div>
          <DefaultNavbar currentBalance={this.props.currentBalance} />
          <Route
            path="/"
            exact
            component={Home}
          />
          <Route
            path="/history"
            exact
            component={History}
          />
          <DefaultFooter />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  currentBalance: PropTypes.number.isRequired,
  
  setCurrentBalance: PropTypes.func.isRequired, 
}

const mapStateToProps = state => ({
  currentBalance: state.user.currentBalance,
});
const mapDispatchToProps = dispatch => ({
  setCurrentBalance: currentBalance => dispatch(setCurrentBalance(currentBalance))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);



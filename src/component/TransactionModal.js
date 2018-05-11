import React from "react";
import {
  ModalHeader,
  ModalBody,
  InputGroup,
  InputGroupAddon,
  Input,
  Modal,
  ModalFooter,
  Button,
  Alert
} from "reactstrap";

import {connect} from 'react-redux'
import { setHistory } from "../reducers/user";

function ShowAmount({ amount, price }) {
  if (!amount || amount === 0) {
    return null;
  }
  return (
    <InputGroup>
      <p>
        Total Transaksi:{" "}
        {(amount * price).toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 2
        })}
      </p>
    </InputGroup>
  );
}

class TransactionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "0",
      correctInput: true,
      isAmountValid: true
    };
  }

  handleChange = e => {
    this.setState({
      correctInput: false,
      isAmountValid: true
    });
    if (e.target.value === "") {
      this.setState({ amount: "" });
      return;
    }

    let number = parseFloat(e.target.value);
    if (isNaN(number)) {
      return;
    }
    if (e.target.value < 0) {
      return;
    }
    this.setState({
      amount: number.toString(),
      correctInput: true
    });
  };

  transaction = action => {
    if (+this.state.amount === 0) {
      this.setState({
        isAmountValid: false
      });
      return;
    }
    
    if (action === "sell") {
      let amtSymbol = this.props.transactionHistory.filter(h => h.symbol === this.props.ticker.symbol);

      if (amtSymbol.length > 0) {
        amtSymbol = amtSymbol.map(h => h.action === 'buy' ? h.amount : -h.amount).reduce((sum, v) => sum + v);
      } else {
        amtSymbol = 0;
      }

      if (amtSymbol < this.state.amount) {
        this.setState({
          isAmountValid: false
        });
        return;
      }
    } else {
      if (
        this.props.currentBalance <
        this.state.amount * this.props.ticker.quotes.IDR.price
      ) {
        this.setState({
          isAmountValid: false
        });
        return;
      }
    }

    this.doTransaction(
      action,
      this.props.ticker.symbol,
      parseFloat(this.state.amount),
      this.props.ticker.quotes.IDR.price
    );
    this.props.toggle();
  };

    doTransaction = (action, symbol, amount, price) => {
    if (action === 'buy') {
      price *= -1;
    }
    let total = amount * price;

    let transactionHistory = [
      ...this.props.transactionHistory,
      {
        action,
        symbol,
        amount,
        price,
        total: amount * price
      }
    ];

    let currentBalance = parseFloat(this.props.currentBalance) + total;
    console.log(currentBalance, transactionHistory)
    this.props.setHistory(currentBalance, transactionHistory)
  };

  render() {
    if (!this.props.ticker) {
      return null;
    }

    let alert = this.state.isAmountValid ? (
      " "
    ) : (
      <Alert color="danger">Saldo anda tidak mencukupi transaksi ini</Alert>
    );

    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>
          {this.props.ticker.name}
        </ModalHeader>
        <ModalBody>
          <InputGroup>
            <p>
              Nilai tukar (IDR):{" "}
              {this.props.ticker.quotes.IDR.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 2
              })}
            </p>
          </InputGroup>
          <InputGroup>
            <p>
              Saldo anda saat ini:{" "}
              {parseFloat(this.props.currentBalance).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 2
              })}
            </p>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              {this.props.ticker.symbol}
            </InputGroupAddon>
            <Input
              placeholder="Amount"
              value={this.state.amount}
              type="number"
              step="1"
              onChange={this.handleChange}
            />
          </InputGroup>
          <ShowAmount
            amount={this.state.amount}
            price={this.props.ticker.quotes.IDR.price}
          />
          {alert}
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={this.transaction.bind(this, "buy")}
            disabled={!this.state.correctInput}
          >
            Buy
          </Button>
          <Button
            color="danger"
            onClick={this.transaction.bind(this, "sell")}
            disabled={!this.state.correctInput}
          >
            Sell
          </Button>
          <Button color="secondary" onClick={this.props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  currentBalance: state.user.currentBalance,
  transactionHistory: state.user.transactionHistory
});

const mapDispatchToProps = dispatch => ({
  setHistory: (currentBalance, transactionHistory) => dispatch(setHistory(currentBalance, transactionHistory) ),
  // setCurrentBalance: (currentBalance) => dispatch(setCurrentBalance(currentBalance))
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionModal);

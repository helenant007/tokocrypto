import React from 'react';
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
} from 'reactstrap';

function ShowAmount({ amount, price }) {
  if (!amount || amount === 0) {
    return null;
  }
  return (
    <InputGroup>
      <p>
        Total Transaksi:{' '}
        {(amount * price).toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
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
      amount: '0',
      correctInput: true,
      isAmountValid: true
    };
  }

  handleChange = e => {
    this.setState({
      correctInput: false,
      isAmountValid: true
    });
    if (e.target.value === '') {
      this.setState({ amount: '' });
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
    if (action === 'sell') {
      let amtSymbol = this.props.transactionHistory
        .filter(h => h.symbol === this.props.ticker.symbol)
        .map(h => h.amount)
        .reduce((sum, v) => sum + v);

      if (this.state.amount < amtSymbol) {
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

    this.props.doTransaction(
      action,
      this.props.ticker.symbol,
      parseFloat(this.state.amount),
      this.props.ticker.quotes.IDR.price
    );
    this.props.toggle();
  };

  render() {
    if (!this.props.ticker) {
      return null;
    }

    let alert = this.state.isAmountValid ? (
      ' '
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
              Nilai tukar (IDR):{' '}
              {this.props.ticker.quotes.IDR.price.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 2
              })}
            </p>
          </InputGroup>
          <InputGroup>
            <p>
              Saldo anda saat ini:{' '}
              {parseFloat(this.props.currentBalance).toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
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
            onClick={this.transaction.bind(this, 'buy')}
            disabled={!this.state.correctInput}
          >
            Buy
          </Button>
          <Button
            color="danger"
            onClick={this.transaction.bind(this, 'sell')}
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

export default TransactionModal;

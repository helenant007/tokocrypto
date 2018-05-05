import React from 'react';
import {
  ModalHeader,
  ModalBody,
  InputGroup,
  InputGroupAddon,
  Input,
  Modal,
  ModalFooter,
  Button
} from 'reactstrap';

function ShowAmount({ amount, price }) {
  if (!amount || amount == 0) {
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
      amount: 0
    };
  }

  handleChange = e => {
    if (e.target.value < 0) {
      return;
    }
    this.setState({
      amount: e.target.value
    });
  };

  render() {
    if (!this.props.ticker) {
      return null;
    }

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
              {parseInt(this.props.currentBalance).toLocaleString('id-ID', {
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
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={this.props.toggle}>
            Buy
          </Button>
          <Button color="danger" onClick={this.props.toggle}>
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

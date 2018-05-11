import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { getTicker } from '../services/coinmarketcap';
import ItemRow from '../component/ItemRow';
import TransactionModal from '../component/TransactionModal';
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickers: [],
      sort: {
        column: 'rank',
        direction: 'asc'
      },
      selectedTicker: null,
      modal: {
        isOpen: false
      }
    };
  }

  getSortedTicker = () => {
    let col = this.state.sort.column;
    let direction = this.state.sort.direction;

    const sortedTickers = this.state.tickers.sort((a, b) => {
      if (col === 'rank' || col === 'circulating_supply') {
        if (a[col] < b[col]) {
          return -1;
        } else if (a[col] > b[col]) {
          return 1;
        }
        return 0;
      } else if (col === 'name') {
        const strA = a[col].toLowerCase();
        const strB = b[col].toLowerCase();
        if (strA < strB) {
          return -1;
        } else if (strA > strB) {
          return 1;
        }
        return 0;
      } else if (
        col === 'market_cap' ||
        col === 'volume_24h' ||
        col === 'percent_change_24h' ||
        col === 'price'
      ) {
        if (a.quotes.IDR[col] < b.quotes.IDR[col]) {
          return -1;
        } else if (a.quotes.IDR[col] > b.quotes.IDR[col]) {
          return 1;
        }
        return 0;
      }

      return 0;
    });

    if (direction === 'desc') {
      sortedTickers.reverse();
    }

    return sortedTickers;
  };

  sortTickerBy = col => {
    let direction = 'asc';
    if (col === this.state.sort.column) {
      if (this.state.sort.direction === 'desc') direction = 'asc';
      else direction = 'desc';
    }

    this.setState({
      sort: {
        column: col,
        direction
      }
    });
  };

  sortHandler = e => {
    this.sortTickerBy(e.target.id);
  };

  fetchTickerData = () => {
    getTicker()
      // .then(res => res.json())
      .then(res => Object.keys(res.data).map(o => res.data[o]))
      .then(res => {
        this.setState({
          tickers: res
        });
      });

    setTimeout(() => {
      this.fetchTickerData();
    }, 60000 * 5);
  };

  componentDidMount() {
    this.fetchTickerData();
  }

  getArrow = col => {
    if (this.state.sort.column === col) {
      if (this.state.sort.direction === 'desc') {
        return <span>&#9660;</span>;
      } else {
        return <span>&#9650;</span>;
      }
    }
  };

  toggleModal = () => {
    this.setState({
      modal: {
        isOpen: !this.state.modal.isOpen
      }
    });
  };

  handleItemRow = selectedTicker => {
    this.setState({
      selectedTicker
    });
    this.toggleModal();
  };

  render() {
    if (!this.state.tickers) {
      return 'Loading..';
    }
    return (
      <div>
        <TransactionModal
          isOpen={this.state.modal.isOpen}
          ticker={this.state.selectedTicker}
          toggle={this.toggleModal}
        />
        <Container>
          <Row>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th id="rank" onClick={this.sortHandler}>
                      Rank {this.getArrow('rank')}
                    </th>
                    <th id="name" onClick={this.sortHandler}>
                      Name {this.getArrow('name')}
                    </th>
                    <th id="market_cap" onClick={this.sortHandler}>
                      Market Cap {this.getArrow('market_cap')}
                    </th>
                    <th id="price" onClick={this.sortHandler}>
                      Price (IDR) {this.getArrow('price')}
                    </th>
                    <th id="volume_24h" onClick={this.sortHandler}>
                      Volume (24h) {this.getArrow('volume_24h')}
                    </th>
                    <th id="circulating_supply" onClick={this.sortHandler}>
                      Circulating Supply {this.getArrow('circulating_supply')}
                    </th>
                    <th id="percent_change_24h" onClick={this.sortHandler}>
                      Change (24h) {this.getArrow('percent_change_24h')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.getSortedTicker().map(item => (
                    <ItemRow
                      onClick={this.handleItemRow.bind(this, item)}
                      key={item.id}
                      data={item}
                    />
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
Home.propTypes = {
  transactionHistory: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    })
  )
}

export default Home;

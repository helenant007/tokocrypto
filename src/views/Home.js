import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { getTicker } from '../services/coinmarketcap';
import ItemRow from '../component/ItemRow';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickers: [],
      sort: {
        column: null,
        direction: null
      }
    };
  }

  sortTickerBy = col => {
    let direction = 'asc';
    if (col === this.state.sort.column) {
      if (this.state.sort.direction === 'desc') direction = 'asc';
      else direction = 'desc';
    }

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

    this.setState({
      tickers: sortedTickers,
      sort: {
        column: col,
        direction
      }
    });
  };

  sortHandler = e => {
    this.sortTickerBy(e.target.id);
  };

  componentDidMount() {
    getTicker()
      // .then(res => res.json())
      .then(res => Object.keys(res.data).map(o => res.data[o]))
      .then(res => {
        this.setState(
          {
            tickers: res
          },
          () => {
            this.sortTickerBy('rank');
          }
        );
      });
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

  render() {
    if (!this.state.tickers) {
      return 'Loading..';
    }
    return (
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
                {Object.keys(this.state.tickers).map(itemID => (
                  <ItemRow key={itemID} data={this.state.tickers[itemID]} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

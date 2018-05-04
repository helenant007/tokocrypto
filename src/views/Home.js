import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { getTicker } from '../services/coinmarketcap';
import ItemRow from '../component/ItemRow';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickers: []
    };
  }

  componentDidMount() {
    getTicker()
      .then(res => res.json())
      .then(res => {
        this.setState({
          tickers: res.data
        });
        console.log(res.data);
      });
  }

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
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Market Cap</th>
                  <th>Price (IDR)</th>
                  <th>Volume (24h)</th>
                  <th>Circulating Supply</th>
                  <th>Change (24h)</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(this.state.tickers).map(itemID => (
                  <ItemRow data={this.state.tickers[itemID]} />
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

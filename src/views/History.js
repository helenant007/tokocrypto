import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import HistoryItemRow from '../component/HistoryItemRow';

class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.transactionHistory.length == 0) {
      return (
        <Container>
          <Row>
            <Col>You don't have any transaction</Col>
          </Row>
        </Container>
      );
    }
    return (
      <Container>
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Symbol</th>
                  <th>Amount</th>
                  <th>Price (IDR)</th>
                  <th>Total (IDR)</th>
                </tr>
              </thead>
              <tbody>
                {this.props.transactionHistory.map((item, index) => (
                  <HistoryItemRow
                    key={item.id}
                    no={index + 1}
                    symbol={item.symbol}
                    amount={item.amount}
                    price={item.price}
                    total={item.total}
                  />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default History;

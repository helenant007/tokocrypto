import React from 'react';

const HistoryItemRow = props => {
  return (
    <tr>
      <th scope="row">{props.no}</th>
      <td>{props.symbol}</td>
      <td>{props.amount}</td>
      <td>
        {props.price.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
          maximumFractionDigits: 2
        })}
      </td>
      <td>
        {props.total.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
          maximumFractionDigits: 2
        })}
      </td>
    </tr>
  );
};

export default HistoryItemRow;

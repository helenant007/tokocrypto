import React from 'react';

const ItemRow = props => {
  console.log(props);
  return (
    <tr>
      <th scope="row">{props.data.rank}</th>
      <td>
        <img
          src={
            'https://s2.coinmarketcap.com/static/img/coins/16x16/' +
            props.data.id +
            '.png'
          }
          alt={props.data.name}
          height="16"
          width="16"
        />
        &nbsp;
        <a
          href={
            'https://coinmarketcap.com/currencies/' + props.data.website_slug
          }
        >
          {props.data.name}
        </a>
      </td>
      <td>{props.data.quotes.IDR.market_cap}</td>
      <td>{props.data.quotes.IDR.price}</td>
      <td>{props.data.quotes.IDR.volume_24h}</td>
      <td>
        {props.data.circulating_supply} {props.data.symbol}{' '}
      </td>
      <td>{props.data.quotes.IDR.percent_change_24h} %</td>
    </tr>
  );
};

export default ItemRow;

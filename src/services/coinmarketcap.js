export function getTicker() {
  return fetch(
    `https://api.coinmarketcap.com/v2/ticker/?convert=IDR&limit=100`
  );
}

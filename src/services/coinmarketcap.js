export function getTicker() {
  // return fetch(
  //   `https://api.coinmarketcap.com/v2/ticker/?convert=IDR&limit=100`
  // );

  return new Promise((resolve, reject) => {
    let data = {
      "data": {
          "1": {
              "id": 1, 
              "name": "Bitcoin", 
              "symbol": "BTC", 
              "website_slug": "bitcoin", 
              "rank": 1, 
              "circulating_supply": 17027125.0, 
              "total_supply": 17027125.0, 
              "max_supply": 21000000.0, 
              "quotes": {
                  "USD": {
                      "price": 8920.84, 
                      "volume_24h": 6965870000.0, 
                      "market_cap": 151896257785.0, 
                      "percent_change_1h": -1.06, 
                      "percent_change_24h": -4.46, 
                      "percent_change_7d": -7.75
                  }, 
                  "IDR": {
                      "price": 125121449.4617126, 
                      "volume_24h": 97701533842313.05, 
                      "market_cap": 2130458560165763.0, 
                      "percent_change_1h": -1.06, 
                      "percent_change_24h": -4.46, 
                      "percent_change_7d": -7.75
                  }
              }, 
              "last_updated": 1526021972
          }, 
          "1027": {
              "id": 1027, 
              "name": "Ethereum", 
              "symbol": "ETH", 
              "website_slug": "ethereum", 
              "rank": 2, 
              "circulating_supply": 99363111.0, 
              "total_supply": 99363111.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 722.221, 
                      "volume_24h": 2701340000.0, 
                      "market_cap": 71762125344.0, 
                      "percent_change_1h": -1.95, 
                      "percent_change_24h": -5.17, 
                      "percent_change_7d": -7.92
                  }, 
                  "IDR": {
                      "price": 10129689.396030815, 
                      "volume_24h": 37888312792170.09, 
                      "market_cap": 1006517451210098.0, 
                      "percent_change_1h": -1.95, 
                      "percent_change_24h": -5.17, 
                      "percent_change_7d": -7.92
                  }
              }, 
              "last_updated": 1526021958
          }, 
          "52": {
              "id": 52, 
              "name": "Ripple", 
              "symbol": "XRP", 
              "website_slug": "ripple", 
              "rank": 3, 
              "circulating_supply": 39178259468.0, 
              "total_supply": 99992263539.0, 
              "max_supply": 100000000000.0, 
              "quotes": {
                  "USD": {
                      "price": 0.722771, 
                      "volume_24h": 500487000.0, 
                      "market_cap": 28316909774.0, 
                      "percent_change_1h": -4.77, 
                      "percent_change_24h": -9.91, 
                      "percent_change_7d": -18.54
                  }, 
                  "IDR": {
                      "price": 10137.4035571641, 
                      "volume_24h": 7019704296539.805, 
                      "market_cap": 397165826894400.0, 
                      "percent_change_1h": -4.77, 
                      "percent_change_24h": -9.91, 
                      "percent_change_7d": -18.54
                  }
              }, 
              "last_updated": 1526021942
          }, 
          "1831": {
              "id": 1831, 
              "name": "Bitcoin Cash", 
              "symbol": "BCH", 
              "website_slug": "bitcoin-cash", 
              "rank": 4, 
              "circulating_supply": 17121538.0, 
              "total_supply": 17121538.0, 
              "max_supply": 21000000.0, 
              "quotes": {
                  "USD": {
                      "price": 1468.26, 
                      "volume_24h": 1123420000.0, 
                      "market_cap": 25138868650.0, 
                      "percent_change_1h": -5.49, 
                      "percent_change_24h": -11.15, 
                      "percent_change_7d": -1.28
                  }, 
                  "IDR": {
                      "price": 20593444.0463739, 
                      "volume_24h": 15756805273301.299, 
                      "market_cap": 352591424494142.0, 
                      "percent_change_1h": -5.49, 
                      "percent_change_24h": -11.15, 
                      "percent_change_7d": -1.28
                  }
              }, 
              "last_updated": 1526021954
          }, 
          "1765": {
              "id": 1765, 
              "name": "EOS", 
              "symbol": "EOS", 
              "website_slug": "eos", 
              "rank": 5, 
              "circulating_supply": 848774550.0, 
              "total_supply": 900000000.0, 
              "max_supply": 1000000000.0, 
              "quotes": {
                  "USD": {
                      "price": 16.995, 
                      "volume_24h": 1364770000.0, 
                      "market_cap": 14424923479.0, 
                      "percent_change_1h": -4.29, 
                      "percent_change_24h": -6.05, 
                      "percent_change_7d": -2.22
                  }, 
                  "IDR": {
                      "price": 238367.579017425, 
                      "volume_24h": 19141919436046.547, 
                      "market_cap": 202320334638856.0, 
                      "percent_change_1h": -4.29, 
                      "percent_change_24h": -6.05, 
                      "percent_change_7d": -2.22
                  }
              }, 
              "last_updated": 1526021952
          }, 
          "2": {
              "id": 2, 
              "name": "Litecoin", 
              "symbol": "LTC", 
              "website_slug": "litecoin", 
              "rank": 6, 
              "circulating_supply": 56479388.0, 
              "total_supply": 56479388.0, 
              "max_supply": 84000000.0, 
              "quotes": {
                  "USD": {
                      "price": 145.385, 
                      "volume_24h": 450060000.0, 
                      "market_cap": 8211255774.0, 
                      "percent_change_1h": -2.12, 
                      "percent_change_24h": -8.7, 
                      "percent_change_7d": -9.38
                  }, 
                  "IDR": {
                      "price": 2039133.3024682747, 
                      "volume_24h": 6312427926600.899, 
                      "market_cap": 115169000261908.0, 
                      "percent_change_1h": -2.12, 
                      "percent_change_24h": -8.7, 
                      "percent_change_7d": -9.38
                  }
              }, 
              "last_updated": 1526021941
          }, 
          "2010": {
              "id": 2010, 
              "name": "Cardano", 
              "symbol": "ADA", 
              "website_slug": "cardano", 
              "rank": 7, 
              "circulating_supply": 25927070538.0, 
              "total_supply": 31112483745.0, 
              "max_supply": 45000000000.0, 
              "quotes": {
                  "USD": {
                      "price": 0.274498, 
                      "volume_24h": 163761000.0, 
                      "market_cap": 7116929009.0, 
                      "percent_change_1h": -7.04, 
                      "percent_change_24h": -13.99, 
                      "percent_change_7d": -24.89
                  }, 
                  "IDR": {
                      "price": 3850.0396413725, 
                      "volume_24h": 2296870438803.915, 
                      "market_cap": 99820249355960.0, 
                      "percent_change_1h": -7.04, 
                      "percent_change_24h": -13.99, 
                      "percent_change_7d": -24.89
                  }
              }, 
              "last_updated": 1526021958
          }, 
          "512": {
              "id": 512, 
              "name": "Stellar", 
              "symbol": "XLM", 
              "website_slug": "stellar", 
              "rank": 8, 
              "circulating_supply": 18576215248.0, 
              "total_supply": 103926681379.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.337035, 
                      "volume_24h": 44563800.0, 
                      "market_cap": 6260834706.0, 
                      "percent_change_1h": -4.4, 
                      "percent_change_24h": -10.46, 
                      "percent_change_7d": -22.79
                  }, 
                  "IDR": {
                      "price": 4727.167813718, 
                      "volume_24h": 625040607108.9569, 
                      "market_cap": 87812886821740.0, 
                      "percent_change_1h": -4.4, 
                      "percent_change_24h": -10.46, 
                      "percent_change_7d": -22.79
                  }
              }, 
              "last_updated": 1526021944
          }, 
          "1720": {
              "id": 1720, 
              "name": "IOTA", 
              "symbol": "MIOTA", 
              "website_slug": "iota", 
              "rank": 9, 
              "circulating_supply": 2779530283.0, 
              "total_supply": 2779530283.0, 
              "max_supply": 2779530283.0, 
              "quotes": {
                  "USD": {
                      "price": 2.02761, 
                      "volume_24h": 84673200.0, 
                      "market_cap": 5635803397.0, 
                      "percent_change_1h": -5.21, 
                      "percent_change_24h": -10.98, 
                      "percent_change_7d": -17.96
                  }, 
                  "IDR": {
                      "price": 28438.7459188892, 
                      "volume_24h": 1187604924487.098, 
                      "market_cap": 79046355492095.0, 
                      "percent_change_1h": -5.21, 
                      "percent_change_24h": -10.98, 
                      "percent_change_7d": -17.96
                  }
              }, 
              "last_updated": 1526021952
          }, 
          "1958": {
              "id": 1958, 
              "name": "TRON", 
              "symbol": "TRX", 
              "website_slug": "tron", 
              "rank": 10, 
              "circulating_supply": 65748111645.0, 
              "total_supply": 100000000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.0711474, 
                      "volume_24h": 475564000.0, 
                      "market_cap": 4677807198.0, 
                      "percent_change_1h": -5.87, 
                      "percent_change_24h": -11.75, 
                      "percent_change_7d": -17.2
                  }, 
                  "IDR": {
                      "price": 997.8954687487, 
                      "volume_24h": 6670140591223.46, 
                      "market_cap": 65609742689430.0, 
                      "percent_change_1h": -5.87, 
                      "percent_change_24h": -11.75, 
                      "percent_change_7d": -17.2
                  }
              }, 
              "last_updated": 1526021955
          }, 
          "1376": {
              "id": 1376, 
              "name": "NEO", 
              "symbol": "NEO", 
              "website_slug": "neo", 
              "rank": 11, 
              "circulating_supply": 65000000.0, 
              "total_supply": 100000000.0, 
              "max_supply": 100000000.0, 
              "quotes": {
                  "USD": {
                      "price": 66.5918, 
                      "volume_24h": 135639000.0, 
                      "market_cap": 4328467000.0, 
                      "percent_change_1h": -5.16, 
                      "percent_change_24h": -12.34, 
                      "percent_change_7d": -22.75
                  }, 
                  "IDR": {
                      "price": 933999.773369377, 
                      "volume_24h": 1902438367187.085, 
                      "market_cap": 60709985269010.0, 
                      "percent_change_1h": -5.16, 
                      "percent_change_24h": -12.34, 
                      "percent_change_7d": -22.75
                  }
              }, 
              "last_updated": 1526021954
          }, 
          "328": {
              "id": 328, 
              "name": "Monero", 
              "symbol": "XMR", 
              "website_slug": "monero", 
              "rank": 12, 
              "circulating_supply": 16019035.0, 
              "total_supply": 16019035.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 212.074, 
                      "volume_24h": 37344300.0, 
                      "market_cap": 3397220749.0, 
                      "percent_change_1h": -1.98, 
                      "percent_change_24h": -7.71, 
                      "percent_change_7d": -13.15
                  }, 
                  "IDR": {
                      "price": 2974496.37849611, 
                      "volume_24h": 523781722924.4145, 
                      "market_cap": 47648560474893.0, 
                      "percent_change_1h": -1.98, 
                      "percent_change_24h": -7.71, 
                      "percent_change_7d": -13.15
                  }
              }, 
              "last_updated": 1526021943
          }, 
          "131": {
              "id": 131, 
              "name": "Dash", 
              "symbol": "DASH", 
              "website_slug": "dash", 
              "rank": 13, 
              "circulating_supply": 8064259.0, 
              "total_supply": 8064259.0, 
              "max_supply": 18900000.0, 
              "quotes": {
                  "USD": {
                      "price": 421.075, 
                      "volume_24h": 99306600.0, 
                      "market_cap": 3395657711.0, 
                      "percent_change_1h": 0.45, 
                      "percent_change_24h": -6.6, 
                      "percent_change_7d": -14.81
                  }, 
                  "IDR": {
                      "price": 5905891.634878624, 
                      "volume_24h": 1392849298173.0989, 
                      "market_cap": 47626637696532.0, 
                      "percent_change_1h": 0.45, 
                      "percent_change_24h": -6.6, 
                      "percent_change_7d": -14.81
                  }
              }, 
              "last_updated": 1526021942
          }, 
          "873": {
              "id": 873, 
              "name": "NEM", 
              "symbol": "XEM", 
              "website_slug": "nem", 
              "rank": 14, 
              "circulating_supply": 8999999999.0, 
              "total_supply": 8999999999.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.338613, 
                      "volume_24h": 19388500.0, 
                      "market_cap": 3047517000.0, 
                      "percent_change_1h": -3.86, 
                      "percent_change_24h": -10.4, 
                      "percent_change_7d": -21.55
                  }, 
                  "IDR": {
                      "price": 4749.3004432967, 
                      "volume_24h": 271938205694.57748, 
                      "market_cap": 42743703984921.0, 
                      "percent_change_1h": -3.86, 
                      "percent_change_24h": -10.4, 
                      "percent_change_7d": -21.55
                  }
              }, 
              "last_updated": 1526021945
          }, 
          "1904": {
              "id": 1904, 
              "name": "VeChain", 
              "symbol": "VEN", 
              "website_slug": "vechain", 
              "rank": 15, 
              "circulating_supply": 525899148.0, 
              "total_supply": 873378637.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 4.85807, 
                      "volume_24h": 131954000.0, 
                      "market_cap": 2554854872.0, 
                      "percent_change_1h": -3.55, 
                      "percent_change_24h": -5.66, 
                      "percent_change_7d": -5.17
                  }, 
                  "IDR": {
                      "price": 68138.063230196, 
                      "volume_24h": 1850753487594.3098, 
                      "market_cap": 35833749378459.0, 
                      "percent_change_1h": -3.55, 
                      "percent_change_24h": -5.66, 
                      "percent_change_7d": -5.17
                  }
              }, 
              "last_updated": 1526021954
          }, 
          "825": {
              "id": 825, 
              "name": "Tether", 
              "symbol": "USDT", 
              "website_slug": "tether", 
              "rank": 16, 
              "circulating_supply": 2107140814.0, 
              "total_supply": 2580109970.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 1.00691, 
                      "volume_24h": 3542400000.0, 
                      "market_cap": 2121701157.0, 
                      "percent_change_1h": 0.67, 
                      "percent_change_24h": 0.71, 
                      "percent_change_7d": 0.95
                  }, 
                  "IDR": {
                      "price": 14122.6654303286, 
                      "volume_24h": 49684807997136.0, 
                      "market_cap": 29758444723933.0, 
                      "percent_change_1h": 0.67, 
                      "percent_change_24h": 0.71, 
                      "percent_change_7d": 0.95
                  }
              }, 
              "last_updated": 1526021947
          }, 
          "372": {
              "id": 372, 
              "name": "Bytecoin", 
              "symbol": "BCN", 
              "website_slug": "bytecoin-bcn", 
              "rank": 17, 
              "circulating_supply": 183883751627.0, 
              "total_supply": 183883751627.0, 
              "max_supply": 184470000000.0, 
              "quotes": {
                  "USD": {
                      "price": 0.0114568, 
                      "volume_24h": 118822000.0, 
                      "market_cap": 2106719366.0, 
                      "percent_change_1h": -3.73, 
                      "percent_change_24h": null, 
                      "percent_change_7d": 62.26
                  }, 
                  "IDR": {
                      "price": 160.6901841299, 
                      "volume_24h": 1666567371227.3298, 
                      "market_cap": 29548313907415.0, 
                      "percent_change_1h": -3.73, 
                      "percent_change_24h": null, 
                      "percent_change_7d": 62.26
                  }
              }, 
              "last_updated": 1526021949
          }, 
          "1321": {
              "id": 1321, 
              "name": "Ethereum Classic", 
              "symbol": "ETC", 
              "website_slug": "ethereum-classic", 
              "rank": 18, 
              "circulating_supply": 101628445.0, 
              "total_supply": 101628445.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 18.6355, 
                      "volume_24h": 248584000.0, 
                      "market_cap": 1893896887.0, 
                      "percent_change_1h": -5.71, 
                      "percent_change_24h": -13.23, 
                      "percent_change_7d": -16.69
                  }, 
                  "IDR": {
                      "price": 261376.8178157825, 
                      "volume_24h": 3486576420268.76, 
                      "market_cap": 26563319553666.0, 
                      "percent_change_1h": -5.71, 
                      "percent_change_24h": -13.23, 
                      "percent_change_7d": -16.69
                  }
              }, 
              "last_updated": 1526021949
          }, 
          "1839": {
              "id": 1839, 
              "name": "Binance Coin", 
              "symbol": "BNB", 
              "website_slug": "binance-coin", 
              "rank": 19, 
              "circulating_supply": 114041290.0, 
              "total_supply": 194972068.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 13.5833, 
                      "volume_24h": 55115200.0, 
                      "market_cap": 1549057056.0, 
                      "percent_change_1h": -2.73, 
                      "percent_change_24h": -5.43, 
                      "percent_change_7d": -5.98
                  }, 
                  "IDR": {
                      "price": 190515.9362204995, 
                      "volume_24h": 773031879438.7279, 
                      "market_cap": 21726683153005.0, 
                      "percent_change_1h": -2.73, 
                      "percent_change_24h": -5.43, 
                      "percent_change_7d": -5.98
                  }
              }, 
              "last_updated": 1526021957
          }, 
          "1684": {
              "id": 1684, 
              "name": "Qtum", 
              "symbol": "QTUM", 
              "website_slug": "qtum", 
              "rank": 20, 
              "circulating_supply": 88586476.0, 
              "total_supply": 100586476.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 17.4029, 
                      "volume_24h": 168435000.0, 
                      "market_cap": 1541661583.0, 
                      "percent_change_1h": -6.37, 
                      "percent_change_24h": -12.87, 
                      "percent_change_7d": -24.03
                  }, 
                  "IDR": {
                      "price": 244088.6814287935, 
                      "volume_24h": 2362426782689.025, 
                      "market_cap": 21622956119263.0, 
                      "percent_change_1h": -6.37, 
                      "percent_change_24h": -12.87, 
                      "percent_change_7d": -24.03
                  }
              }, 
              "last_updated": 1526021952
          }, 
          "1808": {
              "id": 1808, 
              "name": "OmiseGO", 
              "symbol": "OMG", 
              "website_slug": "omisego", 
              "rank": 21, 
              "circulating_supply": 102042552.0, 
              "total_supply": 140245398.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 14.7711, 
                      "volume_24h": 46469700.0, 
                      "market_cap": 1507280736.0, 
                      "percent_change_1h": -2.48, 
                      "percent_change_24h": -8.22, 
                      "percent_change_7d": -17.5
                  }, 
                  "IDR": {
                      "price": 207175.7191188165, 
                      "volume_24h": 651772279297.7954, 
                      "market_cap": 21140739042252.0, 
                      "percent_change_1h": -2.48, 
                      "percent_change_24h": -8.22, 
                      "percent_change_7d": -17.5
                  }
              }, 
              "last_updated": 1526021953
          }, 
          "2099": {
              "id": 2099, 
              "name": "ICON", 
              "symbol": "ICX", 
              "website_slug": "icon", 
              "rank": 22, 
              "circulating_supply": 387231348.0, 
              "total_supply": 400228740.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 3.77874, 
                      "volume_24h": 36437900.0, 
                      "market_cap": 1463246586.0, 
                      "percent_change_1h": -5.04, 
                      "percent_change_24h": -10.92, 
                      "percent_change_7d": -13.14
                  }, 
                  "IDR": {
                      "price": 52999.6531648311, 
                      "volume_24h": 511068785376.8185, 
                      "market_cap": 20523127162787.0, 
                      "percent_change_1h": -5.04, 
                      "percent_change_24h": -10.92, 
                      "percent_change_7d": -13.14
                  }
              }, 
              "last_updated": 1526021958
          }, 
          "2469": {
              "id": 2469, 
              "name": "Zilliqa", 
              "symbol": "ZIL", 
              "website_slug": "zilliqa", 
              "rank": 23, 
              "circulating_supply": 7286961952.0, 
              "total_supply": 12600000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.169894, 
                      "volume_24h": 352714000.0, 
                      "market_cap": 1238011114.0, 
                      "percent_change_1h": -7.49, 
                      "percent_change_24h": -13.11, 
                      "percent_change_7d": 26.76
                  }, 
                  "IDR": {
                      "price": 2382.8903483134, 
                      "volume_24h": 4947077509005.71, 
                      "market_cap": 17364031304520.0, 
                      "percent_change_1h": -7.49, 
                      "percent_change_24h": -13.11, 
                      "percent_change_7d": 26.76
                  }
              }, 
              "last_updated": 1526021962
          }, 
          "1214": {
              "id": 1214, 
              "name": "Lisk", 
              "symbol": "LSK", 
              "website_slug": "lisk", 
              "rank": 24, 
              "circulating_supply": 105766567.0, 
              "total_supply": 121016404.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 10.7334, 
                      "volume_24h": 24844500.0, 
                      "market_cap": 1135234874.0, 
                      "percent_change_1h": -2.68, 
                      "percent_change_24h": -8.96, 
                      "percent_change_7d": -24.75
                  }, 
                  "IDR": {
                      "price": 150543.958377501, 
                      "volume_24h": 348462684136.4175, 
                      "market_cap": 15922517707349.0, 
                      "percent_change_1h": -2.68, 
                      "percent_change_24h": -8.96, 
                      "percent_change_7d": -24.75
                  }
              }, 
              "last_updated": 1526021948
          }, 
          "2083": {
              "id": 2083, 
              "name": "Bitcoin Gold", 
              "symbol": "BTG", 
              "website_slug": "bitcoin-gold", 
              "rank": 25, 
              "circulating_supply": 16997086.0, 
              "total_supply": 17097086.0, 
              "max_supply": 21000000.0, 
              "quotes": {
                  "USD": {
                      "price": 62.7151, 
                      "volume_24h": 25905900.0, 
                      "market_cap": 1065973954.0, 
                      "percent_change_1h": -3.98, 
                      "percent_change_24h": -9.5, 
                      "percent_change_7d": -17.42
                  }, 
                  "IDR": {
                      "price": 879626.1579779765, 
                      "volume_24h": 363349612548.8385, 
                      "market_cap": 14951081533283.0, 
                      "percent_change_1h": -3.98, 
                      "percent_change_24h": -9.5, 
                      "percent_change_7d": -17.42
                  }
              }, 
              "last_updated": 1526021957
          }, 
          "1700": {
              "id": 1700, 
              "name": "Aeternity", 
              "symbol": "AE", 
              "website_slug": "aeternity", 
              "rank": 26, 
              "circulating_supply": 233020472.0, 
              "total_supply": 273685830.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 4.28978, 
                      "volume_24h": 32858900.0, 
                      "market_cap": 999606561.0, 
                      "percent_change_1h": -2.95, 
                      "percent_change_24h": -11.28, 
                      "percent_change_7d": -6.88
                  }, 
                  "IDR": {
                      "price": 60167.3711748967, 
                      "volume_24h": 460870635020.6335, 
                      "market_cap": 14020229237033.0, 
                      "percent_change_1h": -2.95, 
                      "percent_change_24h": -11.28, 
                      "percent_change_7d": -6.88
                  }
              }, 
              "last_updated": 1526021953
          }, 
          "1437": {
              "id": 1437, 
              "name": "Zcash", 
              "symbol": "ZEC", 
              "website_slug": "zcash", 
              "rank": 27, 
              "circulating_supply": 3890844.0, 
              "total_supply": 3890844.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 255.991, 
                      "volume_24h": 54542500.0, 
                      "market_cap": 996020982.0, 
                      "percent_change_1h": -1.47, 
                      "percent_change_24h": -7.54, 
                      "percent_change_7d": -15.44
                  }, 
                  "IDR": {
                      "price": 3590465.1321123648, 
                      "volume_24h": 764999333836.8875, 
                      "market_cap": 13969938818872.0, 
                      "percent_change_1h": -1.47, 
                      "percent_change_24h": -7.54, 
                      "percent_change_7d": -15.44
                  }
              }, 
              "last_updated": 1526021950
          }, 
          "693": {
              "id": 693, 
              "name": "Verge", 
              "symbol": "XVG", 
              "website_slug": "verge", 
              "rank": 28, 
              "circulating_supply": 14979597145.0, 
              "total_supply": 14979597145.0, 
              "max_supply": 16555000000.0, 
              "quotes": {
                  "USD": {
                      "price": 0.0644999, 
                      "volume_24h": 51173800.0, 
                      "market_cap": 966182518.0, 
                      "percent_change_1h": -6.41, 
                      "percent_change_24h": -14.3, 
                      "percent_change_7d": -19.1
                  }, 
                  "IDR": {
                      "price": 904.6593121427, 
                      "volume_24h": 717750798183.1069, 
                      "market_cap": 13551432049500.0, 
                      "percent_change_1h": -6.41, 
                      "percent_change_24h": -14.3, 
                      "percent_change_7d": -19.1
                  }
              }, 
              "last_updated": 1526021945
          }, 
          "1896": {
              "id": 1896, 
              "name": "0x", 
              "symbol": "ZRX", 
              "website_slug": "0x", 
              "rank": 29, 
              "circulating_supply": 528071893.0, 
              "total_supply": 1000000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 1.81206, 
                      "volume_24h": 90373400.0, 
                      "market_cap": 956897955.0, 
                      "percent_change_1h": -5.78, 
                      "percent_change_24h": 2.21, 
                      "percent_change_7d": 17.4
                  }, 
                  "IDR": {
                      "price": 25415.4960420309, 
                      "volume_24h": 1267554490472.1008, 
                      "market_cap": 13421209108301.0, 
                      "percent_change_1h": -5.78, 
                      "percent_change_24h": 2.21, 
                      "percent_change_7d": 17.4
                  }
              }, 
              "last_updated": 1526021955
          }, 
          "1567": {
              "id": 1567, 
              "name": "Nano", 
              "symbol": "NANO", 
              "website_slug": "nano", 
              "rank": 30, 
              "circulating_supply": 133248289.0, 
              "total_supply": 133248289.0, 
              "max_supply": 133248290.0, 
              "quotes": {
                  "USD": {
                      "price": 6.89335, 
                      "volume_24h": 22566600.0, 
                      "market_cap": 918527094.0, 
                      "percent_change_1h": -3.18, 
                      "percent_change_24h": -10.03, 
                      "percent_change_7d": -30.63
                  }, 
                  "IDR": {
                      "price": 96684.3866325252, 
                      "volume_24h": 316513433871.99896, 
                      "market_cap": 12883029111472.0, 
                      "percent_change_1h": -3.18, 
                      "percent_change_24h": -10.03, 
                      "percent_change_7d": -30.63
                  }
              }, 
              "last_updated": 1526021952
          }, 
          "2566": {
              "id": 2566, 
              "name": "Ontology", 
              "symbol": "ONT", 
              "website_slug": "ontology", 
              "rank": 31, 
              "circulating_supply": 113627171.0, 
              "total_supply": 1000000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 7.85813, 
                      "volume_24h": 74442800.0, 
                      "market_cap": 892897080.0, 
                      "percent_change_1h": -4.18, 
                      "percent_change_24h": -10.76, 
                      "percent_change_7d": -21.01
                  }, 
                  "IDR": {
                      "price": 110216.1473200469, 
                      "volume_24h": 1044115917109.642, 
                      "market_cap": 12523549006703.0, 
                      "percent_change_1h": -4.18, 
                      "percent_change_24h": -10.76, 
                      "percent_change_7d": -21.01
                  }
              }, 
              "last_updated": 1526021963
          }, 
          "1866": {
              "id": 1866, 
              "name": "Bytom", 
              "symbol": "BTM", 
              "website_slug": "bytom", 
              "rank": 32, 
              "circulating_supply": 987000000.0, 
              "total_supply": 1407000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.75304, 
                      "volume_24h": 78926900.0, 
                      "market_cap": 743250480.0, 
                      "percent_change_1h": -1.96, 
                      "percent_change_24h": -2.83, 
                      "percent_change_7d": -18.31
                  }, 
                  "IDR": {
                      "price": 10561.9489086956, 
                      "volume_24h": 1107008771541.6533, 
                      "market_cap": 10424643572883.0, 
                      "percent_change_1h": -1.96, 
                      "percent_change_24h": -2.83, 
                      "percent_change_7d": -18.31
                  }
              }, 
              "last_updated": 1526021953
          }, 
          "2606": {
              "id": 2606, 
              "name": "Wanchain", 
              "symbol": "WAN", 
              "website_slug": "wanchain", 
              "rank": 33, 
              "circulating_supply": 106152493.0, 
              "total_supply": 210000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 6.96928, 
                      "volume_24h": 19842700.0, 
                      "market_cap": 739806444.0, 
                      "percent_change_1h": -4.34, 
                      "percent_change_24h": -12.44, 
                      "percent_change_7d": -25.02
                  }, 
                  "IDR": {
                      "price": 97749.3616413392, 
                      "volume_24h": 278308700215.8905, 
                      "market_cap": 10376338391806.0, 
                      "percent_change_1h": -4.34, 
                      "percent_change_24h": -12.44, 
                      "percent_change_7d": -25.02
                  }
              }, 
              "last_updated": 1526021964
          }, 
          "1230": {
              "id": 1230, 
              "name": "Steem", 
              "symbol": "STEEM", 
              "website_slug": "steem", 
              "rank": 34, 
              "circulating_supply": 255090116.0, 
              "total_supply": 272064210.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 2.87812, 
                      "volume_24h": 8392920.0, 
                      "market_cap": 734179966.0, 
                      "percent_change_1h": -8.44, 
                      "percent_change_24h": -15.71, 
                      "percent_change_7d": -27.36
                  }, 
                  "IDR": {
                      "price": 40367.7844378718, 
                      "volume_24h": 117716976833.5938, 
                      "market_cap": 10297422827474.0, 
                      "percent_change_1h": -8.44, 
                      "percent_change_24h": -15.71, 
                      "percent_change_7d": -27.36
                  }
              }, 
              "last_updated": 1526021947
          }, 
          "1042": {
              "id": 1042, 
              "name": "Siacoin", 
              "symbol": "SC", 
              "website_slug": "siacoin", 
              "rank": 35, 
              "circulating_supply": 34348937919.0, 
              "total_supply": 34348937919.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.0206005, 
                      "volume_24h": 33328100.0, 
                      "market_cap": 707605296.0, 
                      "percent_change_1h": -10.35, 
                      "percent_change_24h": -18.89, 
                      "percent_change_7d": -27.19
                  }, 
                  "IDR": {
                      "price": 288.9374116828, 
                      "volume_24h": 467451515754.67145, 
                      "market_cap": 9924693216368.0, 
                      "percent_change_1h": -10.35, 
                      "percent_change_24h": -18.89, 
                      "percent_change_7d": -27.19
                  }
              }, 
              "last_updated": 1526021946
          }, 
          "463": {
              "id": 463, 
              "name": "BitShares", 
              "symbol": "BTS", 
              "website_slug": "bitshares", 
              "rank": 36, 
              "circulating_supply": 2623410000.0, 
              "total_supply": 2623410000.0, 
              "max_supply": 3600570502.0, 
              "quotes": {
                  "USD": {
                      "price": 0.267176, 
                      "volume_24h": 48650700.0, 
                      "market_cap": 700912190.0, 
                      "percent_change_1h": -2.53, 
                      "percent_change_24h": -12.08, 
                      "percent_change_7d": -24.7
                  }, 
                  "IDR": {
                      "price": 3747.3431180676, 
                      "volume_24h": 682362434628.0105, 
                      "market_cap": 9830817409370.0, 
                      "percent_change_1h": -2.53, 
                      "percent_change_24h": -12.08, 
                      "percent_change_7d": -24.7
                  }
              }, 
              "last_updated": 1526021944
          }, 
          "2222": {
              "id": 2222, 
              "name": "Bitcoin Diamond", 
              "symbol": "BCD", 
              "website_slug": "bitcoin-diamond", 
              "rank": 37, 
              "circulating_supply": 153561625.0, 
              "total_supply": 156561625.0, 
              "max_supply": 210000000.0, 
              "quotes": {
                  "USD": {
                      "price": 4.29307, 
                      "volume_24h": 4339030.0, 
                      "market_cap": 659250805.0, 
                      "percent_change_1h": -2.76, 
                      "percent_change_24h": -9.63, 
                      "percent_change_7d": -23.54
                  }, 
                  "IDR": {
                      "price": 60213.5158842211, 
                      "volume_24h": 60858139240.010445, 
                      "market_cap": 9246485346144.0, 
                      "percent_change_1h": -2.76, 
                      "percent_change_24h": -9.63, 
                      "percent_change_7d": -23.54
                  }
              }, 
              "last_updated": 1526021959
          }, 
          "1518": {
              "id": 1518, 
              "name": "Maker", 
              "symbol": "MKR", 
              "website_slug": "maker", 
              "rank": 38, 
              "circulating_supply": 618228.0, 
              "total_supply": 1000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 1038.49, 
                      "volume_24h": 2137230.0, 
                      "market_cap": 642023357.0, 
                      "percent_change_1h": -0.97, 
                      "percent_change_24h": 1.48, 
                      "percent_change_7d": -9.53
                  }, 
                  "IDR": {
                      "price": 14565598.536852349, 
                      "volume_24h": 29976248361.483448, 
                      "market_cap": 9004857503695.0, 
                      "percent_change_1h": -0.97, 
                      "percent_change_24h": 1.48, 
                      "percent_change_7d": -9.53
                  }
              }, 
              "last_updated": 1526021949
          }, 
          "1789": {
              "id": 1789, 
              "name": "Populous", 
              "symbol": "PPT", 
              "website_slug": "populous", 
              "rank": 39, 
              "circulating_supply": 37004027.0, 
              "total_supply": 53252246.0, 
              "max_supply": 53252246.0, 
              "quotes": {
                  "USD": {
                      "price": 16.9198, 
                      "volume_24h": 11311700.0, 
                      "market_cap": 626100734.0, 
                      "percent_change_1h": -2.7, 
                      "percent_change_24h": -12.37, 
                      "percent_change_7d": -24.62
                  }, 
                  "IDR": {
                      "price": 237312.842804297, 
                      "volume_24h": 158655048165.42548, 
                      "market_cap": 8781530817514.0, 
                      "percent_change_1h": -2.7, 
                      "percent_change_24h": -12.37, 
                      "percent_change_7d": -24.62
                  }
              }, 
              "last_updated": 1526021952
          }, 
          "1274": {
              "id": 1274, 
              "name": "Waves", 
              "symbol": "WAVES", 
              "website_slug": "waves", 
              "rank": 40, 
              "circulating_supply": 100000000.0, 
              "total_supply": 100000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 6.2418, 
                      "volume_24h": 31628600.0, 
                      "market_cap": 624180000.0, 
                      "percent_change_1h": -2.71, 
                      "percent_change_24h": -5.99, 
                      "percent_change_7d": -18.91
                  }, 
                  "IDR": {
                      "price": 87545.910839127, 
                      "volume_24h": 443614757852.92896, 
                      "market_cap": 8754591083913.0, 
                      "percent_change_1h": -2.71, 
                      "percent_change_24h": -5.99, 
                      "percent_change_7d": -18.91
                  }
              }, 
              "last_updated": 1526021948
          }, 
          "2021": {
              "id": 2021, 
              "name": "RChain", 
              "symbol": "RHOC", 
              "website_slug": "rchain", 
              "rank": 41, 
              "circulating_supply": 360113595.0, 
              "total_supply": 870663574.0, 
              "max_supply": 1000000000.0, 
              "quotes": {
                  "USD": {
                      "price": 1.69854, 
                      "volume_24h": 755666.0, 
                      "market_cap": 611667346.0, 
                      "percent_change_1h": -0.8, 
                      "percent_change_24h": -6.85, 
                      "percent_change_7d": -11.12
                  }, 
                  "IDR": {
                      "price": 23823.2931841281, 
                      "volume_24h": 10598780521.669989, 
                      "market_cap": 8579091757040.0, 
                      "percent_change_1h": -0.8, 
                      "percent_change_24h": -6.85, 
                      "percent_change_7d": -11.12
                  }
              }, 
              "last_updated": 1526021956
          }, 
          "1168": {
              "id": 1168, 
              "name": "Decred", 
              "symbol": "DCR", 
              "website_slug": "decred", 
              "rank": 42, 
              "circulating_supply": 7145743.0, 
              "total_supply": 7565743.0, 
              "max_supply": 21000000.0, 
              "quotes": {
                  "USD": {
                      "price": 85.1732, 
                      "volume_24h": 4370110.0, 
                      "market_cap": 608625790.0, 
                      "percent_change_1h": -1.09, 
                      "percent_change_24h": -0.35, 
                      "percent_change_7d": -5.16
                  }, 
                  "IDR": {
                      "price": 1194617.7982445979, 
                      "volume_24h": 61294059472.77665, 
                      "market_cap": 8536431662948.0, 
                      "percent_change_1h": -1.09, 
                      "percent_change_24h": -0.35, 
                      "percent_change_7d": -5.16
                  }
              }, 
              "last_updated": 1526021947
          }, 
          "1343": {
              "id": 1343, 
              "name": "Stratis", 
              "symbol": "STRAT", 
              "website_slug": "stratis", 
              "rank": 43, 
              "circulating_supply": 98850837.0, 
              "total_supply": 98850837.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 6.09218, 
                      "volume_24h": 11748400.0, 
                      "market_cap": 602217093.0, 
                      "percent_change_1h": -6.03, 
                      "percent_change_24h": -13.43, 
                      "percent_change_7d": -19.03
                  }, 
                  "IDR": {
                      "price": 85447.3784959327, 
                      "volume_24h": 164780092105.22598, 
                      "market_cap": 8446544901122.0, 
                      "percent_change_1h": -6.03, 
                      "percent_change_24h": -13.43, 
                      "percent_change_7d": -19.03
                  }
              }, 
              "last_updated": 1526021948
          }, 
          "2575": {
              "id": 2575, 
              "name": "Bitcoin Private", 
              "symbol": "BTCP", 
              "website_slug": "bitcoin-private", 
              "rank": 44, 
              "circulating_supply": 20429865.0, 
              "total_supply": 20429865.0, 
              "max_supply": 21000000.0, 
              "quotes": {
                  "USD": {
                      "price": 27.5156, 
                      "volume_24h": 801864.0, 
                      "market_cap": 562140003.0, 
                      "percent_change_1h": -0.26, 
                      "percent_change_24h": -9.0, 
                      "percent_change_7d": -32.25
                  }, 
                  "IDR": {
                      "price": 385926.858323734, 
                      "volume_24h": 11246742005.36796, 
                      "market_cap": 7884433750458.0, 
                      "percent_change_1h": -0.26, 
                      "percent_change_24h": -9.0, 
                      "percent_change_7d": -32.25
                  }
              }, 
              "last_updated": 1526021964
          }, 
          "2405": {
              "id": 2405, 
              "name": "IOStoken", 
              "symbol": "IOST", 
              "website_slug": "iostoken", 
              "rank": 45, 
              "circulating_supply": 8400000000.0, 
              "total_supply": 21000000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.0665111, 
                      "volume_24h": 114467000.0, 
                      "market_cap": 558693240.0, 
                      "percent_change_1h": -5.61, 
                      "percent_change_24h": -11.76, 
                      "percent_change_7d": -1.67
                  }, 
                  "IDR": {
                      "price": 932.8678955449, 
                      "volume_24h": 1605485240799.505, 
                      "market_cap": 7836090322577.0, 
                      "percent_change_1h": -5.61, 
                      "percent_change_24h": -11.76, 
                      "percent_change_7d": -1.67
                  }
              }, 
              "last_updated": 1526021962
          }, 
          "74": {
              "id": 74, 
              "name": "Dogecoin", 
              "symbol": "DOGE", 
              "website_slug": "dogecoin", 
              "rank": 46, 
              "circulating_supply": 114390048150.0, 
              "total_supply": 114390048150.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.00462144, 
                      "volume_24h": 31422300.0, 
                      "market_cap": 528646744.0, 
                      "percent_change_1h": 1.35, 
                      "percent_change_24h": -6.82, 
                      "percent_change_7d": -14.93
                  }, 
                  "IDR": {
                      "price": 64.8191505957, 
                      "volume_24h": 440721246140.5845, 
                      "market_cap": 7414665757702.0, 
                      "percent_change_1h": 1.35, 
                      "percent_change_24h": -6.82, 
                      "percent_change_7d": -14.93
                  }
              }, 
              "last_updated": 1526021942
          }, 
          "1104": {
              "id": 1104, 
              "name": "Augur", 
              "symbol": "REP", 
              "website_slug": "augur", 
              "rank": 47, 
              "circulating_supply": 11000000.0, 
              "total_supply": 11000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 47.1495, 
                      "volume_24h": 12678200.0, 
                      "market_cap": 518644500.0, 
                      "percent_change_1h": -0.5, 
                      "percent_change_24h": -3.93, 
                      "percent_change_7d": 6.09
                  }, 
                  "IDR": {
                      "price": 661306.9824584925, 
                      "volume_24h": 177821232144.67297, 
                      "market_cap": 7274376807043.0, 
                      "percent_change_1h": -0.5, 
                      "percent_change_24h": -3.93, 
                      "percent_change_7d": 6.09
                  }
              }, 
              "last_updated": 1526021946
          }, 
          "1455": {
              "id": 1455, 
              "name": "Golem", 
              "symbol": "GNT", 
              "website_slug": "golem-network-tokens", 
              "rank": 48, 
              "circulating_supply": 834262000.0, 
              "total_supply": 1000000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.620794, 
                      "volume_24h": 25461800.0, 
                      "market_cap": 517904844.0, 
                      "percent_change_1h": -6.55, 
                      "percent_change_24h": -9.89, 
                      "percent_change_7d": -25.04
                  }, 
                  "IDR": {
                      "price": 8707.0999028269, 
                      "volume_24h": 357120778077.427, 
                      "market_cap": 7264002579132.0, 
                      "percent_change_1h": -6.55, 
                      "percent_change_24h": -9.89, 
                      "percent_change_7d": -25.04
                  }
              }, 
              "last_updated": 1526021949
          }, 
          "1759": {
              "id": 1759, 
              "name": "Status", 
              "symbol": "SNT", 
              "website_slug": "status", 
              "rank": 49, 
              "circulating_supply": 3470483788.0, 
              "total_supply": 6804870174.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.135573, 
                      "volume_24h": 40244300.0, 
                      "market_cap": 470503899.0, 
                      "percent_change_1h": -5.57, 
                      "percent_change_24h": -13.24, 
                      "percent_change_7d": -20.43
                  }, 
                  "IDR": {
                      "price": 1901.5126678511, 
                      "volume_24h": 564456390717.9144, 
                      "market_cap": 6599168886454.0, 
                      "percent_change_1h": -5.57, 
                      "percent_change_24h": -13.24, 
                      "percent_change_7d": -20.43
                  }
              }, 
              "last_updated": 1526021957
          }, 
          "1229": {
              "id": 1229, 
              "name": "DigixDAO", 
              "symbol": "DGD", 
              "website_slug": "digixdao", 
              "rank": 50, 
              "circulating_supply": 2000000.0, 
              "total_supply": 2000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 230.011, 
                      "volume_24h": 7987890.0, 
                      "market_cap": 460022000.0, 
                      "percent_change_1h": 2.73, 
                      "percent_change_24h": 0.14, 
                      "percent_change_7d": -15.31
                  }, 
                  "IDR": {
                      "price": 3226076.2116726646, 
                      "volume_24h": 112036128317.59334, 
                      "market_cap": 6452152423345.0, 
                      "percent_change_1h": 2.73, 
                      "percent_change_24h": 0.14, 
                      "percent_change_7d": -15.31
                  }
              }, 
              "last_updated": 1526021947
          }, 
          "1903": {
              "id": 1903, 
              "name": "Hshare", 
              "symbol": "HSR", 
              "website_slug": "hshare", 
              "rank": 51, 
              "circulating_supply": 42969714.0, 
              "total_supply": 42969714.0, 
              "max_supply": 84000000.0, 
              "quotes": {
                  "USD": {
                      "price": 10.5874, 
                      "volume_24h": 56368800.0, 
                      "market_cap": 454937554.0, 
                      "percent_change_1h": -2.31, 
                      "percent_change_24h": -8.52, 
                      "percent_change_7d": -21.91
                  }, 
                  "IDR": {
                      "price": 148496.199240311, 
                      "volume_24h": 790614556523.532, 
                      "market_cap": 6380839261494.0, 
                      "percent_change_1h": -2.31, 
                      "percent_change_24h": -8.52, 
                      "percent_change_7d": -21.91
                  }
              }, 
              "last_updated": 1526021954
          }, 
          "2349": {
              "id": 2349, 
              "name": "Mixin", 
              "symbol": "XIN", 
              "website_slug": "mixin", 
              "rank": 52, 
              "circulating_supply": 422215.0, 
              "total_supply": 1000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 1040.09, 
                      "volume_24h": 421150.0, 
                      "market_cap": 439141819.0, 
                      "percent_change_1h": -0.97, 
                      "percent_change_24h": -1.25, 
                      "percent_change_7d": -5.91
                  }, 
                  "IDR": {
                      "price": 14588039.732876347, 
                      "volume_24h": 5906943565.942249, 
                      "market_cap": 6159292273923.0, 
                      "percent_change_1h": -0.97, 
                      "percent_change_24h": -1.25, 
                      "percent_change_7d": -5.91
                  }
              }, 
              "last_updated": 1526021960
          }, 
          "1925": {
              "id": 1925, 
              "name": "Waltonchain", 
              "symbol": "WTC", 
              "website_slug": "waltonchain", 
              "rank": 53, 
              "circulating_supply": 31144099.0, 
              "total_supply": 70000000.0, 
              "max_supply": 100000000.0, 
              "quotes": {
                  "USD": {
                      "price": 13.6763, 
                      "volume_24h": 9346430.0, 
                      "market_cap": 425936047.0, 
                      "percent_change_1h": -3.92, 
                      "percent_change_24h": -8.09, 
                      "percent_change_7d": -22.53
                  }, 
                  "IDR": {
                      "price": 191820.3307393945, 
                      "volume_24h": 131090667346.62144, 
                      "market_cap": 5974071449535.0, 
                      "percent_change_1h": -3.92, 
                      "percent_change_24h": -8.09, 
                      "percent_change_7d": -22.53
                  }
              }, 
              "last_updated": 1526021954
          }, 
          "109": {
              "id": 109, 
              "name": "DigiByte", 
              "symbol": "DGB", 
              "website_slug": "digibyte", 
              "rank": 54, 
              "circulating_supply": 10235433465.0, 
              "total_supply": 10235433465.0, 
              "max_supply": 21000000000.0, 
              "quotes": {
                  "USD": {
                      "price": 0.0411029, 
                      "volume_24h": 8357930.0, 
                      "market_cap": 420705998.0, 
                      "percent_change_1h": -4.12, 
                      "percent_change_24h": -12.71, 
                      "percent_change_7d": -16.55
                  }, 
                  "IDR": {
                      "price": 576.4988975343, 
                      "volume_24h": 117226215928.04395, 
                      "market_cap": 5900716108639.0, 
                      "percent_change_1h": -4.12, 
                      "percent_change_24h": -12.71, 
                      "percent_change_7d": -16.55
                  }
              }, 
              "last_updated": 1526021942
          }, 
          "1934": {
              "id": 1934, 
              "name": "Loopring", 
              "symbol": "LRC", 
              "website_slug": "loopring", 
              "rank": 55, 
              "circulating_supply": 572074043.0, 
              "total_supply": 1374956262.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.716073, 
                      "volume_24h": 18581800.0, 
                      "market_cap": 409646776.0, 
                      "percent_change_1h": -1.38, 
                      "percent_change_24h": -11.81, 
                      "percent_change_7d": -22.18
                  }, 
                  "IDR": {
                      "price": 10043.4591003086, 
                      "volume_24h": 260623635174.227, 
                      "market_cap": 5745602256324.0, 
                      "percent_change_1h": -1.38, 
                      "percent_change_24h": -11.81, 
                      "percent_change_7d": -22.18
                  }
              }, 
              "last_updated": 1526021955
          }, 
          "2299": {
              "id": 2299, 
              "name": "aelf", 
              "symbol": "ELF", 
              "website_slug": "aelf", 
              "rank": 56, 
              "circulating_supply": 250000000.0, 
              "total_supply": 280000000.0, 
              "max_supply": 1000000000.0, 
              "quotes": {
                  "USD": {
                      "price": 1.63408, 
                      "volume_24h": 96751400.0, 
                      "market_cap": 408520000.0, 
                      "percent_change_1h": -4.38, 
                      "percent_change_24h": 0.27, 
                      "percent_change_7d": -7.86
                  }, 
                  "IDR": {
                      "price": 22919.1934993112, 
                      "volume_24h": 1357010708122.771, 
                      "market_cap": 5729798374828.0, 
                      "percent_change_1h": -4.38, 
                      "percent_change_24h": 0.27, 
                      "percent_change_7d": -7.86
                  }
              }, 
              "last_updated": 1526021959
          }, 
          "1908": {
              "id": 1908, 
              "name": "Nebulas", 
              "symbol": "NAS", 
              "website_slug": "nebulas-token", 
              "rank": 57, 
              "circulating_supply": 45500000.0, 
              "total_supply": 100000000.0, 
              "max_supply": 100000000.0, 
              "quotes": {
                  "USD": {
                      "price": 8.4771, 
                      "volume_24h": 31374000.0, 
                      "market_cap": 385708050.0, 
                      "percent_change_1h": -2.55, 
                      "percent_change_24h": -8.91, 
                      "percent_change_7d": -23.83
                  }, 
                  "IDR": {
                      "price": 118897.6642594065, 
                      "volume_24h": 440043802535.61, 
                      "market_cap": 5409843723803.0, 
                      "percent_change_1h": -2.55, 
                      "percent_change_24h": -8.91, 
                      "percent_change_7d": -23.83
                  }
              }, 
              "last_updated": 1526021955
          }, 
          "2062": {
              "id": 2062, 
              "name": "Aion", 
              "symbol": "AION", 
              "website_slug": "aion", 
              "rank": 58, 
              "circulating_supply": 133073439.0, 
              "total_supply": 465934587.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 2.86127, 
                      "volume_24h": 10212400.0, 
                      "market_cap": 380759039.0, 
                      "percent_change_1h": -5.63, 
                      "percent_change_24h": -7.66, 
                      "percent_change_7d": -24.95
                  }, 
                  "IDR": {
                      "price": 40131.4505922441, 
                      "volume_24h": 143236543922.186, 
                      "market_cap": 5340430141504.0, 
                      "percent_change_1h": -5.63, 
                      "percent_change_24h": -7.66, 
                      "percent_change_7d": -24.95
                  }
              }, 
              "last_updated": 1526021957
          }, 
          "1697": {
              "id": 1697, 
              "name": "Basic Attention Token", 
              "symbol": "BAT", 
              "website_slug": "basic-attention-token", 
              "rank": 59, 
              "circulating_supply": 1000000000.0, 
              "total_supply": 1500000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.355226, 
                      "volume_24h": 8445730.0, 
                      "market_cap": 355226000.0, 
                      "percent_change_1h": -2.39, 
                      "percent_change_24h": -7.52, 
                      "percent_change_7d": -27.81
                  }, 
                  "IDR": {
                      "price": 4982.3101867634, 
                      "volume_24h": 118457676559.86095, 
                      "market_cap": 4982310186763.0, 
                      "percent_change_1h": -2.39, 
                      "percent_change_24h": -7.52, 
                      "percent_change_7d": -27.81
                  }
              }, 
              "last_updated": 1526021951
          }, 
          "2608": {
              "id": 2608, 
              "name": "Mithril", 
              "symbol": "MITH", 
              "website_slug": "mithril", 
              "rank": 60, 
              "circulating_supply": 306417022.0, 
              "total_supply": 1000000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 1.14914, 
                      "volume_24h": 68908600.0, 
                      "market_cap": 352116057.0, 
                      "percent_change_1h": -0.86, 
                      "percent_change_24h": 2.78, 
                      "percent_change_7d": -12.25
                  }, 
                  "IDR": {
                      "price": 16117.5474993871, 
                      "volume_24h": 966494625212.1289, 
                      "market_cap": 4938690908742.0, 
                      "percent_change_1h": -0.86, 
                      "percent_change_24h": 2.78, 
                      "percent_change_7d": -12.25
                  }
              }, 
              "last_updated": 1526021964
          }, 
          "1876": {
              "id": 1876, 
              "name": "Dentacoin", 
              "symbol": "DCN", 
              "website_slug": "dentacoin", 
              "rank": 61, 
              "circulating_supply": 325226613094.0, 
              "total_supply": 1963173416169.0, 
              "max_supply": 8000000000000.0, 
              "quotes": {
                  "USD": {
                      "price": 0.00103261, 
                      "volume_24h": 6113070.0, 
                      "market_cap": 335832253.0, 
                      "percent_change_1h": -7.7, 
                      "percent_change_24h": -6.32, 
                      "percent_change_7d": 30.1
                  }, 
                  "IDR": {
                      "price": 14.4831271415, 
                      "volume_24h": 85740376361.52104, 
                      "market_cap": 4710298387228.0, 
                      "percent_change_1h": -7.7, 
                      "percent_change_24h": -6.32, 
                      "percent_change_7d": 30.1
                  }
              }, 
              "last_updated": 1526021954
          }, 
          "1521": {
              "id": 1521, 
              "name": "Komodo", 
              "symbol": "KMD", 
              "website_slug": "komodo", 
              "rank": 62, 
              "circulating_supply": 104059367.0, 
              "total_supply": 104059367.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 3.04935, 
                      "volume_24h": 3084640.0, 
                      "market_cap": 317313432.0, 
                      "percent_change_1h": -3.72, 
                      "percent_change_24h": -11.13, 
                      "percent_change_7d": -30.54
                  }, 
                  "IDR": {
                      "price": 42769.4131848652, 
                      "volume_24h": 43264381814.66959, 
                      "market_cap": 4450558083767.0, 
                      "percent_change_1h": -3.72, 
                      "percent_change_24h": -11.13, 
                      "percent_change_7d": -30.54
                  }
              }, 
              "last_updated": 1526021950
          }, 
          "2346": {
              "id": 2346, 
              "name": "WaykiChain", 
              "symbol": "WICC", 
              "website_slug": "waykichain", 
              "rank": 63, 
              "circulating_supply": 143400000.0, 
              "total_supply": 210000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 2.20773, 
                      "volume_24h": 20297600.0, 
                      "market_cap": 316588482.0, 
                      "percent_change_1h": -1.61, 
                      "percent_change_24h": -8.65, 
                      "percent_change_7d": 1.86
                  }, 
                  "IDR": {
                      "price": 30965.063561291, 
                      "volume_24h": 284689012760.464, 
                      "market_cap": 4440390114689.0, 
                      "percent_change_1h": -1.61, 
                      "percent_change_24h": -8.65, 
                      "percent_change_7d": 1.86
                  }
              }, 
              "last_updated": 1526021961
          }, 
          "1320": {
              "id": 1320, 
              "name": "Ardor", 
              "symbol": "ARDR", 
              "website_slug": "ardor", 
              "rank": 64, 
              "circulating_supply": 998999495.0, 
              "total_supply": 998999495.0, 
              "max_supply": 998999495.0, 
              "quotes": {
                  "USD": {
                      "price": 0.314738, 
                      "volume_24h": 2777840.0, 
                      "market_cap": 314423103.0, 
                      "percent_change_1h": -7.14, 
                      "percent_change_24h": -14.09, 
                      "percent_change_7d": -28.12
                  }, 
                  "IDR": {
                      "price": 4414.4357213761, 
                      "volume_24h": 38961282477.0676, 
                      "market_cap": 4410019056365.0, 
                      "percent_change_1h": -7.14, 
                      "percent_change_24h": -14.09, 
                      "percent_change_7d": -28.12
                  }
              }, 
              "last_updated": 1526021948
          }, 
          "2588": {
              "id": 2588, 
              "name": "Loom Network", 
              "symbol": "LOOM", 
              "website_slug": "loom-network", 
              "rank": 65, 
              "circulating_supply": 578111662.0, 
              "total_supply": 1000000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.541816, 
                      "volume_24h": 17134500.0, 
                      "market_cap": 313230148.0, 
                      "percent_change_1h": -1.7, 
                      "percent_change_24h": -7.33, 
                      "percent_change_7d": -20.61
                  }, 
                  "IDR": {
                      "price": 7599.3744155872, 
                      "volume_24h": 240324170795.7675, 
                      "market_cap": 4393286973829.0, 
                      "percent_change_1h": -1.7, 
                      "percent_change_24h": -7.33, 
                      "percent_change_7d": -20.61
                  }
              }, 
              "last_updated": 1526021964
          }, 
          "1586": {
              "id": 1586, 
              "name": "Ark", 
              "symbol": "ARK", 
              "website_slug": "ark", 
              "rank": 66, 
              "circulating_supply": 102469778.0, 
              "total_supply": 133719778.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 2.99797, 
                      "volume_24h": 1734030.0, 
                      "market_cap": 307201320.0, 
                      "percent_change_1h": -2.95, 
                      "percent_change_24h": -7.37, 
                      "percent_change_7d": -18.89
                  }, 
                  "IDR": {
                      "price": 42048.7702775446, 
                      "volume_24h": 24321066963.435448, 
                      "market_cap": 4308728155513.0, 
                      "percent_change_1h": -2.95, 
                      "percent_change_24h": -7.37, 
                      "percent_change_7d": -18.89
                  }
              }, 
              "last_updated": 1526021950
          }, 
          "2087": {
              "id": 2087, 
              "name": "KuCoin Shares", 
              "symbol": "KCS", 
              "website_slug": "kucoin-shares", 
              "rank": 67, 
              "circulating_supply": 75730576.0, 
              "total_supply": 180730576.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 4.02144, 
                      "volume_24h": 901934.0, 
                      "market_cap": 304545968.0, 
                      "percent_change_1h": -2.59, 
                      "percent_change_24h": -4.5, 
                      "percent_change_7d": -11.5
                  }, 
                  "IDR": {
                      "price": 56403.7020867216, 
                      "volume_24h": 12650298559.19401, 
                      "market_cap": 4271484847564.0, 
                      "percent_change_1h": -2.59, 
                      "percent_change_24h": -4.5, 
                      "percent_change_7d": -11.5
                  }
              }, 
              "last_updated": 1526021958
          }, 
          "2492": {
              "id": 2492, 
              "name": "Elastos", 
              "symbol": "ELA", 
              "website_slug": "elastos", 
              "rank": 68, 
              "circulating_supply": 5149870.0, 
              "total_supply": 33504307.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 55.2566, 
                      "volume_24h": 21177300.0, 
                      "market_cap": 284564286.0, 
                      "percent_change_1h": -2.19, 
                      "percent_change_24h": -5.35, 
                      "percent_change_7d": 20.44
                  }, 
                  "IDR": {
                      "price": 775015.1201373489, 
                      "volume_24h": 297027462849.4095, 
                      "market_cap": 3991226831183.0, 
                      "percent_change_1h": -2.19, 
                      "percent_change_24h": -5.35, 
                      "percent_change_7d": 20.44
                  }
              }, 
              "last_updated": 1526021962
          }, 
          "1982": {
              "id": 1982, 
              "name": "Kyber Network", 
              "symbol": "KNC", 
              "website_slug": "kyber-network", 
              "rank": 69, 
              "circulating_supply": 134132697.0, 
              "total_supply": 215625349.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 2.11557, 
                      "volume_24h": 49488000.0, 
                      "market_cap": 283767110.0, 
                      "percent_change_1h": -3.62, 
                      "percent_change_24h": -15.54, 
                      "percent_change_7d": -15.52
                  }, 
                  "IDR": {
                      "price": 29672.4506703085, 
                      "volume_24h": 694106193022.32, 
                      "market_cap": 3980045832931.0, 
                      "percent_change_1h": -3.62, 
                      "percent_change_24h": -15.54, 
                      "percent_change_7d": -15.52
                  }
              }, 
              "last_updated": 1526021955
          }, 
          "1169": {
              "id": 1169, 
              "name": "PIVX", 
              "symbol": "PIVX", 
              "website_slug": "pivx", 
              "rank": 70, 
              "circulating_supply": 56168079.0, 
              "total_supply": 56168079.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 4.87981, 
                      "volume_24h": 3736970.0, 
                      "market_cap": 274089556.0, 
                      "percent_change_1h": -6.27, 
                      "percent_change_24h": -10.17, 
                      "percent_change_7d": -17.67
                  }, 
                  "IDR": {
                      "price": 68442.9829811721, 
                      "volume_24h": 52413797691.12955, 
                      "market_cap": 3844310908958.0, 
                      "percent_change_1h": -6.27, 
                      "percent_change_24h": -10.17, 
                      "percent_change_7d": -17.67
                  }
              }, 
              "last_updated": 1526021948
          }, 
          "1785": {
              "id": 1785, 
              "name": "Gas", 
              "symbol": "GAS", 
              "website_slug": "gas", 
              "rank": 71, 
              "circulating_supply": 10128375.0, 
              "total_supply": 17190378.0, 
              "max_supply": 100000000.0, 
              "quotes": {
                  "USD": {
                      "price": 26.7583, 
                      "volume_24h": 8382510.0, 
                      "market_cap": 271018100.0, 
                      "percent_change_1h": -8.01, 
                      "percent_change_24h": -15.01, 
                      "percent_change_7d": -23.73
                  }, 
                  "IDR": {
                      "price": 375305.1597306245, 
                      "volume_24h": 117570968801.96265, 
                      "market_cap": 3801231436884.0, 
                      "percent_change_1h": -8.01, 
                      "percent_change_24h": -15.01, 
                      "percent_change_7d": -23.73
                  }
              }, 
              "last_updated": 1526021952
          }, 
          "1817": {
              "id": 1817, 
              "name": "Ethos", 
              "symbol": "ETHOS", 
              "website_slug": "ethos", 
              "rank": 72, 
              "circulating_supply": 76649127.0, 
              "total_supply": 222295208.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 3.53434, 
                      "volume_24h": 23803800.0, 
                      "market_cap": 270904075.0, 
                      "percent_change_1h": -6.47, 
                      "percent_change_24h": -17.82, 
                      "percent_change_7d": -1.16
                  }, 
                  "IDR": {
                      "price": 49571.7604721651, 
                      "volume_24h": 333866088697.557, 
                      "market_cap": 3799632154054.0, 
                      "percent_change_1h": -6.47, 
                      "percent_change_24h": -17.82, 
                      "percent_change_7d": -1.16
                  }
              }, 
              "last_updated": 1526021953
          }, 
          "2027": {
              "id": 2027, 
              "name": "Cryptonex", 
              "symbol": "CNX", 
              "website_slug": "cryptonex", 
              "rank": 73, 
              "circulating_supply": 45262543.0, 
              "total_supply": 106700169.0, 
              "max_supply": 210000000.0, 
              "quotes": {
                  "USD": {
                      "price": 5.6753, 
                      "volume_24h": 1934800.0, 
                      "market_cap": 256878509.0, 
                      "percent_change_1h": -3.07, 
                      "percent_change_24h": -5.55, 
                      "percent_change_7d": -7.51
                  }, 
                  "IDR": {
                      "price": 79600.3248718795, 
                      "volume_24h": 27137016292.022, 
                      "market_cap": 3602913115903.0, 
                      "percent_change_1h": -3.07, 
                      "percent_change_24h": -5.55, 
                      "percent_change_7d": -7.51
                  }
              }, 
              "last_updated": 1526021956
          }, 
          "213": {
              "id": 213, 
              "name": "MonaCoin", 
              "symbol": "MONA", 
              "website_slug": "monacoin", 
              "rank": 74, 
              "circulating_supply": 59376800.0, 
              "total_supply": 59376800.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 4.22651, 
                      "volume_24h": 2395470.0, 
                      "market_cap": 250956639.0, 
                      "percent_change_1h": -2.37, 
                      "percent_change_24h": -6.47, 
                      "percent_change_7d": -18.57
                  }, 
                  "IDR": {
                      "price": 59279.9621296226, 
                      "volume_24h": 33598257399.75705, 
                      "market_cap": 3519854449067.0, 
                      "percent_change_1h": -2.37, 
                      "percent_change_24h": -6.47, 
                      "percent_change_7d": -18.57
                  }
              }, 
              "last_updated": 1526021946
          }, 
          "2638": {
              "id": 2638, 
              "name": "Cortex", 
              "symbol": "CTXC", 
              "website_slug": "cortex", 
              "rank": 75, 
              "circulating_supply": 149792458.0, 
              "total_supply": 299792458.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 1.67422, 
                      "volume_24h": 86762700.0, 
                      "market_cap": 250785529.0, 
                      "percent_change_1h": 0.47, 
                      "percent_change_24h": -7.36, 
                      "percent_change_7d": -20.89
                  }, 
                  "IDR": {
                      "price": 23482.1870045633, 
                      "volume_24h": 1216911723919.6904, 
                      "market_cap": 3517454510629.0, 
                      "percent_change_1h": 0.47, 
                      "percent_change_24h": -7.36, 
                      "percent_change_7d": -20.89
                  }
              }, 
              "last_updated": 1526021964
          }, 
          "1727": {
              "id": 1727, 
              "name": "Bancor", 
              "symbol": "BNT", 
              "website_slug": "bancor", 
              "rank": 76, 
              "circulating_supply": 51779252.0, 
              "total_supply": 75876275.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 4.81931, 
                      "volume_24h": 19965000.0, 
                      "market_cap": 249540267.0, 
                      "percent_change_1h": -2.22, 
                      "percent_change_24h": -5.05, 
                      "percent_change_7d": -6.55
                  }, 
                  "IDR": {
                      "price": 67594.4252565146, 
                      "volume_24h": 280024049136.975, 
                      "market_cap": 3499988774402.0, 
                      "percent_change_1h": -2.22, 
                      "percent_change_24h": -5.05, 
                      "percent_change_7d": -6.55
                  }
              }, 
              "last_updated": 1526021953
          }, 
          "2585": {
              "id": 2585, 
              "name": "Centrality", 
              "symbol": "CENNZ", 
              "website_slug": "centrality", 
              "rank": 77, 
              "circulating_supply": 709068602.0, 
              "total_supply": 1200000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.341964, 
                      "volume_24h": 283319.0, 
                      "market_cap": 242475935.0, 
                      "percent_change_1h": -2.62, 
                      "percent_change_24h": -9.85, 
                      "percent_change_7d": -17.56
                  }, 
                  "IDR": {
                      "price": 4796.3007232195, 
                      "volume_24h": 3973760760.202285, 
                      "market_cap": 3400906246347.0, 
                      "percent_change_1h": -2.62, 
                      "percent_change_24h": -9.85, 
                      "percent_change_7d": -17.56
                  }
              }, 
              "last_updated": 1526021963
          }, 
          "1757": {
              "id": 1757, 
              "name": "FunFair", 
              "symbol": "FUN", 
              "website_slug": "funfair", 
              "rank": 78, 
              "circulating_supply": 4858654389.0, 
              "total_supply": 10999873621.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.0494512, 
                      "volume_24h": 9766170.0, 
                      "market_cap": 240266290.0, 
                      "percent_change_1h": -6.13, 
                      "percent_change_24h": -13.75, 
                      "percent_change_7d": -4.99
                  }, 
                  "IDR": {
                      "price": 693.5900455138, 
                      "volume_24h": 136977834608.56754, 
                      "market_cap": 3369914318569.0, 
                      "percent_change_1h": -6.13, 
                      "percent_change_24h": -13.75, 
                      "percent_change_7d": -4.99
                  }
              }, 
              "last_updated": 1526021952
          }, 
          "1750": {
              "id": 1750, 
              "name": "GXChain", 
              "symbol": "GXS", 
              "website_slug": "gxchain", 
              "rank": 79, 
              "circulating_supply": 60000000.0, 
              "total_supply": 100000000.0, 
              "max_supply": 100000000.0, 
              "quotes": {
                  "USD": {
                      "price": 3.95962, 
                      "volume_24h": 14883800.0, 
                      "market_cap": 237577200.0, 
                      "percent_change_1h": -1.85, 
                      "percent_change_24h": -8.67, 
                      "percent_change_7d": -10.14
                  }, 
                  "IDR": {
                      "price": 55536.6303753443, 
                      "volume_24h": 208756420863.757, 
                      "market_cap": 3332197822521.0, 
                      "percent_change_1h": -1.85, 
                      "percent_change_24h": -8.67, 
                      "percent_change_7d": -10.14
                  }
              }, 
              "last_updated": 1526021952
          }, 
          "2530": {
              "id": 2530, 
              "name": "Fusion", 
              "symbol": "FSN", 
              "website_slug": "fusion", 
              "rank": 80, 
              "circulating_supply": 29684331.0, 
              "total_supply": 57344000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 7.99525, 
                      "volume_24h": 7228060.0, 
                      "market_cap": 237333649.0, 
                      "percent_change_1h": -1.4, 
                      "percent_change_24h": -0.95, 
                      "percent_change_7d": -2.8
                  }, 
                  "IDR": {
                      "price": 112139.3578193038, 
                      "volume_24h": 101378944583.27089, 
                      "market_cap": 3328781838064.0, 
                      "percent_change_1h": -1.4, 
                      "percent_change_24h": -0.95, 
                      "percent_change_7d": -2.8
                  }
              }, 
              "last_updated": 1526021964
          }, 
          "2213": {
              "id": 2213, 
              "name": "QASH", 
              "symbol": "QASH", 
              "website_slug": "qash", 
              "rank": 81, 
              "circulating_supply": 350000000.0, 
              "total_supply": 1000000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.671928, 
                      "volume_24h": 2603070.0, 
                      "market_cap": 235174800.0, 
                      "percent_change_1h": -0.78, 
                      "percent_change_24h": -7.57, 
                      "percent_change_7d": -20.42
                  }, 
                  "IDR": {
                      "price": 9424.2924762589, 
                      "volume_24h": 36510002583.87105, 
                      "market_cap": 3298502366691.0, 
                      "percent_change_1h": -0.78, 
                      "percent_change_24h": -7.57, 
                      "percent_change_7d": -20.42
                  }
              }, 
              "last_updated": 1526021959
          }, 
          "1984": {
              "id": 1984, 
              "name": "Substratum", 
              "symbol": "SUB", 
              "website_slug": "substratum", 
              "rank": 82, 
              "circulating_supply": 383021000.0, 
              "total_supply": 472000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.609231, 
                      "volume_24h": 8424770.0, 
                      "market_cap": 233348267.0, 
                      "percent_change_1h": -5.67, 
                      "percent_change_24h": -11.89, 
                      "percent_change_7d": -25.65
                  }, 
                  "IDR": {
                      "price": 8544.920184311, 
                      "volume_24h": 118163696891.94655, 
                      "market_cap": 3272883873573.0, 
                      "percent_change_1h": -5.67, 
                      "percent_change_24h": -11.89, 
                      "percent_change_7d": -25.65
                  }
              }, 
              "last_updated": 1526021955
          }, 
          "1619": {
              "id": 1619, 
              "name": "Skycoin", 
              "symbol": "SKY", 
              "website_slug": "skycoin", 
              "rank": 83, 
              "circulating_supply": 8813174.0, 
              "total_supply": 25000000.0, 
              "max_supply": 100000000.0, 
              "quotes": {
                  "USD": {
                      "price": 24.8867, 
                      "volume_24h": 2187050.0, 
                      "market_cap": 219330817.0, 
                      "percent_change_1h": -1.1, 
                      "percent_change_24h": -6.32, 
                      "percent_change_7d": 29.91
                  }, 
                  "IDR": {
                      "price": 349054.5706815505, 
                      "volume_24h": 30675011102.680748, 
                      "market_cap": 3076278666912.0, 
                      "percent_change_1h": -1.1, 
                      "percent_change_24h": -6.32, 
                      "percent_change_7d": 29.91
                  }
              }, 
              "last_updated": 1526021950
          }, 
          "118": {
              "id": 118, 
              "name": "ReddCoin", 
              "symbol": "RDD", 
              "website_slug": "reddcoin", 
              "rank": 84, 
              "circulating_supply": 28808713174.0, 
              "total_supply": 28808713174.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.00760987, 
                      "volume_24h": 20524800.0, 
                      "market_cap": 219230562.0, 
                      "percent_change_1h": -13.39, 
                      "percent_change_24h": -20.18, 
                      "percent_change_7d": -32.19
                  }, 
                  "IDR": {
                      "price": 106.734115242, 
                      "volume_24h": 287875662595.872, 
                      "market_cap": 3074872511864.0, 
                      "percent_change_1h": -13.39, 
                      "percent_change_24h": -20.18, 
                      "percent_change_7d": -32.19
                  }
              }, 
              "last_updated": 1526021942
          }, 
          "541": {
              "id": 541, 
              "name": "Syscoin", 
              "symbol": "SYS", 
              "website_slug": "syscoin", 
              "rank": 85, 
              "circulating_supply": 533487963.0, 
              "total_supply": 533487963.0, 
              "max_supply": 888000000.0, 
              "quotes": {
                  "USD": {
                      "price": 0.410315, 
                      "volume_24h": 5549750.0, 
                      "market_cap": 218898114.0, 
                      "percent_change_1h": -8.1, 
                      "percent_change_24h": -14.17, 
                      "percent_change_7d": -25.26
                  }, 
                  "IDR": {
                      "price": 5754.9745916172, 
                      "volume_24h": 77839392271.37125, 
                      "market_cap": 3070209673683.0, 
                      "percent_change_1h": -8.1, 
                      "percent_change_24h": -14.17, 
                      "percent_change_7d": -25.26
                  }
              }, 
              "last_updated": 1526021944
          }, 
          "2243": {
              "id": 2243, 
              "name": "Dragonchain", 
              "symbol": "DRGN", 
              "website_slug": "dragonchain", 
              "rank": 86, 
              "circulating_supply": 238421940.0, 
              "total_supply": 433494437.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.889408, 
                      "volume_24h": 3285220.0, 
                      "market_cap": 212054381.0, 
                      "percent_change_1h": -3.48, 
                      "percent_change_24h": -7.93, 
                      "percent_change_7d": -21.96
                  }, 
                  "IDR": {
                      "price": 12474.6120458211, 
                      "volume_24h": 46077666251.228294, 
                      "market_cap": 2974221204712.0, 
                      "percent_change_1h": -3.48, 
                      "percent_change_24h": -7.93, 
                      "percent_change_7d": -21.96
                  }
              }, 
              "last_updated": 1526021959
          }, 
          "2682": {
              "id": 2682, 
              "name": "Holo", 
              "symbol": "HOT", 
              "website_slug": "holo", 
              "rank": 87, 
              "circulating_supply": 133214575156.0, 
              "total_supply": 177619433541.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.0015456, 
                      "volume_24h": 4266240.0, 
                      "market_cap": 205896447.0, 
                      "percent_change_1h": -1.63, 
                      "percent_change_24h": -5.78, 
                      "percent_change_7d": 3.63
                  }, 
                  "IDR": {
                      "price": 21.6781953592, 
                      "volume_24h": 59837205078.39359, 
                      "market_cap": 2887851584922.0, 
                      "percent_change_1h": -1.63, 
                      "percent_change_24h": -5.78, 
                      "percent_change_7d": 3.63
                  }
              }, 
              "last_updated": 1526021965
          }, 
          "2496": {
              "id": 2496, 
              "name": "Polymath", 
              "symbol": "POLY", 
              "website_slug": "polymath-network", 
              "rank": 88, 
              "circulating_supply": 239999750.0, 
              "total_supply": 1000000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.830386, 
                      "volume_24h": 15385300.0, 
                      "market_cap": 199292432.0, 
                      "percent_change_1h": -9.47, 
                      "percent_change_24h": -13.6, 
                      "percent_change_7d": 10.85
                  }, 
                  "IDR": {
                      "price": 11646.7843759908, 
                      "volume_24h": 215790333242.52948, 
                      "market_cap": 2795225338542.0, 
                      "percent_change_1h": -9.47, 
                      "percent_change_24h": -13.6, 
                      "percent_change_7d": 10.85
                  }
              }, 
              "last_updated": 1526021962
          }, 
          "2474": {
              "id": 2474, 
              "name": "Matrix AI Network", 
              "symbol": "MAN", 
              "website_slug": "matrix-ai-network", 
              "rank": 89, 
              "circulating_supply": 150000000.0, 
              "total_supply": 250000000.0, 
              "max_supply": 1000000000.0, 
              "quotes": {
                  "USD": {
                      "price": 1.29211, 
                      "volume_24h": 3761040.0, 
                      "market_cap": 193816500.0, 
                      "percent_change_1h": -2.31, 
                      "percent_change_24h": -11.41, 
                      "percent_change_7d": 3.28
                  }, 
                  "IDR": {
                      "price": 18122.8086216067, 
                      "volume_24h": 52751397433.8156, 
                      "market_cap": 2718421293241.0, 
                      "percent_change_1h": -2.31, 
                      "percent_change_24h": -11.41, 
                      "percent_change_7d": 3.28
                  }
              }, 
              "last_updated": 1526021962
          }, 
          "2044": {
              "id": 2044, 
              "name": "Enigma", 
              "symbol": "ENG", 
              "website_slug": "enigma-project", 
              "rank": 90, 
              "circulating_supply": 74836171.0, 
              "total_supply": 150000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 2.52962, 
                      "volume_24h": 7807870.0, 
                      "market_cap": 189307075.0, 
                      "percent_change_1h": -3.22, 
                      "percent_change_24h": -9.33, 
                      "percent_change_7d": -13.24
                  }, 
                  "IDR": {
                      "price": 35479.8114288943, 
                      "volume_24h": 109511213249.94304, 
                      "market_cap": 2655173238334.0, 
                      "percent_change_1h": -3.22, 
                      "percent_change_24h": -9.33, 
                      "percent_change_7d": -13.24
                  }
              }, 
              "last_updated": 1526021956
          }, 
          "1710": {
              "id": 1710, 
              "name": "Veritaseum", 
              "symbol": "VERI", 
              "website_slug": "veritaseum", 
              "rank": 91, 
              "circulating_supply": 2036645.0, 
              "total_supply": 100000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 92.8619, 
                      "volume_24h": 590159.0, 
                      "market_cap": 189126765.0, 
                      "percent_change_1h": -1.6, 
                      "percent_change_24h": -10.84, 
                      "percent_change_7d": -29.82
                  }, 
                  "IDR": {
                      "price": 1302457.5631631785, 
                      "volume_24h": 8277421127.704885, 
                      "market_cap": 2652644256810.0, 
                      "percent_change_1h": -1.6, 
                      "percent_change_24h": -10.84, 
                      "percent_change_7d": -29.82
                  }
              }, 
              "last_updated": 1526021952
          }, 
          "2473": {
              "id": 2473, 
              "name": "All Sports", 
              "symbol": "SOC", 
              "website_slug": "all-sports", 
              "rank": 92, 
              "circulating_supply": 744251871.0, 
              "total_supply": 1500000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.250906, 
                      "volume_24h": 44766800.0, 
                      "market_cap": 186737260.0, 
                      "percent_change_1h": 8.76, 
                      "percent_change_24h": -7.4, 
                      "percent_change_7d": 84.95
                  }, 
                  "IDR": {
                      "price": 3519.1442059986, 
                      "volume_24h": 627887833854.502, 
                      "market_cap": 2619129660680.0, 
                      "percent_change_1h": 8.76, 
                      "percent_change_24h": -7.4, 
                      "percent_change_7d": 84.95
                  }
              }, 
              "last_updated": 1526021962
          }, 
          "2137": {
              "id": 2137, 
              "name": "Electroneum", 
              "symbol": "ETN", 
              "website_slug": "electroneum", 
              "rank": 93, 
              "circulating_supply": 6948474724.0, 
              "total_supply": 6948474724.0, 
              "max_supply": 21000000000.0, 
              "quotes": {
                  "USD": {
                      "price": 0.0267163, 
                      "volume_24h": 1226620.0, 
                      "market_cap": 185637535.0, 
                      "percent_change_1h": -1.95, 
                      "percent_change_24h": -5.36, 
                      "percent_change_7d": -22.63
                  }, 
                  "IDR": {
                      "price": 374.716078335, 
                      "volume_24h": 17204262416.8493, 
                      "market_cap": 2603705199058.0, 
                      "percent_change_1h": -1.95, 
                      "percent_change_24h": -5.36, 
                      "percent_change_7d": -22.63
                  }
              }, 
              "last_updated": 1526021957
          }, 
          "66": {
              "id": 66, 
              "name": "Nxt", 
              "symbol": "NXT", 
              "website_slug": "nxt", 
              "rank": 94, 
              "circulating_supply": 998999942.0, 
              "total_supply": 998999942.0, 
              "max_supply": 1000000000.0, 
              "quotes": {
                  "USD": {
                      "price": 0.185278, 
                      "volume_24h": 3596340.0, 
                      "market_cap": 185092711.0, 
                      "percent_change_1h": -4.44, 
                      "percent_change_24h": -12.57, 
                      "percent_change_7d": -25.29
                  }, 
                  "IDR": {
                      "price": 2598.6624480842, 
                      "volume_24h": 50441356818.0951, 
                      "market_cap": 2596063633634.0, 
                      "percent_change_1h": -4.44, 
                      "percent_change_24h": -12.57, 
                      "percent_change_7d": -25.29
                  }
              }, 
              "last_updated": 1526021942
          }, 
          "2246": {
              "id": 2246, 
              "name": "CyberMiles", 
              "symbol": "CMT", 
              "website_slug": "cybermiles", 
              "rank": 95, 
              "circulating_supply": 633879774.0, 
              "total_supply": 1000000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.291352, 
                      "volume_24h": 47029000.0, 
                      "market_cap": 184682140.0, 
                      "percent_change_1h": -1.81, 
                      "percent_change_24h": -5.78, 
                      "percent_change_7d": -2.34
                  }, 
                  "IDR": {
                      "price": 4086.4295899903, 
                      "volume_24h": 659616879882.9349, 
                      "market_cap": 2590305063854.0, 
                      "percent_change_1h": -1.81, 
                      "percent_change_24h": -5.78, 
                      "percent_change_7d": -2.34
                  }
              }, 
              "last_updated": 1526021959
          }, 
          "2502": {
              "id": 2502, 
              "name": "Huobi Token", 
              "symbol": "HT", 
              "website_slug": "huobi-token", 
              "rank": 96, 
              "circulating_supply": 50000200.0, 
              "total_supply": 500000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 3.64733, 
                      "volume_24h": 165554000.0, 
                      "market_cap": 182367229.0, 
                      "percent_change_1h": -3.85, 
                      "percent_change_24h": 3.41, 
                      "percent_change_7d": 37.47
                  }, 
                  "IDR": {
                      "price": 51156.5296838849, 
                      "volume_24h": 2322018604098.31, 
                      "market_cap": 2557836715500.0, 
                      "percent_change_1h": -3.85, 
                      "percent_change_24h": 3.41, 
                      "percent_change_7d": 37.47
                  }
              }, 
              "last_updated": 1526021963
          }, 
          "1975": {
              "id": 1975, 
              "name": "ChainLink", 
              "symbol": "LINK", 
              "website_slug": "chainlink", 
              "rank": 97, 
              "circulating_supply": 350000000.0, 
              "total_supply": 1000000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.515366, 
                      "volume_24h": 9232360.0, 
                      "market_cap": 180378100.0, 
                      "percent_change_1h": -4.64, 
                      "percent_change_24h": -7.13, 
                      "percent_change_7d": -8.02
                  }, 
                  "IDR": {
                      "price": 7228.3933938155, 
                      "volume_24h": 129490750327.58539, 
                      "market_cap": 2529937687835.0, 
                      "percent_change_1h": -4.64, 
                      "percent_change_24h": -7.13, 
                      "percent_change_7d": -8.02
                  }
              }, 
              "last_updated": 1526021955
          }, 
          "1414": {
              "id": 1414, 
              "name": "ZCoin", 
              "symbol": "XZC", 
              "website_slug": "zcoin", 
              "rank": 98, 
              "circulating_supply": 4721441.0, 
              "total_supply": 4721441.0, 
              "max_supply": 21400000.0, 
              "quotes": {
                  "USD": {
                      "price": 38.0542, 
                      "volume_24h": 1443810.0, 
                      "market_cap": 179670649.0, 
                      "percent_change_1h": -0.89, 
                      "percent_change_24h": -6.6, 
                      "percent_change_7d": -16.03
                  }, 
                  "IDR": {
                      "price": 533738.601085313, 
                      "volume_24h": 20250514519.63215, 
                      "market_cap": 2520015164019.0, 
                      "percent_change_1h": -0.89, 
                      "percent_change_24h": -6.6, 
                      "percent_change_7d": -16.03
                  }
              }, 
              "last_updated": 1526021949
          }, 
          "1087": {
              "id": 1087, 
              "name": "Factom", 
              "symbol": "FCT", 
              "website_slug": "factom", 
              "rank": 99, 
              "circulating_supply": 8745102.0, 
              "total_supply": 8745102.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 20.3375, 
                      "volume_24h": 1542180.0, 
                      "market_cap": 177853512.0, 
                      "percent_change_1h": -4.15, 
                      "percent_change_24h": -5.83, 
                      "percent_change_7d": -28.56
                  }, 
                  "IDR": {
                      "price": 285248.6400863125, 
                      "volume_24h": 21630227302.682697, 
                      "market_cap": 2494528452916.0, 
                      "percent_change_1h": -4.15, 
                      "percent_change_24h": -5.83, 
                      "percent_change_7d": -28.56
                  }
              }, 
              "last_updated": 1526021947
          }, 
          "2694": {
              "id": 2694, 
              "name": "Nexo", 
              "symbol": "NEXO", 
              "website_slug": "nexo", 
              "rank": 100, 
              "circulating_supply": 560000010.0, 
              "total_supply": 1000000000.0, 
              "max_supply": null, 
              "quotes": {
                  "USD": {
                      "price": 0.317504, 
                      "volume_24h": 4307920.0, 
                      "market_cap": 177802243.0, 
                      "percent_change_1h": -3.7, 
                      "percent_change_24h": -18.7, 
                      "percent_change_7d": 26.78
                  }, 
                  "IDR": {
                      "price": 4453.2309390026, 
                      "volume_24h": 60421798234.818794, 
                      "market_cap": 2493809370374.0, 
                      "percent_change_1h": -3.7, 
                      "percent_change_24h": -18.7, 
                      "percent_change_7d": 26.78
                  }
              }, 
              "last_updated": 1526021965
          }
      }, 
      "metadata": {
          "timestamp": 1526021858, 
          "num_cryptocurrencies": 1604, 
          "error": null
      }
  };
    resolve(data);
  });
}

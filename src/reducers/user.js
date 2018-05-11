let currentBalance = localStorage.getItem('currentBalance');
currentBalance = parseFloat(currentBalance);

let transactionHistory = localStorage.getItem('transactionHistory');

if (!currentBalance || isNaN(currentBalance)) {
    currentBalance = parseFloat(10000000);
}
if (!transactionHistory) {
    transactionHistory = [];
} else {
    transactionHistory = JSON.parse(transactionHistory);
}

const initialState = {
    currentBalance,
    transactionHistory
}

export const setCurrentBalance = currentBalance => ({
    type: 'SET_CURRENT_BALANCE',
    currentBalance
});

export const setHistory = (currentBalance, transactionHistory) => ({
        type: 'SET_HISTORY',
        currentBalance,
        transactionHistory
});


const user = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_BALANCE': 
            localStorage.setItem('currentBalance', action.currentBalance);
            return {
                    ...state,
                    currentBalance: action.currentBalance,
                };
        case 'SET_HISTORY':
            localStorage.setItem('currentBalance', action.currentBalance);
            localStorage.setItem('transactionHistory', JSON.stringify(action.transactionHistory));
            return {
                ...state,
                currentBalance: action.currentBalance,
                transactionHistory: action.transactionHistory
            };
        default:
            return state;
    }
}

export default user;

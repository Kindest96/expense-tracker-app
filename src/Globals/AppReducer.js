export default (state, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return ({
                ...state,
                dark: action.payload
            });
        
        case 'ADD_TRANSACTION':
            return ({
                ...state,
                transactions: [action.payload, ...state.transactions]
            });
        
        case 'DELETE_TRANSACTION':
            return ({
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            });
        
        case 'SET_TRANSACTION':
            return ({
                ...state,
                transactions: action.payload
            });
        
        case 'EDIT_TRANSACTION':
            return ({
                ...state,
                edit: [action.payload]
            });
        
        default:
            return state;
    }
}
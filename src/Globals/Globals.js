import React, { createContext, useReducer, Children } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [],
    edit: {},
    dark: false
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function changeTheme(dark) {
        dispatch({
            type: 'CHANGE_THEME',
            payload: dark
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function setTransaction(transaction) {
        dispatch({
            type: 'SET_TRANSACTION',
            payload: transaction
        })
    }

    function editTransaction(transaction) {
        dispatch({
            type: 'EDIT_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            dark: state.dark,
            changeTheme,
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            setTransaction,
            editTransaction
        }}>
            {Children}
        </GlobalContext.Provider>
    );
}
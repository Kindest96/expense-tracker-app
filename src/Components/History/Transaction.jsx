import React, { useContext } from 'react';
import { ListItem, IconButton, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './History.module.css';
import { GlobalContext } from '../../Globals/Globals';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction, editTransaction } = useContext(GlobalContext);
    
    return (
        <ListItem button onClick={() => {editTransaction(transaction)}} className={(transaction.amount < 0 ? styles.minus : styles.plus)}>
                <ListItemText primary={(<Typography variant='h6'>{transaction.text}</Typography>)} secondary={(<Typography variant='body1'>{Math.abs(transaction.amount)}</Typography>)} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
    )
} 

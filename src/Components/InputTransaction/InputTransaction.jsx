import React, { useContext, useState } from 'react';
import styles from './InputTransaction.module.css';
import { Grid, TextField, FormControl, InputAdornment, InputLabel, OutlinedInput, Button, Typography } from '@material-ui/core';
import { GlobalContext } from '../../Globals/Globals';

export const InputTransaction = () => {
    const { dark, addTransaction, edit } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [id, setId] = useState(0);

    if (edit) {
        console.log(edit)
        setText(edit.text);
        setAmount(edit.amount);
        setId(edit.id);
    }

    const setRandomId = () => {
        setId(Math.floor(Math.random() * 100000000));
    }

    const clear = () => {
        setText('');
        setAmount(0);
        setRandomId();
    }

    const newIncome = (e) => {
        if (id === 0) {
            setRandomId();
        }
        const newTransaction = {
            id,
            text,
            amount: +amount
        };

        addTransaction(newTransaction);
    }

    const newExpense = (e) => {
        if (id === 0) {
            setRandomId();
        }
        const newTransaction = {
            id,
            text,
            amount: -amount
        };

        addTransaction(newTransaction);
    }

    return (
        <Grid container justify='center' alignItems='center' className={styles.container}>
            <Grid container item spacing={2} justify='center' alignItems='center' className={styles.container}>
                <Grid xs={12} md={8} item>
                <TextField fullWidth className={styles.dark} value={text} onChange={(e) => setText(e.target.value)} id="outlined-secondary" label="Description" variant="outlined" color="primary" />
                </Grid>
                <Grid xs={12} md={4} item>
                <FormControl fullWidth className={styles.dark} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput type='number' id="outlined-adornment-amount" value={amount} onChange={(e) => setAmount(e.target.value)} startAdornment={<InputAdornment position="start">$</InputAdornment>} labelWidth={60} />
                    </FormControl>
                    </Grid>
            </Grid>
            <Grid container item spacing={2} justify='center' alignItems='center' className={styles.container}>
                <Grid item sx={12} md={4}>
                <Button fullWidth onClick={() => {newIncome()}} className={styles.plus} variant="contained">
                        <Typography variant='h6' component='span'>
                            ADD
                        </Typography>
                    </Button>                </Grid>
                <Grid item sx={12} md={4}>
                    <Button fullWidth onClick={() => {newExpense()}} className={styles.minus} variant="contained">
                        <Typography variant='h6' component='span'>
                            WITHDRAW
                        </Typography>
                    </Button>                </Grid>
                <Grid item sx={12} md={4}>
                    <Button fullWidth onClick={() => {clear()}}variant="contained">
                        <Typography variant='h6' component='span'>
                            CLEAR
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default InputTransaction;
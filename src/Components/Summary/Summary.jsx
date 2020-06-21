import React, {useContext} from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import styles from './Summary.module.css';
import cx from 'classnames';
import { GlobalContext } from '../../Globals/Globals';
import CountUp from 'react-countup';

export const Summary = () => {
    const { transactions } = useContext(GlobalContext);

    const amount = transactions.map(transaction => transaction.amount);

    const income = amount.filter(item => item > 0).reduce((acc, item) => acc += item, 0);
    const expense = amount.filter(item => item < 0).reduce((acc, item) => acc += item, 0);
    const total = amount.reduce((acc, num) => (acc += num), 0);

    return (
        <Grid container justify='center' alignItems='center' spacing={0} className={styles.container}>
            <Grid item xs={12} md={4} component={Card}>
                <CardContent className={cx(styles.paper, styles.plus)}>
                    <Typography className={styles.IEB} variant="h4" component="h2">
                        <CountUp start={0} end={income} preserveValue={true} decimals={2} prefix="$" duration={2.5} seperator=","/>
                </Typography>
                </CardContent>
            </Grid>
            <Grid item xs={12} md={4} component={Card}>
            <CardContent className={cx(styles.paper, styles.minus)}>
                    <Typography className={styles.IEB} variant="h4" component="h2">
                    <CountUp start={0} end={Math.abs(expense)} preserveValue={true} decimals={2} prefix="$" duration={2.5} seperator=","/>
                </Typography>
                </CardContent>
            </Grid>
            <Grid item xs={12} md={4} component={Card}>
            <CardContent className={cx(styles.paper, (total < 0 ? styles.minus : styles.plus))}>
                    <Typography className={styles.IEB} variant="h4" component="h2">
                        <CountUp start={0} end={Math.abs(total)} preserveValue={true} decimals={2} prefix="$" duration={2.5} seperator="," />
                    </Typography>
                </CardContent>
            </Grid>
        </Grid>
    )
}

export default Summary;
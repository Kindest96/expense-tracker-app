import React, {useContext} from 'react';
import styles from './History.module.css';
import { List, Grid, Typography, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanel, ExpansionPanelActions , Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Transaction } from './Transaction';
import { GlobalContext } from '../../Globals/Globals'
import { CSVLink } from "react-csv";
import { ImportExcel } from "./ImportExcel";



export const History = () => {
    const { dark, transactions } = useContext(GlobalContext);

    return (
        <Grid container justify="center"
        alignItems="center" className={styles.container}>
            <Grid item xs={12} md={10} component={ExpansionPanel} zeroMinWidth>
                <ExpansionPanel className={styles.expansion}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>History</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={styles.list}>
                        <List className={styles.list} dense={true}>
                                {transactions.map((transaction) => (<Transaction key={transaction.id} transaction={transaction} />))}
                        </List>
                    </ExpansionPanelDetails>
                    <ExpansionPanelActions>
                        <ImportExcel />
                <CSVLink filename={"BalanceSheet.csv"} className={styles.UDB} data={transactions} >
                        <Button size="small" component="span">DOWNLOAD</Button>
                        </CSVLink>
                    </ExpansionPanelActions>

                </ExpansionPanel>
            </Grid>
            </Grid>
    )
}

export default History;
import React, {useContext} from 'react';
import styles from './Header.module.css';
import { GlobalContext } from '../../Globals/Globals';
import { Grid, Typography, Switch, FormControl, FormControlLabel, FormGroup } from '@material-ui/core';

export const Header = () => {
    const { dark, changeTheme } = useContext(GlobalContext);

    return (
        <Grid container spacing={1} direction="row" justify="center" alignItems="center"className={styles.container}>
                <Grid item xs={10} >
                    <Typography variant="h5">Expense Tracker App By <a href="https://github.com/Kindest96/expense-tracker-app" >Asif Nawaz</a></Typography>
                </Grid>
            <Grid item>
            <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                    <FormControlLabel
                            value={!dark}
                            onChange={() => changeTheme(!dark)}
          control={<Switch color="primary" />}
          label="Dark mode"
          labelPlacement="end"
        />
                {/* <Switch value="Dark mode" checked={dark} onChange={() => changeTheme(!dark)} color="primary" inputProps={{ 'label': 'Dark Mode', 'label-placement': 'end'}}/> */}
                </FormGroup>
    </FormControl>
                </Grid>
            </Grid>
    )
}

export default Header;
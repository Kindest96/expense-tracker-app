import React, {useContext} from 'react';
import { Header, History, Summary, InputTransaction } from './Components';
import cx from 'classnames';
import { GlobalContext } from "./Globals/Globals";

import styles from './App.module.css';

const App = () => {
    const { dark } = useContext(GlobalContext);

    return (
        <div className={cx(styles.container, (dark ? styles.dark : styles.light))}>
                <Header />
                <History />
                <Summary />
                <InputTransaction />
            </div>
        );
}

export default App;
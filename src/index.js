import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GlobalProvider } from './Globals/Globals';

import App from './App';

ReactDOM.render(<GlobalProvider><App className='container'/></GlobalProvider>, document.getElementById('root'));
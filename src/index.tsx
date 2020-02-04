/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <App />
    </MuiPickersUtilsProvider>
  , document.getElementById('root'));

serviceWorker.register();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MediaIndex from './components/MediaIndex'
import {MuiThemeProvider} from 'material-ui'


ReactDOM.render(
    <MuiThemeProvider>
        <MediaIndex />
    </MuiThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';

import {Router} from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import theme from './theme/theme';
import * as serviceWorker from './serviceWorker';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();
const context = {
    insertCss: (...styles) => {
        const removeCss = styles.map(x => x._insertCss());
        return () => {
        removeCss.forEach(f => f());
        };
    },
}

ReactDOM.hydrate(
   <Router history={history}>
        <ParallaxProvider context={context}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </ParallaxProvider>
   </Router>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

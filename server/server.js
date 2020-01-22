import express from "express"
import { renderToString } from "react-dom/server"
import React from 'react'
import App from '../src/App'
import path from 'path'
import fs from 'fs'

import {StaticRouter} from "react-router-dom";

import { ThemeProvider } from '@material-ui/styles';
import { ParallaxProvider } from 'react-scroll-parallax';
import { createMemoryHistory } from 'history';
import theme from '../src/theme/theme';
const history = createMemoryHistory();
const port = process.env.PORT || 3000; 
const app = express()
	
	//Serve the app with the public bundle.js
app.use(
    express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)
	
app.get("/*", (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send(`Oops, better luck next time! ${err}`);
        }
        const css = new Set()
        const context = { insertCss: (...styles) =>
        styles.forEach(style => css.add(style._getCss()))}
            
        const markup = renderToString(
            <ParallaxProvider context={context}>
                <ThemeProvider theme={theme}>
                    <StaticRouter location={req.url} history={history}>
                        <App />
                    </StaticRouter>
                </ThemeProvider>
            </ParallaxProvider>
        )
            
        res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${markup}</div>`
                )
            ) 
        })
	
	})
	
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}\n`)
})
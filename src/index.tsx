import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import 'raf/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import themes from './themes/themes'

import './index.css'
import GlobalStyle from './themes/GlobalTheme/GlobalTheme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

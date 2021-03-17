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
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

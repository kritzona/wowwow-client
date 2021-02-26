import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import themes from './themes/themes'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.light}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

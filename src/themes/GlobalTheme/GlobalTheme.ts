import { createGlobalStyle, DefaultTheme, css } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const GlobalStyle = createGlobalStyle<IProps>`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `}
`

export default GlobalStyle

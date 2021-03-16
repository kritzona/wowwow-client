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
      background-color: ${theme.colors._100Color};
      color: ${theme.colors._900Color};

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    input,
    textarea {
      font-family: 'Roboto', sans-serif;
    }
  `}
`

export default GlobalStyle

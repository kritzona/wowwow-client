import { createGlobalStyle, DefaultTheme, css } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const GlobalStyle = createGlobalStyle<IProps>`
  ${({ theme }) => css``}
`

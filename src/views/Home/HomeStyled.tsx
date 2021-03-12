import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const HomeStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

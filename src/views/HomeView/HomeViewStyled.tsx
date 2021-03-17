import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const HomeViewStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

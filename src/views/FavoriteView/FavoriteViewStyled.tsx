import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const FavoriteViewStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

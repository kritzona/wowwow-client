import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const HeaderStyled = styled.header<IProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    padding-bottom: ${theme.sizes.nBorderRadius}px;
  `}
`

export default HeaderStyled

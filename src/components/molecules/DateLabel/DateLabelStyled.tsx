import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const DateLabelStyled = styled.div<IProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.whiteColor};
    border-radius: ${theme.sizes.sBorderRadius}px;
    padding-left: ${theme.sizes.olFontSize}px;
    padding-right: ${theme.sizes.olFontSize}px;
    font-size: 0;
  `}
`

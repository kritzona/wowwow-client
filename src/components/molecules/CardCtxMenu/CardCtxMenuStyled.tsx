import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const CardCtxMenuStyled = styled.div<IProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.accentColor};
    color: ${theme.colors.whiteColor};
    min-height: 28px;
    border-radius: ${theme.sizes.nBorderRadius}px;
    padding: 2px;
  `}
`

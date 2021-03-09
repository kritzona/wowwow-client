import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const BottomNavBarStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
    min-height: 56px;
    box-shadow: ${theme.effects._01dp};
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    border-top-left-radius: ${theme.sizes.nBorderRadius}px;
    border-top-right-radius: ${theme.sizes.nBorderRadius}px;
    background-color: ${theme.colors._100Color};
  `}
`

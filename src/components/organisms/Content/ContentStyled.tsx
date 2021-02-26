import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const ContentStyled = styled.main<IProps>``
export const ContentWrapperStyled = styled.div<IProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors._100Color};
    box-shadow: ${theme.effects.contentShadow};
    border-radius: ${theme.sizes.nBorderRadius}px;

    padding: 48px 16px;
    margin-top: -${theme.sizes.nBorderRadius}px;

    @media ${theme.mediaQueries.phablet} {
      padding: 20px 16px;
    }
    @media ${theme.mediaQueries.mobile} {
      padding: 20px 16px;
      box-shadow: none;
    }
  `}
`

import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {}

export const ModalContentStyled = styled.div<IProps>`
  ${({ theme }) => css`
    height: calc(100vh - 98px);

    @media ${theme.mediaQueries.phablet} {
      height: calc(100vh - 87px);
    }
    @media ${theme.mediaQueries.mobile} {
      height: calc(100vh - 78px);
    }
  `}
`

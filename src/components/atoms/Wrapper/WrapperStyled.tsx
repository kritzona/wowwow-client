import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  paddingX?: boolean
  paddingY?: boolean
}

const WrapperStyled = styled.div<IProps>`
  ${({ theme, paddingX, paddingY }) => css`
    width: 1140px;
    margin: 0 auto;
    padding: ${paddingY ? '16px' : '0'}
      ${paddingX === undefined || paddingX ? '16px' : '0'};
    box-sizing: border-box;

    @media ${theme.mediaQueries.desktop} {
      width: 1140px;
    }
    @media ${theme.mediaQueries.laptop} {
      width: 960px;
    }
    @media ${theme.mediaQueries.tablet} {
      width: 720px;
    }
    @media ${theme.mediaQueries.phablet} {
      width: 540px;
    }
    @media ${theme.mediaQueries.mobile} {
      width: 100%;
    }
  `}
`

export default WrapperStyled

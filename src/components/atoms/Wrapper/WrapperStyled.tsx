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
    padding: ${paddingY ? '48px' : '0'}
      ${paddingX === undefined || paddingX ? '16px' : '0'};
    box-sizing: border-box;

    @media ${theme.mediaQueries.desktop} {
      padding: ${paddingY ? '48px' : '0'}
        ${paddingX === undefined || paddingX ? '16px' : '0'};
      width: 1140px;
    }
    @media ${theme.mediaQueries.laptop} {
      padding: ${paddingY ? '48px' : '0'}
        ${paddingX === undefined || paddingX ? '16px' : '0'};
      width: 960px;
    }
    @media ${theme.mediaQueries.tablet} {
      padding: ${paddingY ? '48px' : '0'}
        ${paddingX === undefined || paddingX ? '16px' : '0'};
      width: 720px;
    }
    @media ${theme.mediaQueries.phablet} {
      padding: ${paddingY ? '16px' : '0'}
        ${paddingX === undefined || paddingX ? '16px' : '0'};
      width: 540px;
    }
    @media ${theme.mediaQueries.mobile} {
      padding: ${paddingY ? '24px' : '0'}
        ${paddingX === undefined || paddingX ? '16px' : '0'};
      width: 100%;
    }
  `}
`

export default WrapperStyled

import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  desktopSize?: number
  laptopSize?: number
  tabletSize?: number
  phabletSize?: number
  mobileSize?: number
}

const ColumnStyled = styled.div<IProps>`
  ${({
    theme,
    desktopSize,
    laptopSize,
    tabletSize,
    phabletSize,
    mobileSize,
  }) => css`
    display: grid;
    grid-column: span ${desktopSize || 1};

    @media ${theme.mediaQueries.desktop} {
      grid-column: span ${desktopSize || 1};
    }
    @media ${theme.mediaQueries.laptop} {
      grid-column: span ${laptopSize || 1};
    }
    @media ${theme.mediaQueries.tablet} {
      grid-column: span ${tabletSize || 1};
    }
    @media ${theme.mediaQueries.phablet} {
      grid-column: span ${phabletSize || 1};
    }
    @media ${theme.mediaQueries.mobile} {
      grid-column: span ${mobileSize || 1};
    }
  `}
`

export default ColumnStyled

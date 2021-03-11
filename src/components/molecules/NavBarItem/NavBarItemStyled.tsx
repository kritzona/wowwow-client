import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  primaryIconSource?: string
  accentIconSource?: string
  whiteIconSource?: string
}

export const NavBarItemIconStyled = styled.div<IProps>`
  ${({ theme, primaryIconSource }) => css`
    width: 20px;
    height: 20px;
    background-image: url(${primaryIconSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  `}
`
export const NavBarItemTitleStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const NavBarItemStyled = styled.div<IProps>`
  ${({ theme, primaryIconSource, whiteIconSource }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.sizes.stepSize}px;
    cursor: pointer;
    user-select: none;
    color: ${theme.colors.primaryColor};
    transition: ${theme.effects.defaultTransition};
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.whiteColor};

      & ${NavBarItemIconStyled} {
        background-image: url(${whiteIconSource});
      }
    }

    @media ${theme.mediaQueries.tablet} {
      &:hover {
        background-color: transparent;
        color: ${theme.colors.primaryColor};

        & ${NavBarItemIconStyled} {
          background-image: url(${primaryIconSource});
        }
      }
    }
    @media ${theme.mediaQueries.phablet} {
      &:hover {
        background-color: transparent;
        color: ${theme.colors.primaryColor};

        & ${NavBarItemIconStyled} {
          background-image: url(${primaryIconSource});
        }
      }
    }
    @media ${theme.mediaQueries.mobile} {
      &:hover {
        background-color: transparent;
        color: ${theme.colors.primaryColor};

        & ${NavBarItemIconStyled} {
          background-image: url(${primaryIconSource});
        }
      }
    }

    &:active {
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.whiteColor};

      & ${NavBarItemIconStyled} {
        background-image: url(${whiteIconSource});
      }
    }

    & > *:not(:first-child) {
      margin-top: 2px;
    }
  `}
`

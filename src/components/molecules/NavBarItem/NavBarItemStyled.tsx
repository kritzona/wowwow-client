import styled, { css, DefaultTheme } from 'styled-components'
import HomePrimaryIconSource from '../../../assets/icons/home-primary-icon.svg'
import HomeWhiteIconSource from '../../../assets/icons/home-white-icon.svg'

interface IProps {
  theme: DefaultTheme
}

export const NavBarItemIconStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    background-image: url(${HomePrimaryIconSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  `}
`
export const NavBarItemTitleStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const NavBarItemStyled = styled.div<IProps>`
  ${({ theme }) => css`
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
        background-image: url(${HomeWhiteIconSource});
      }
    }

    @media ${theme.mediaQueries.tablet} {
      &:hover {
        background-color: transparent;
        color: ${theme.colors.primaryColor};

        & ${NavBarItemIconStyled} {
          background-image: url(${HomePrimaryIconSource});
        }
      }
    }
    @media ${theme.mediaQueries.phablet} {
      &:hover {
        background-color: transparent;
        color: ${theme.colors.primaryColor};

        & ${NavBarItemIconStyled} {
          background-image: url(${HomePrimaryIconSource});
        }
      }
    }
    @media ${theme.mediaQueries.mobile} {
      &:hover {
        background-color: transparent;
        color: ${theme.colors.primaryColor};

        & ${NavBarItemIconStyled} {
          background-image: url(${HomePrimaryIconSource});
        }
      }
    }

    &:active {
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.whiteColor};

      & ${NavBarItemIconStyled} {
        background-image: url(${HomeWhiteIconSource});
      }
    }

    & > *:not(:first-child) {
      margin-top: 2px;
    }
  `}
`

import styled, { css, DefaultTheme } from 'styled-components'
import HomePrimaryIconSource from '../../../assets/icons/home-primary-icon.svg'

interface IProps {
  theme: DefaultTheme
}

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

    & > *:not(:first-child) {
      margin-top: 2px;
    }
  `}
`
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

import styled, { css, DefaultTheme } from 'styled-components'
import CatAccentIconSource from '../../../assets/icons/cat-accent-icon.svg'

interface IProps {
  theme: DefaultTheme
}

const HeaderStyled = styled.header<IProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    padding-bottom: ${theme.sizes.nBorderRadius}px;
    color: ${theme.colors.whiteColor};
    padding-top: ${theme.sizes.stepSize * 4}px;
    padding-bottom: ${theme.sizes.stepSize * 4}px;
  `}
`
export const HeaderLogoStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    background-image: url(${CatAccentIconSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  `}
`
export const HeaderTitleWithLogoStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize * 2}px;
    }
  `}
`
export const HeaderTopStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const HeaderBottomStyled = styled.div<IProps>`
  ${({ theme }) => css`
    padding-top: ${theme.sizes.stepSize * 2}px;
    padding-bottom: ${theme.sizes.stepSize * 2}px;
  `}
`

export default HeaderStyled

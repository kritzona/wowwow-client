import styled, { css, DefaultTheme } from 'styled-components'
import CorgiAccentIconSource from '../../../assets/icons/corgi-accent-icon.svg'

interface IProps {
  theme: DefaultTheme
}

export const ContentStyled = styled.main<IProps>``
export const ContentWrapperStyled = styled.div<IProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors._100Color};
    filter: ${theme.effects.neomorphShadow};
    border-radius: ${theme.sizes.nBorderRadius}px;
    margin-bottom: ${56 + theme.sizes.stepSize * 2}px;
    position: relative;

    padding: 48px 16px;
    margin-top: -${theme.sizes.nBorderRadius}px;

    @media ${theme.mediaQueries.phablet} {
      padding: 20px 16px;
    }
    @media ${theme.mediaQueries.mobile} {
      padding: 20px 16px;
      filter: none;
    }
  `}
`
export const ContentCogriStyled = styled.div<IProps>`
  ${({ theme }) => css`
    position: absolute;
    top: -48px;
    right: ${theme.sizes.stepSize * 2}px;
    width: 58px;
    height: 48px;
    background-image: url(${CorgiAccentIconSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  `}
`

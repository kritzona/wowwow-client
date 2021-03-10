import styled, { css, DefaultTheme } from 'styled-components'
import RedHeartIconIconSource from '../../../assets/icons/red-heart-icon.svg'

interface IProps {
  theme: DefaultTheme
}

export const LikeStatusStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    background-image: url(${RedHeartIconIconSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    cursor: pointer;
    transition: ${theme.effects.defaultTransition};
    transform-origin: center center;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(1.1);
    }

    @media ${theme.mediaQueries.tablet} {
      &:hover {
        transform: scale(1);
      }
      &:active {
        transform: scale(1.3);
      }
    }
    @media ${theme.mediaQueries.phablet} {
      &:hover {
        transform: scale(1);
      }
      &:active {
        transform: scale(1.3);
      }
    }
    @media ${theme.mediaQueries.mobile} {
      &:hover {
        transform: scale(1);
      }
      &:active {
        transform: scale(1.3);
      }
    }
  `}
`

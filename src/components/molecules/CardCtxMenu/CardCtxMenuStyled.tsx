import styled, { css, DefaultTheme } from 'styled-components'
import HeartWhiteIconSource from '../../../assets/icons/heart-white-icon.svg'
import TrashWhiteIconSource from '../../../assets/icons/trash-white-icon.svg'

interface IProps {
  theme: DefaultTheme
}

export const CardCtxMenuStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.accentColor};
    color: ${theme.colors.whiteColor};
    min-height: 28px;
    border-radius: ${theme.sizes.nBorderRadius}px;
    padding: 2px;
    box-shadow: ${theme.effects.accentShadow};

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize * 3}px;
    }
  `}
`
export const CardCtxMenuLikeItemStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    background-image: url(${HeartWhiteIconSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: ${theme.effects.defaultTransition};
    transform-origin: center center;

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
export const CardCtxMenuTrashItemStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    background-image: url(${TrashWhiteIconSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: ${theme.effects.defaultTransition};
    transform-origin: center center;

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

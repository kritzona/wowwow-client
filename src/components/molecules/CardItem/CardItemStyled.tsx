import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const CardItemStyled = styled.div<IProps>`
  ${({ theme }) => css`
    height: 114px;
    background-color: ${theme.colors._100Color};
    border-radius: ${theme.sizes.nBorderRadius}px;
    box-shadow: ${theme.effects.primaryShadow};
    padding: ${theme.sizes.stepSize * 2}px;
    border: 1px solid ${theme.colors._100Color};
    transition: ${theme.effects.defaultTransition};
    transform-origin: center center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      border: 1px solid ${theme.colors.accentColor};
      box-shadow: ${theme.effects.accentShadow};
    }

    @media ${theme.mediaQueries.tablet} {
      &:hover {
        border: 1px solid ${theme.colors._100Color};
        box-shadow: ${theme.effects.primaryShadow};
      }
    }
    @media ${theme.mediaQueries.phablet} {
      &:hover {
        border: 1px solid ${theme.colors._100Color};
        box-shadow: ${theme.effects.primaryShadow};
      }
    }
    @media ${theme.mediaQueries.mobile} {
      &:hover {
        border: 1px solid ${theme.colors._100Color};
        box-shadow: ${theme.effects.primaryShadow};
      }
    }

    &:active {
      border: 1px solid ${theme.colors.accentColor};
      box-shadow: none;
      transform: scale(0.95);
    }
  `}
`

import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  color?: 'primary' | 'accent'
  type?: 'button' | 'reset' | 'submit'
  theme: DefaultTheme
}

const ButtonStyled = styled.button.attrs<IProps>((props: IProps) => ({
  type: props.type ? props.type : 'button',
}))`
  ${({ theme, color }) => css`
    margin: 0;
    padding: ${theme.sizes.btnFontSize}px ${theme.sizes.btnFontSize * 3}px;
    outline: none;
    box-shadow: ${theme.effects._01dp};
    cursor: pointer;
    border-radius: ${theme.sizes.nBorderRadius}px;
    transform-origin: center center;
    transition: ${theme.effects.defaultTransition};
    -webkit-tap-highlight-color: transparent;

    ${(!color || color === 'primary') &&
    css`
      background-color: ${theme.colors.primaryColor};
      border: 1px solid ${theme.colors.primaryColor};
      color: ${theme.colors.whiteColor};
    `}
    ${color === 'accent' &&
    css`
      background-color: ${theme.colors.accentColor};
      border: 1px solid ${theme.colors.accentColor};
      color: ${theme.colors.primaryColor};
    `}

    &:hover {
      ${(!color || color === 'primary') &&
      css`
        background-color: ${theme.colors.hoverPrimaryColor};
        border: 1px solid ${theme.colors.hoverPrimaryColor};
        color: ${theme.colors.whiteColor};
      `}
      ${color === 'accent' &&
      css`
        background-color: ${theme.colors.hoverAccentColor};
        border: 1px solid ${theme.colors.hoverAccentColor};
        color: ${theme.colors.whiteColor};
      `}
      
      box-shadow: ${theme.effects._01dp};
    }

    @media ${theme.mediaQueries.tablet} {
      &:hover {
        ${(!color || color === 'primary') &&
        css`
          background-color: ${theme.colors.primaryColor};
          border: 1px solid ${theme.colors.primaryColor};
          color: ${theme.colors.whiteColor};
        `}
        ${color === 'accent' &&
        css`
          background-color: ${theme.colors.accentColor};
          border: 1px solid ${theme.colors.accentColor};
          color: ${theme.colors.whiteColor};
        `}
      
        box-shadow: ${theme.effects._01dp};
      }
    }
    @media ${theme.mediaQueries.phablet} {
      &:hover {
        ${(!color || color === 'primary') &&
        css`
          background-color: ${theme.colors.primaryColor};
          border: 1px solid ${theme.colors.primaryColor};
          color: ${theme.colors.whiteColor};
        `}
        ${color === 'accent' &&
        css`
          background-color: ${theme.colors.accentColor};
          border: 1px solid ${theme.colors.accentColor};
          color: ${theme.colors.whiteColor};
        `}
      
        box-shadow: ${theme.effects._01dp};
      }
    }
    @media ${theme.mediaQueries.mobile} {
      &:hover {
        ${(!color || color === 'primary') &&
        css`
          background-color: ${theme.colors.primaryColor};
          border: 1px solid ${theme.colors.primaryColor};
          color: ${theme.colors.whiteColor};
        `}
        ${color === 'accent' &&
        css`
          background-color: ${theme.colors.accentColor};
          border: 1px solid ${theme.colors.accentColor};
          color: ${theme.colors.whiteColor};
        `}
      
        box-shadow: ${theme.effects._01dp};
      }
    }

    &:active {
      ${(!color || color === 'primary') &&
      css`
        background-color: ${theme.colors.hoverPrimaryColor};
        border: 1px solid ${theme.colors.hoverPrimaryColor};
        color: ${theme.colors.whiteColor};
      `}
      ${color === 'accent' &&
      css`
        background-color: ${theme.colors.hoverAccentColor};
        border: 1px solid ${theme.colors.hoverAccentColor};
        color: ${theme.colors.whiteColor};
      `}

      box-shadow: none;
      transform: scale(0.95);
    }
  `}
`

export default ButtonStyled

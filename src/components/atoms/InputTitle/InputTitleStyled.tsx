import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  placeholder?: string
  theme: DefaultTheme
}

export const InputTitleStyled = styled.input.attrs((props: IProps) => ({
  type: 'text',
  placeholder: props.placeholder ? props.placeholder : '',
}))<IProps>`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    outline: none;
    padding: ${theme.sizes.tnFontSize}px ${theme.sizes.tnFontSize * 2}px;
    font-size: ${theme.sizes.tnFontSize}px;
    font-style: normal;
    font-stretch: normal;
    font-weight: ${theme.sizes.boldFontWeight};
    color: ${theme.colors._900Color};
    background-color: ${theme.colors._100Color};
    border-bottom: 2px solid ${theme.colors.primaryColor};
    transition: ${theme.effects.defaultTransition};

    &::placeholder {
      color: ${theme.colors._500Color};
    }

    &:focus {
      background-color: ${theme.colors._200Color};
      border-bottom: 2px solid ${theme.colors.accentColor};
    }
  `}
`

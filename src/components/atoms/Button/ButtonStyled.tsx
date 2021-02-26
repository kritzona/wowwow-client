import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  type?: 'button' | 'reset' | 'submit'
  theme: DefaultTheme
}

const ButtonStyled = styled.button.attrs<IProps>((props: IProps) => ({
  type: props.type ? props.type : 'button',
}))`
  ${({ theme }) => css`
    margin: 0;
    padding: ${theme.sizes.btnFontSize}px ${theme.sizes.btnFontSize * 3}px;
    outline: none;
    box-shadow: ${theme.effects._01dp};
    color: ${theme.colors.whiteColor};
    background-color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.primaryColor};
    cursor: pointer;
    border-radius: ${theme.sizes.nBorderRadius}px;
  `}
`

export default ButtonStyled

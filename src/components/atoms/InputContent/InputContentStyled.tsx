import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const InputContentStyled = styled.textarea<IProps>`
  ${() => css``}
`

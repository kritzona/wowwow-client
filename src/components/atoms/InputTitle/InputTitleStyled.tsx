import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const InputTitleStyled = styled.input.attrs((props: IProps) => ({
  type: 'text',
}))<IProps>`
  ${() => css``}
`

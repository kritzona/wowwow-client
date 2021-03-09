import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const NoteItemStyled = styled.div<IProps>`
  ${({ theme }) => css`
    position: relative;
  `}
`
export const NoteItemCtxMenuStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  `}
`

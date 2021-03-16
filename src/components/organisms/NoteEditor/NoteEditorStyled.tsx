import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const NoteEditorStyled = styled.div<IProps>`
  ${({ theme }) => css`
    padding-top: ${theme.sizes.stepSize * 4}px;
    padding-bottom: ${theme.sizes.stepSize * 4}px;
  `}
`

export const NoteEditorTitleStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const NoteEditorTitleLabelStyled = styled.div<IProps>`
  ${({ theme }) => css`
    margin-bottom: ${theme.sizes.stepSize}px;
  `}
`

export const NoteEditorContentStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

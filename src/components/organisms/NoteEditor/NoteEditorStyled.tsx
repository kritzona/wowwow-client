import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const NoteEditorStyled = styled.div<IProps>`
  ${({ theme }) => css`
    padding-top: ${theme.sizes.stepSize * 4}px;
    padding-bottom: ${theme.sizes.stepSize * 4}px;

    & > *:not(:first-child) {
      margin-top: ${theme.sizes.stepSize * 2}px;
    }
  `}
`

export const NoteEditorTitleStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const NoteEditorLabelStyled = styled.div<IProps>`
  ${({ theme }) => css`
    margin-bottom: ${theme.sizes.stepSize}px;
  `}
`

export const NoteEditorContentStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export const NoteEditorSaveStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize}px;
    }

    @media ${theme.mediaQueries.mobile} {
      justify-content: space-between;
    }
  `}
`

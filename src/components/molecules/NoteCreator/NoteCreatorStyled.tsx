import styled, { css, DefaultTheme } from 'styled-components'
import AddNotePrimaryIconSource from '../../../assets/icons/add-note-primary-icon.svg'

interface IProps {
  theme: DefaultTheme
}

export const NoteCreatorStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
  `}
`
export const NoteCreatorContentStyled = styled.div<IProps>`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > *:not(:first-child) {
      margin-top: ${theme.sizes.stepSize}px;
    }
  `}
`
export const NoteCreatorIconStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    background-image: url(${AddNotePrimaryIconSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  `}
`
export const NoteCreatorActionTextStyled = styled.div<IProps>`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
  `}
`

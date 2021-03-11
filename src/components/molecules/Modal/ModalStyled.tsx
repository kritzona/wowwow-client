import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {}

export const ModalStyled = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000000;
  `}
`
export const ModalWrapperStyled = styled.div`
  ${({ theme }) => css`
    min-height: 100px;
    background-color: ${theme.colors._100Color};
    box-shadow: ${theme.effects._08dp};
  `}
`
export const ModalBackgroundStyled = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  `}
`

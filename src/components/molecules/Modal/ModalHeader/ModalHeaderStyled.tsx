import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const ModalHeaderStyled = styled.div<IProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    padding: ${theme.sizes.stepSize * 2}px;
    padding-top: ${theme.sizes.stepSize * 4}px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.whiteColor};
  `}
`
export const ModalHeaderWestStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `}
`
export const ModalHeaderEastStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `}
`

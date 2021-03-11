import styled, { css, DefaultTheme } from 'styled-components'
import CrossWhiteIconSource from '../../../../assets/icons/cross-white-icon.svg'

interface IProps {
  theme: DefaultTheme
}

export const ModalCloseStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 32px;
    height: 32px;
    background-image: url(${CrossWhiteIconSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 20px 20px;
    cursor: pointer;

    padding: ${theme.sizes.stepSize}px;
  `}
`

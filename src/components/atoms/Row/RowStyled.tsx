import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  gutter?: boolean
}

const RowStyled = styled.div<IProps>`
  ${({ gutter }) => css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 16px;

    ${gutter &&
    css`
      grid-row-gap: 16px;
    `}
  `}
`

export default RowStyled

import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

export const ThumbNoteStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const ThumbNoteTitleStyled = styled.div<IProps>`
  ${({ theme }) => css`
    color: ${theme.colors._900Color};
  `}
`
export const ThumbNoteContentStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 70%;
    color: ${theme.colors._600Color};
    word-break: break-all;

    @media ${theme.mediaQueries.tablet} {
      width: 80%;
    }
    @media ${theme.mediaQueries.phablet} {
      width: 100%;
    }
    @media ${theme.mediaQueries.mobile} {
      width: 100%;
    }
  `}
`

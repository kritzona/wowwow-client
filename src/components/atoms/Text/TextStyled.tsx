import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  weight?: 'regular' | 'medium' | 'bold'
}

export const Heading1 = styled.h1<IProps>`
  ${({ theme }) => css`
    font-size: ${theme.sizes.h1FontSize}px;
    font-weight: ${theme.sizes.boldFontWeight};
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.h1LineHeight}px;
    margin: 0;
  `}
`
export const Heading2 = styled.h2<IProps>`
  ${({ theme }) => css`
    font-size: ${theme.sizes.h2FontSize}px;
    font-weight: ${theme.sizes.boldFontWeight};
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.h2LineHeight}px;
    margin: 0;
  `}
`
export const Heading3 = styled.h3<IProps>`
  ${({ theme }) => css`
    font-size: ${theme.sizes.h3FontSize}px;
    font-weight: ${theme.sizes.boldFontWeight};
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.h3LineHeight}px;
    margin: 0;
  `}
`
export const Heading4 = styled.h4<IProps>`
  ${({ theme }) => css`
    font-size: ${theme.sizes.h4FontSize}px;
    font-weight: ${theme.sizes.boldFontWeight};
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.h4LineHeight}px;
    margin: 0;
  `}
`
export const Heading5 = styled.h5<IProps>`
  ${({ theme }) => css`
    font-size: ${theme.sizes.h5FontSize}px;
    font-weight: ${theme.sizes.boldFontWeight};
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.h5LineHeight}px;
    margin: 0;
  `}
`
export const Heading6 = styled.h6<IProps>`
  ${({ theme }) => css`
    font-size: ${theme.sizes.h6FontSize}px;
    font-weight: ${theme.sizes.boldFontWeight};
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.h6LineHeight}px;
    margin: 0;
  `}
`

export const LargeText = styled.span<IProps>`
  ${({ theme, weight }) => css`
    font-size: ${theme.sizes.tlFontSize}px;
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.tlLineHeight}px;

    font-weight: ${() => {
      switch (weight) {
        case 'regular':
          return theme.sizes.regularFontWeight
        case 'medium':
          return theme.sizes.mediumFontWeight
        case 'bold':
          return theme.sizes.boldFontWeight

        default:
          return theme.sizes.regularFontWeight
      }
    }};
  `}
`
export const MediumText = styled.span<IProps>`
  ${({ theme, weight }) => css`
    font-size: ${theme.sizes.tmFontSize}px;
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.tmLineHeight}px;

    font-weight: ${() => {
      switch (weight) {
        case 'regular':
          return theme.sizes.regularFontWeight
        case 'medium':
          return theme.sizes.mediumFontWeight
        case 'bold':
          return theme.sizes.boldFontWeight

        default:
          return theme.sizes.regularFontWeight
      }
    }};
  `}
`
export const NormalText = styled.span<IProps>`
  ${({ theme, weight }) => css`
    font-size: ${theme.sizes.tnFontSize}px;
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.tnLineHeight}px;

    font-weight: ${() => {
      switch (weight) {
        case 'regular':
          return theme.sizes.regularFontWeight
        case 'medium':
          return theme.sizes.mediumFontWeight
        case 'bold':
          return theme.sizes.boldFontWeight

        default:
          return theme.sizes.regularFontWeight
      }
    }};
  `}
`
export const SmallText = styled.span<IProps>`
  ${({ theme, weight }) => css`
    font-size: ${theme.sizes.tsFontSize}px;
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.tsLineHeight}px;

    font-weight: ${() => {
      switch (weight) {
        case 'regular':
          return theme.sizes.regularFontWeight
        case 'medium':
          return theme.sizes.mediumFontWeight
        case 'bold':
          return theme.sizes.boldFontWeight

        default:
          return theme.sizes.regularFontWeight
      }
    }};
  `}
`

export const Subtitle1 = styled.span<IProps>`
  ${({ theme }) => css`
    font-size: ${theme.sizes.st1FontSize}px;
    font-weight: ${theme.sizes.mediumFontWeight};
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.st1LineHeight}px;
  `}
`
export const Subtitle2 = styled.span<IProps>`
  ${({ theme }) => css`
    font-size: ${theme.sizes.st2FontSize}px;
    font-weight: ${theme.sizes.mediumFontWeight};
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.st2LineHeight}px;
  `}
`

export const Caption = styled.span<IProps>`
  ${({ theme }) => css`
    font-size: ${theme.sizes.cptnFontSize}px;
    font-weight: ${theme.sizes.regularFontWeight};
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.cptnLineHeight}px;
  `}
`

export const Body1 = styled.span<IProps>`
  ${({ theme }) => css`
    font-size: ${theme.sizes.body1FontSize}px;
    font-weight: ${theme.sizes.regularFontWeight};
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.body1LineHeight}px;
  `}
`
export const Body2 = styled.span<IProps>`
  ${({ theme }) => css`
    font-size: ${theme.sizes.body2FontSize}px;
    font-weight: ${theme.sizes.regularFontWeight};
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.body2LineHeight}px;
  `}
`

export const ButtonText = styled.span<IProps>`
  ${({ theme }) => css`
    font-size: ${theme.sizes.btnFontSize}px;
    font-weight: ${theme.sizes.mediumFontWeight};
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.btnLineHeight}px;
    text-transform: uppercase;
  `}
`
export const Overline = styled.span<IProps>`
  ${({ theme }) => css`
    font-size: ${theme.sizes.olFontSize}px;
    font-weight: ${theme.sizes.regularFontWeight};
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.olLineHeight}px;
    text-transform: uppercase;
  `}
`

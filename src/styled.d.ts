import 'styled-components'

interface IThemeColors {
  primaryColor: string
  accentColor: string

  hoverPrimaryColor: string
  hoverAccentColor: string

  activePrimaryColor: string
  activeAccentColor: string

  strokePrimaryColor: string
  strokeAccentColor: string

  shadowPrimaryColor: string
  shadowAccentColor: string

  redColor: string
  greenColor: string
  blueColor: string

  whiteColor: string
  blackColor: string

  _900Color: string
  _800Color: string
  _700Color: string
  _600Color: string
  _500Color: string
  _400Color: string
  _300Color: string
  _200Color: string
  _100Color: string
}
interface IThemeSizes {
  stepSize: number

  sBorderRadius
  nBorderRadius: number

  h1FontSize: number
  h1LineHeight: number

  h2FontSize: number
  h2LineHeight: number

  h3FontSize: number
  h3LineHeight: number

  h4FontSize: number
  h4LineHeight: number

  h5FontSize: number
  h5LineHeight: number

  h6FontSize: number
  h6LineHeight: number

  tlFontSize: number
  tlLineHeight: number

  tmFontSize: number
  tmLineHeight: number

  tnFontSize: number
  tnLineHeight: number

  tsFontSize: number
  tsLineHeight: number

  st1FontSize: number
  st1LineHeight: number

  st2FontSize: number
  st2LineHeight: number

  body1FontSize: number
  body1LineHeight: number

  body2FontSize: number
  body2LineHeight: number

  btnFontSize: number
  btnLineHeight: number

  cptnFontSize: number
  cptnLineHeight: number

  olFontSize: number
  olLineHeight: number

  regularFontWeight: number
  mediumFontWeight: number
  boldFontWeight: number
}
interface IThemeEffects {
  _01dp: string
  _08dp: string

  primaryShadow: string
  accentShadow: string

  defaultTransition: string
}
interface IThemeMediaQueries {
  desktop: string
  laptop: string
  tablet: string
  phablet: string
  mobile: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark'
    colors: IThemeColors
    sizes: IThemeSizes
    effects: IThemeEffects
    mediaQueries: IThemeMediaQueries
  }
}

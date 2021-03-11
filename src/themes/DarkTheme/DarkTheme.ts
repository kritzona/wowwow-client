import { DefaultTheme } from 'styled-components'

export const DarkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    primaryColor: '#433466',
    accentColor: '#FFAF4F',

    hoverPrimaryColor: '#824C96',
    hoverAccentColor: '#ED733F',

    activePrimaryColor: '#824C96',
    activeAccentColor: '#ED733F',

    strokePrimaryColor: '#433466',
    strokeAccentColor: '#FFAF4F',

    shadowPrimaryColor: 'rgba(67, 52, 102, 0.1)',
    shadowAccentColor: 'rgba(255, 175, 79, 0.1)',

    redColor: '#EB5757',
    greenColor: '#27AE60',
    blueColor: '#2F80ED',

    whiteColor: '#FAFAFA',
    blackColor: '#212121',

    _900Color: '#212121',
    _800Color: '#424242',
    _700Color: '#616161',
    _600Color: '#757575',
    _500Color: '#9E9E9E',
    _400Color: '#BDBDBD',
    _300Color: '#E0E0E0',
    _200Color: '#EEEEEE',
    _100Color: '#FAFAFA',
  },
  sizes: {
    stepSize: 8,

    sBorderRadius: 4,
    nBorderRadius: 16,

    h1FontSize: 48.83,
    h1LineHeight: 48.83 * 1.3,

    h2FontSize: 39.06,
    h2LineHeight: 39.06 * 1.3,

    h3FontSize: 31.25,
    h3LineHeight: 31.25 * 1.3,

    h4FontSize: 25,
    h4LineHeight: 25 * 1.3,

    h5FontSize: 20,
    h5LineHeight: 20 * 1.3,

    h6FontSize: 20,
    h6LineHeight: 20 * 1.3,

    tlFontSize: 20,
    tlLineHeight: 20,

    tmFontSize: 18,
    tmLineHeight: 18,

    tnFontSize: 16,
    tnLineHeight: 16,

    tsFontSize: 14,
    tsLineHeight: 14,

    st1FontSize: 16,
    st1LineHeight: 16,

    st2FontSize: 14,
    st2LineHeight: 14,

    cptnFontSize: 12,
    cptnLineHeight: 12,

    body1FontSize: 16,
    body1LineHeight: 16,

    body2FontSize: 14,
    body2LineHeight: 14,

    btnFontSize: 14,
    btnLineHeight: 14,

    olFontSize: 10,
    olLineHeight: 10,

    regularFontWeight: 400,
    mediumFontWeight: 500,
    boldFontWeight: 700,
  },
  effects: {
    _01dp:
      '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
    _08dp:
      '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12)',
    primaryShadow: '',
    accentShadow: '',
    contentShadow:
      '0px -12px 36px rgb(0 0 0 / 14%), 0px -16px 17px rgb(0 0 0 / 12%)',
    neomorphShadow:
      'drop-shadow(-6px -6px 16px rgba(255, 255, 255, 0.25)) drop-shadow(6px 6px 12px rgba(209, 205, 199, 0.25))',
    defaultTransition: 'all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
  mediaQueries: {
    desktop: '(min-width: 1200px)',
    laptop: '(min-width: 992px) and (max-width: 1199px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    phablet: '(min-width: 576px) and (max-width: 767px)',
    mobile: '(max-width: 575px)',
  },
}

DarkTheme.effects.primaryShadow = `0px 1px 16px 0px ${DarkTheme.colors.shadowPrimaryColor}`
DarkTheme.effects.accentShadow = `0px 1px 16px 0px ${DarkTheme.colors.shadowAccentColor}`

import { DefaultTheme } from 'styled-components'

export const LightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    primaryColor: '#433466',
    accentColor: '#FFAF4F',

    hoverPrimaryColor: '#824C96',
    hoverAccentColor: '#ED733F',

    activePrimaryColor: '#824C96',
    activeAccentColor: '#ED733F',

    strokePrimaryColor: '#433466',
    strokeAccentColor: '#FFAF4F',

    shadowPrimaryColor: 'rgba(67, 52, 102, 0.8)',
    shadowAccentColor: 'rgba(255, 175, 79, 0.8)',

    redColor: '#EB5757',
    greenColor: '#27AE60',
    blueColor: '#2F80ED',

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
    nBorderRadius: 12,

    h1FontSize: 56,
    h1LineHeight: 61.6,

    h2FontSize: 48,
    h2LineHeight: 52.8,

    h3FontSize: 40,
    h3LineHeight: 44,

    h4FontSize: 32,
    h4LineHeight: 35.2,

    h5FontSize: 24,
    h5LineHeight: 26.4,

    h6FontSize: 20,
    h6LineHeight: 22,

    tlFontSize: 20,
    tlLineHeight: 28,

    tmFontSize: 18,
    tmLineHeight: 25.2,

    tnFontSize: 16,
    tnLineHeight: 22.4,

    tsFontSize: 14,
    tsLineHeight: 19.6,

    st1FontSize: 16,
    st1LineHeight: 22.4,

    st2FontSize: 14,
    st2LineHeight: 19.6,

    cptnFontSize: 12,
    cptnLineHeight: 16.6,

    body1FontSize: 16,
    body1LineHeight: 22.4,

    body2FontSize: 14,
    body2LineHeight: 19.6,

    btnFontSize: 14,
    btnLineHeight: 19.6,

    olFontSize: 10,
    olLineHeight: 14.6,

    regularFontWeight: 400,
    boldFontWeight: 700,
  },
  effects: {
    _01dp:
      '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
    _08dp:
      '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12)',
    primaryShadow: '',
    accentShadow: '',
  },
}

LightTheme.effects.primaryShadow = `0px 1px 16px 0px ${LightTheme.colors.shadowPrimaryColor}`
LightTheme.effects.accentShadow = `0px 1px 16px 0px ${LightTheme.colors.shadowAccentColor}`

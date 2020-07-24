import { merge } from 'theme-ui'
import { BaseTheme } from 'gatsby-theme-catalyst-core'

// https://www.gatsbycatalyst.com/docs/theme-ui

export default merge(BaseTheme, {
  sizes: {
    ...BaseTheme.sizes,
    maxContentWidth: '1440px',
  },
  colors: {
    ...BaseTheme.colors,
    // http://paletton.com/#uid=53l0X0kp-i2fksbkQmCuDcVFi7V
    primary: '#135058',
    secondary: '#301C63',
    accent: '#771748',
    highlight: '#f1f2b5',
    modes: {
      ...BaseTheme.colors.modes,
      dark: {
        ...BaseTheme.colors.modes.dark,
        primary: '#6F9DA4',
        secondary: '#9181B6',
        accent: '#B85E8C',
      },
    },
  },
  variants: {
    siteTitle: {
      color: 'primary',
      fontSize: [3, 4, null, 5, null],
    },
    navUl: {
      '& > li:nth-of-type(1)': {
        backgroundColor: 'accent',
        paddingX: 2,
      },
      '& > li:nth-of-type(1) > a': {
        color: 'light',
      },
    },
  },
})

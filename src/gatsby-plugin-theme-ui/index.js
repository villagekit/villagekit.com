import { merge } from 'theme-ui'
import { BaseTheme } from 'gatsby-theme-catalyst-core'

// https://www.gatsbycatalyst.com/docs/theme-ui

export default merge(BaseTheme, {
  variants: {
    siteTitle: {
      fontSize: [3, 4, null, 5, null],
    },
  },
})
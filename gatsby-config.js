module.exports = {
  siteMetadata: {
    title: `Village Kit`,
    description: `we provide modular building blocks for sustainable living`,
    keywords: [
      `turn-key`,
      `modular`,
      `open`,
      `building`,
      `blocks`,
      `grid`,
      `furniture`,
      `structures`,
      `construction`,
      `housing`,
      `village`,
      `kit`,
      `catalog`,
      `protocols`,
      `patterns`,
      `creative`,
      `playful`,
      `re-usable`,
    ],
    author: `Village Kit Limited`,
    siteUrl: `https://villagekit.com`,
    menuLinks: [
      {
        name: `Principles`,
        link: `/principles`,
        type: `internal`,
      },
      {
        name: `Team`,
        link: `/team`,
        type: `internal`,
      },
      {
        name: `Roadmap`,
        link: `/roadmap`,
        type: `internal`,
      },
      {
        name: `Research`,
        link: `https://roamresearch.com/#/app/villagekit/page/X2c6rF5zE`,
        type: `external`,
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `hello@villagekit.com`,
        location: `all`,
      },
      {
        name: `Twitter`,
        link: `https://twitter.com/villagekit`,
        location: `all`,
      },
      {
        name: `Instagram`,
        link: `https://instagram.com/village_kit`,
        location: `all`,
      },
      {
        name: `Facebook`,
        link: `https://facebook.com/villagekit`,
        location: `all`,
      },
      {
        name: `Github`,
        link: `https://www.github.com/villagekit`,
        location: `all`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        // Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        // displaySiteLogo: true,
        // displaySiteTitle: true,
        // displaySiteLogoMobile: true,
        // displaySiteTitleMobile: true,
        // invertLogo: false,
        // useStickyHeader: false,
        // useSocialLinks: true,
        // useColorMode: true,
        // footerContentLocation: "left", // "left", "right", "center"
      },
    },
    `gatsby-theme-catalyst-header-top`,
    `gatsby-theme-catalyst-footer`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `villagekit-com`,
        short_name: `villagekit`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '5',
        matomoUrl: 'https://analytics.mikey.nz',
        siteUrl: 'https://villagekit.com',
      },
    },
  ],
}

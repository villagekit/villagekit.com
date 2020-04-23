module.exports = {
  siteMetadata: {
    title: `Village Kit`,
    description: `Village Kit is a platform for open source, modular living infrastructure that evolves with you.`,
    keywords: [
      `modular`,
      `open`,
      `furniture`,
      `construction`,
      `village`,
      `kit`,
      `catalog`,
    ],
    author: `Village Kit Limited`,
    siteUrl: `https://villagekit.com`,
    menuLinks: [
      {
        name: `Team`,
        link: `/team`,
        type: `internal`,
      },
      {
        name: `Blog`,
        link: `/blog`,
        type: `internal`,
      },
      /*
      {
        name: `Page 2`,
        link: `/page-2`,
        type: `internal`, //internal or anchor
        subMenu: [
          {
            name: `Sub 1`,
            link: `/sub-1`,
            type: `internal`, //internal or anchor
          },
          {
            name: `Sub 2`,
            link: `/sub-2`,
            type: `internal`, //internal or anchor
          },
        ],
      },
      */
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
        link: `https://www.github.com/ehowey`,
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
      resolve: `gatsby-theme-catalyst-blog`,
      options: {
        excerptLength: `280`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}

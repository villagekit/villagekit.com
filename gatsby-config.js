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
      resolve: `gatsby-theme-catalyst-blog`,
      options: {
        excerptLength: `280`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            output: `/rss.xml`,
            title: `Village Kit RSS Feed`,
            query: `
              {
                allCatalystPost(
                  sort: { fields: [date, title], order: DESC }
                  limit: 1000
                  filter: { draft: { eq: false } }
                ) {
                  nodes {
                    id
                    slug
                    title
                    author
                    excerpt
                    date(formatString: "ddd, DD MMM YYYY HH:mm:ss ZZ")
                    featuredImage {
                      childImageSharp {
                        resized:resize(width: 1024) {
                          src
                        }
                      }
                    }
                  }
                }
              }
            `,
            serialize: ({
              query: {
                site: {
                  siteMetadata: { siteUrl },
                },
                allCatalystPost,
              },
            }) => {
              return allCatalystPost.nodes.map((node) => ({
                guid: `${siteUrl}/id/${node.id}`,
                link: `${siteUrl}${node.slug}`,
                title: node.title,
                author: node.author,
                description: node.excerpt,
                pubDate: node.date,
                image: `${siteUrl}${node.featuredImage.childImageSharp.resized.src}`,
              }))
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
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

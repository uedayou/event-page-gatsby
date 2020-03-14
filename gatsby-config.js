require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  pathPrefix: "/event-page-gatsby",
  siteMetadata: {
    siteTitle: `技術系イベントページ`,
    siteTitleAlt: `技術系イベントページ`,
    siteHeadline: `技術系イベントページ`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://uedayou.github.io/event-page-gatsby/`,
    // Used for SEO
    siteDescription: `技術系イベントで便利に利用できるGatsbyで作られたサイトです。`,
    // Will be set on the <html /> tag
    siteLanguage: `ja`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@uedayou`,
    // ここでサイトのライセンスを規定できます。たとえば、No rights reserved など
    siteLicense: `All rights reserved`,
    // ここでブログ部分のタイトルを指定できます。
    blogLabel: `ブログ`,
    // ここでタグ部分のタイトルを指定できます。
    tagsLabel: `タグ`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `ブログ`,
            slug: `/blog`,
          },
/*
          {
            title: `About`,
            slug: `/about`,
          },
*/
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/uedayou/`,
          },
          {
            name: `このリポジトリ`,
            url: `https://github.com/uedayou/event-page-gatsby`,
          },
          {
            name: `個人ページ`,
            url: `https://uedayou.net/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-XXXXXXXXX-1`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `技術系イベントページ`,
        short_name: `技術系イベントページ`,
        description: `技術系イベントで便利に利用できるGatsbyで作られたサイトです。`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}

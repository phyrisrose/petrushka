module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        StylesProvider: {
          injectFirst: true,
        },
      },
    },
    "gatsby-plugin-styled-components",
  ],
};

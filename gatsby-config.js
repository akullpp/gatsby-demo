module.exports = {
  siteMetadata: {
    title: "Doe's corner",
    author: 'John Doe',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-transformer-remark',
  ],
}

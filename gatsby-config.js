module.exports = {
  siteMetadata: {
    title: 'Hayden Sykes',
    author: 'Hayden Sykes',
    description: 'A temporary landing page while I try to learn how to build my own.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/hang-loose-emoji.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}

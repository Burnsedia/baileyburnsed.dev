// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'BaileyBurnsed.dev',
  siteUrl: 'baileyburnsed.dev',
  siteDescription: 'Just a nerdy tech blog',
  templates: {
    Post: '/blog/:title'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    }
  ],
}

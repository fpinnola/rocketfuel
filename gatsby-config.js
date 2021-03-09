module.exports = {
  proxy: {
    prefix: "/api",
    url: "https://cors-anywhere.herokuapp.com/corsdemo",
  },
  siteMetadata: {
    title: "Rocket Fuel Ventures",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};

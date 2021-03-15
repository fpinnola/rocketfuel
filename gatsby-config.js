module.exports = {
  proxy: {
    prefix: "/api",
    url: "https://cors-anywhere.herokuapp.com/corsdemo",
  },
  siteMetadata: {
    title: "Rocket Fuel Ventures",
    description: "Rocket Fuel Ventures",
    author: "Frank Pinnola",
    siteUrl: "http://rocketfuel.vercel.app"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};

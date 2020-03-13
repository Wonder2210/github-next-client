require('dotenv').config();

module.exports = {
    serverRuntimeConfig: {
      githubClientId: process.env.GITHUB_CLIENT_ID,
      githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    publicRuntimeConfig: {
      githubClientId: process.env.GITHUB_CLIENT_ID,
    },
  };
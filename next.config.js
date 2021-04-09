const withPWA = require('next-pwa')

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Refi App',
    siteDescription: 'A tool to make interacting with Firestore less painful.',
    siteKeywords: 'Refi App, firebase, firestore, GUI Tool, DB management',
    siteUrl: 'https://refiapp.io',
    siteImagePreviewUrl: 'https://refiapp.io/images/main.png',
    twitterHandle: '@cuthanh15'
  }
})

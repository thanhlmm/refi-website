const withPWA = require('next-pwa')

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Refi App',
    siteDescription: 'A tool to make developer less painful when interacting with Firestore DB.',
    siteKeywords: 'Refi App, firebase, firestore, GUI Tool, DB management',
    siteUrl: 'https://refiapp.vercel.app',
    siteImagePreviewUrl: '/images/blue.png',
    twitterHandle: '@cuthanh15'
  }
})

import { useEffect } from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import '@/styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({duration: 1200, delay: 200, once:true})
  })  

  return (
    <Layout>
      <SEO 
        title={process.env.siteTitle}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

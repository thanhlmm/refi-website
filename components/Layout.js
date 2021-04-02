import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

function Layout({ children }) {
  return (
    <>
      <Nav />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout

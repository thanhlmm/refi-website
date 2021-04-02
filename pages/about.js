import SEO from '@/components/SEO'
import PageHeader from '@/components/PageHeader'

function AboutPage() {
  const pageTitle = `About | ${process.env.siteTitle}`
  return (
    <div className="container mx-auto mb-20 min-h-screen">
      <SEO title={pageTitle} />
      <PageHeader text="About Us" />
      <p className="w-full px-6 py-12 mx-auto max-w-4xl text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos 
        dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.   
      </p>
    </div>
  )
}

export default AboutPage

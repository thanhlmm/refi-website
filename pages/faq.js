import SEO from '@/components/SEO'
import FAQSection from '@/components/FAQSection'

function FAQPage() {
  const pageTitle = `FAQ | ${process.env.siteTitle}`
  return (
    <div className="container mx-auto mb-20 min-h-screen">
      <SEO title={pageTitle} />
      <FAQSection 
        bgColor="bg-white" 
        header="page"
      />
    </div>
  )
}

export default FAQPage

import SEO from '@/components/SEO'
import PricingSection from '@/components/PricingSection'

function PricingPage() {
  const pageTitle = `Pricing | ${process.env.siteTitle}`
  return (
    <div className="container mx-auto mb-20">
      <SEO title={pageTitle} />
      <PricingSection header="page" />
    </div>
  )
}

export default PricingPage

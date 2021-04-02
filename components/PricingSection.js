import PricingPanel from './PricingPanel'
import PageHeader from '@/components/PageHeader'
import SectionHeader from '@/components/SectionHeader'

function PricingSection({ header }) {

  return (
    <div className="mx-auto w-full px-2 sm:px-0 max-w-6xl pb-6 sm:pb-8 lg:pb-10 pt-2">
      {
        header === 'page' ?
          <PageHeader text="Pricing" />
          :
          <SectionHeader text="Pricing" />
      }
      <div className="px-2 sm:px-4 lg:px-8 max-w-6xl mx-auto text-gray-900">
        <div className="flex flex-col md:space-x-4 md:flex-row justify-center items-start">
          <PricingPanel
            plan="Basic"
            originalPrice=""
            price="$0/month"
            description="Try us for Free for 14 days! No Credit Card Required."
            bullets={[
              'Basic Feature #1',
              'Basic Feature #2'
            ]}
            cta="Get started"
            ctaAction={() => console.log('Go to plan!')}
          />
          <PricingPanel
            plan="Standard"
            originalPrice="$29.99"
            price="$19.99/month"
            description="Get all our standard features in one simple plan."
            bullets={[
              'Basic Feature #1',
              'Basic Feature #2',
              'Pro Feature #1',
              'Pro Feature #2'
            ]}
            cta="Get started"
            ctaAction={() => console.log('Go to plan!')}
          />
          <PricingPanel
            plan="Professional"
            originalPrice="$49.99"
            price="$29.99/month"
            description="Get all our professional features in one simple plan."
            bullets={[
              'Basic Feature #1',
              'Basic Feature #2',
              'Pro Feature #1',
              'Pro Feature #2'
            ]}
            cta="Get started"
            ctaAction={() => console.log('Go to plan!')}
          />
        </div>
      </div>
    </div>
  )
}

export default PricingSection

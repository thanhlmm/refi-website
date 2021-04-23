import { useRouter } from 'next/router'
import PricingPanel from './PricingPanel'
import PageHeader from '@/components/PageHeader'
import SectionHeader from '@/components/SectionHeader'

function PricingSection({ header }) {
  const router = useRouter()

  return (
    <div className="w-full max-w-6xl px-2 pt-2 pb-6 mx-auto mb-4 sm:px-0 sm:pb-8 lg:pb-10" id="pricing">
      {
        header === 'page' ?
          <PageHeader text="Pricing" />
          :
          <SectionHeader text="Pricing" />
      }
      <script async data-uid="e29dbf4a79" src="https://awesome-painter-967.ck.page/e29dbf4a79/index.js"></script>
      <div className="max-w-6xl px-2 mx-auto text-gray-900 sm:px-4 lg:px-8">
        <div className="flex flex-col items-start justify-center md:space-x-4 md:flex-row">
          <PricingPanel
            plan="Basic"
            originalPrice=""
            price="$0/month"
            description="Free to use for your daily work."
            bullets={[
              'Table view',
              'JSON editor',
              'Preview changes',
              'Import & export',
              'Privacy'
            ]}
            cta="Download"
            ctaAction={() => router.push('https://refi-updater.vercel.app/')}
          />
          <PricingPanel
            plan="Standard"
            originalPrice="$10"
            price="$0/month"
            description="We're currently offer early users for free. Join the waiting list and we will send you a discount after all features is launched."
            bullets={[
              'All basic features',
              'Multiple tabs',
              'Dark mode (Coming soon)',
              'Your idea'
            ]}
            cta={
              <a data-formkit-toggle="e29dbf4a79" href="https://awesome-painter-967.ck.page/e29dbf4a79">Join the line</a>
            }
            ctaAction={(e) => { e.preventDefault() }}
            isLarger
          />
          <PricingPanel
            plan="Partner"
            originalPrice="$15"
            price="$0/month"
            description="Get 2 licenses for you and your partner."
            bullets={[
              'All basic features',
              'Multiple tabs',
              'Dark mode (Coming soon)',
              'Your idea'
            ]}
            cta={
              <a data-formkit-toggle="e29dbf4a79" href="https://awesome-painter-967.ck.page/e29dbf4a79">Join the line</a>
            }
            ctaAction={(e) => { e.preventDefault() }}
          />
        </div>
      </div>
    </div>
  )
}

export default PricingSection

import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import HowItWorks from '@/components/HowItWorks'
import BenefitSection from '@/components/BenefitSection'
import FAQSection from '@/components/FAQSection'
import PricingSection from '@/components/PricingSection'
import Features from '@/components/Features'
import TestimonialSection from '@/components/TestimonialSection'
import CTA from '@/components/CTA'

function IndexPage() {

  return (
    <>
      {/* hero section */}
      <Hero />

      {/* social proof section */}
      <SocialProof />

      {/* how it works section */}
      {/* <HowItWorks /> */}

      {/* benefits section */}
      <BenefitSection />

      {/* features section */}
      <Features />

      {/* pricing section */}
      <PricingSection
        header="section"
      />

      {/* faq section */}
      <FAQSection
        bgColor="bg-white"
        header="section"
      />



      {/* testimonials section */}
      {/* <TestimonialSection /> */}

      {/* call to action section */}
      <CTA />
    </>
  )
}

export default IndexPage

import Testimonial from './Testimonial'
import SectionHeader from '@/components/SectionHeader'

function TestimonialSection() {

  return (
    <div className="pt-4">
      <div className="w-full px-2 max-w-5xl mx-auto">        
        <SectionHeader text="Here's what our customers are saying" />
        <p className="mt-6 text-center sm:text-left text-base font-body text-gray-700 sm:text-lg px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="pt-16 flex flex-col items-center sm:flex-row sm:justify-around">
          <Testimonial
            name="Jane Doe"
            jobTitle="CEO, SpaceX"
            image="/images/testimonial-image-1.jpeg"
            review="This is an amazing product! I am blown away by the number of features and the customer service. Highly recommend."
          />
          <Testimonial
            name="John Doe"
            jobTitle="CTO, Tesla"
            image="/images/testimonial-image-2.jpeg"
            review="Great product. Great team. I have never been more excited to recommend a product to my friends."
          />
          <Testimonial
            name="Rita Doe"
            jobTitle="COO, SolarCity"
            image="/images/testimonial-image-3.jpeg"
            review="What can I say? You absolutely have to try this thing otherwise you're going to miss out. I promise you won't regret it."
          />
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection

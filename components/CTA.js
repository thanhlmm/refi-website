import ButtonsCTA from './ButtonsCTA'
import SectionHeader from '@/components/SectionHeader'

function CTA() {

  return (
    <div className="max-w-6xl px-4 py-12 mx-auto text-center sm:px-6 sm:pb-20 lg:px-8">
      <SectionHeader text="Get exclusive access now" />
      <p className="my-8 text-base leading-7 text-gray-700 sm:text-lg lg:text-xl font-body lg:mx-auto">
        Do not waste your time on poor things. Let's use a better way!
      </p>
      <ButtonsCTA />
    </div>
  )
}

export default CTA

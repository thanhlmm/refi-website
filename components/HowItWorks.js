import Step from './Step'
import SectionHeader from '@/components/SectionHeader'

function HowItWorks() {

  return (
    <div className="px-4 sm:py-2">
      <div className="w-full mx-auto text-center lg:w-2/3">
        <SectionHeader text="Interacting with Firestore made easy" />
        <p className="py-2 text-lg text-gray-700 font-body">
          What's the problem? How will you solve it? What are the results?
        </p>
      </div>
      <div className="flex flex-col items-center max-w-6xl py-4 mx-auto lg:flex-row lg:justify-center lg:py-8">
        <Step
          image="/images/how-it-works-1.svg"
          title="Step #1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Step
          image="/images/how-it-works-2.svg"
          title="Step #2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Step
          image="/images/how-it-works-3.svg"
          title="Step #3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  )
}

export default HowItWorks

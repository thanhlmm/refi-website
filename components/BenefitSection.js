import BenefitDescription from './BenefitDescription'
import BenefitImage from './BenefitImage'
import SectionHeader from '@/components/SectionHeader'

function BenefitSection(props) {

  return (
    <div className="px-2 py-4 mx-auto md:px-4 lg:px-8 lg:mt-4 bg-palette-lighter">
      <SectionHeader text="Interacting with Firestore made easy" />
      <div className="relative flex flex-col justify-center py-6 md:flex-row lg:py-12">
        <BenefitDescription
          heading="Table view, update in realtime"
          fade="right"
          description="Have a birds-eye view on your data and change lots of document at once."
          bulletpoints={[
            'Customizable fields to display',
            'Filter & sort the result',
            'Inline editing right on it',
            'All changes is updated in realtime'
          ]}
        />
        <BenefitImage fade="left" imageSrc="/images/benefit-1.png" imageWidth="w-5/6 md:w-12/12" />
      </div>
      <div className="relative flex flex-col-reverse py-6 md:flex-row">
        <BenefitImage fade="right" imageSrc="/images/benefit-2.png" imageWidth="w-5/6 md:w-9/12" />
        <BenefitDescription
          fade="left"
          heading="Use VSCode to create and edit document"
          description="No more clicking on complicated things to get a document's data. We integrated Monaco aka VS Code editor."
          bulletpoints={[
            'View/Edit your document as JSON',
            'All VS Code features & hotkeys',
          ]}
        />
      </div>
      <div className="flex flex-col py-6 md:flex-row lg:py-12">
        <BenefitDescription
          fade="right"
          heading="Built for Developers"
          description="With hotkeys, you can do anything without leaving your keyboard. We are developers too!"
          bulletpoints={[
            <>Start anything with <code className="text-red-700">Cmd + Shift + P</code> or <code className="text-red-700">Cmd + /</code></>,
            'Familiar hotkeys inspired by VS Code',
            'Boost your productivity'
          ]}
        />
        <BenefitImage fade="left" imageSrc="/images/benefit-3.png" imageWidth="w-5/6 md:w-9/12" />
      </div>
      <div className="relative flex flex-col-reverse py-6 md:flex-row">
        <BenefitImage fade="right" imageSrc="/images/benefit-4.png" imageWidth="w-5/6 md:w-9/12" />
        <BenefitDescription
          fade="left"
          heading="Preview changes before commit"
          description="You're now freely edit anything without making production crash"
          bulletpoints={[
            'Preview changes',
            'Revert all or just a piece of change',
          ]}
        />
      </div>
    </div>
  )
}

export default BenefitSection

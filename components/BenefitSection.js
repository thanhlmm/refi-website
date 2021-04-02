import BenefitDescription from './BenefitDescription'
import BenefitImage from './BenefitImage'
import SectionHeader from '@/components/SectionHeader'

function BenefitSection(props) {

  return (
    <div className="px-2 py-4 mx-auto md:px-4 lg:px-8 lg:mt-4 bg-palette-lighter">
      <SectionHeader text="The ultimate tool for interactive with Firestore" />
      <div className="relative flex flex-col justify-center py-6 md:flex-row lg:py-12">
        <BenefitDescription
          heading="Change lots of documents at the same time"
          fade="right"
          description="With table view, you can easily change lots of document at the same time."
          bulletpoints={[
            'Customizable fields to display',
            'Get an overview on your collection',
            'Inline editing right on it'
          ]}
        />
        <BenefitImage fade="left" imageSrc="/images/benefit-1.png" imageWidth="w-5/6 md:w-9/12" />
      </div>
      <div className="relative flex flex-col-reverse py-6 md:flex-row">
        <BenefitImage fade="right" imageSrc="/images/benefit-2.png" imageWidth="w-5/6 md:w-9/12" />
        <BenefitDescription
          fade="left"
          heading="Create and edit document like in your home"
          description="No more clicking on complicated things to get a document data. We integrated Monaco aka VS Code editor."
          bulletpoints={[
            'View/Edit your document as JSON',
            'All VS Code feature',
          ]}
        />
      </div>
      <div className="flex flex-col py-6 md:flex-row lg:py-12">
        <BenefitDescription
          fade="right"
          heading="Build for Developer"
          description="With hotkeys, you can do anything without leaving your keyboard. We are developer too!"
          bulletpoints={[
            <>Start anything with <code>Cmd + Shift + P</code> or <code>Cmd + /</code></>,
            'Familiars hotkey inspired by VS Code',
            'Boost your productive'
          ]}
        />
        <BenefitImage fade="left" imageSrc="/images/benefit-3.png" imageWidth="w-5/6 md:w-9/12" />
      </div>
      <div className="relative flex flex-col-reverse py-6 md:flex-row">
        <BenefitImage fade="right" imageSrc="/images/benefit-4.png" imageWidth="w-5/6 md:w-9/12" />
        <BenefitDescription
          fade="left"
          heading="Confidence edit your data"
          description="With preview changes, feel free to edit anything without making production crash"
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

import Question from './Question'
import PageHeader from '@/components/PageHeader'
import SectionHeader from '@/components/SectionHeader'

function FAQSection({ bgColor, header }) {

  return (
    <div className={bgColor}>
      <div className="w-full max-w-4xl px-4 pt-2 pb-2 mx-auto sm:pt-4">
        {
          header === 'page' ?
            <PageHeader text="Frequently Asked Questions" />
            :
            <SectionHeader text="Frequently Asked Questions" />
        }
        <div className="pt-6 sm:pt-10">
          <hr className="border-b border-gray-100" />
          <Question
            question="Is my data safe?"
            answer="Definitely. We never send your data anywhere. Your data is yours and always yours"
          />
          <Question
            question="Is this free?"
            answer="We currently offer it as free. However in a long-term, we will charge you small fee for some advanced features"
          />
          <Question
            question="Why we build this tool?"
            answer={<>When I first working with FireStore I had to face many issues<br /><br />

            - How can I filter documents by some criteria?<br />
            - How can I insert a new document from a JSON, in fact,  I have to write a script to insert some new documents<br />
            - I have to use GC Storage to backup the data, which I need to spend more time learning about. WTF 🤬 why not just export and import by a JSON file?<br />
            - If I edit the same field of many documents, I need to go through documents and documents to edit.</>}
          />
        </div>
      </div>
    </div>
  )
}

export default FAQSection

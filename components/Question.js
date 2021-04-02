import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Question({ question, answer }) {

  const [expand, setExpand] = useState(false)

  const expandClass = expand ? 'display' : 'hidden'
  const ansClass = `${expandClass} p-4  whitespace-pre-line`

  return (
    <div className="border border-t-0 border-gray-100 rounded shadow">
      <div className="relative p-4 text-xl font-medium">
        <div className="w-5/6">
          {question}
        </div>
        <button aria-label="question-expand-arrow" onClick={() => setExpand(!expand)} className="absolute top-0 right-0 p-4 text-xl focus:outline-none">
          {
            expand ?
              <FontAwesomeIcon icon={faChevronUp} className="w-5" />
              :
              <FontAwesomeIcon icon={faChevronDown} className="w-5" />
          }
        </button>
      </div>
      <div className={ansClass}>{answer}</div>
    </div>
  )
}

export default Question

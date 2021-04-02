import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Feature({ featureTitle }) {

  return (
    <div className="flex items-center justify-center mt-6 md:mt-0">
      <div className="flex items-center justify-center h-12 w-12">
        <FontAwesomeIcon className="text-palette-primary w-6 inline-flex" icon={faBolt} size="2x" />
      </div>
      <div className="text-xl leading-6 font-bold text-gray-900">{featureTitle}</div>
    </div>
  )
}

export default Feature

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BenefitDescription({ heading, description, bulletpoints, fade }) {

  const dataAOS = `fade-${fade}`

  return (
    <div className="relative w-full md:w-1/2 p-4 md:p-0 md:pt-12 max-w-lg mx-auto" data-aos={dataAOS}>
      <h2 className="text-2xl md:text-3xl text-center md:text-justify font-bold tracking-wide leading-tight pb-6">
        {heading}
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-600 lg:leading-9">
        {description}
      </p>
      <ul className="mt-4 text-base md:text-xl text-gray-600">
        {bulletpoints.map((point, index) => (
          <li key={index} className="py-2">
            <FontAwesomeIcon className="mr-4 text-green-500 w-4 inline-flex" icon={faCheckCircle} />
              {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BenefitDescription

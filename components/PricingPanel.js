import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function PricingPanel({ plan, originalPrice, price, description, bullets, cta, ctaAction, isLarger }) {

  return (
    <div className={`${isLarger ? "w-80" : "w-64"} w-full max-w-sm mx-auto mt-12 border border-gray-100 rounded shadow h-120 md:w-1/3`} data-aos="fade-up">
      <div className="px-3 py-4">
        <h2 className="text-lg font-semibold lg:text-xl">{plan}</h2>
        {
          originalPrice === "" ?
            <h2 className="text-xl font-bold lg:text-2xl">{price}</h2>
            :
            <h2 className="text-xl font-bold lg:text-2xl"><span className="pr-2 text-lg text-red-600 line-through lg:text-xl">{originalPrice}</span>{price}</h2>
        }
        <p className="mt-4">{description}</p>
      </div>
      <div className="w-full border border-gray-100"></div>
      <h2 className="px-3 py-2 text-lg font-semibold">What's included?</h2>
      <div className="h-48 px-3">
        {bullets.map((bullet, index) =>
          <div key={index} className="py-2">
            <FontAwesomeIcon className="inline-flex w-4 mr-2 text-green-500" icon={faCheckCircle} />
            <span>{bullet}</span>
          </div>
        )}
      </div>
      <button onClick={ctaAction} className="flex justify-center w-32 px-4 py-2 mx-auto my-4 font-semibold text-white rounded bg-palette-primary hover:bg-palette-dark focus:outline-none">
        {cta}
      </button>
    </div >
  )
}

export default PricingPanel

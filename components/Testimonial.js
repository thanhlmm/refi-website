import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Testimonial({review, name, jobTitle, image}) {

  return (
    <div className="w-64 mb-12 sm:mb-0 bg-white shadow-lg border border-gray-200 p-6 rounded transform transition ease-in hover:scale-110 duration-200" data-aos="flip-right">
      <p className="text-xl md:text-2xl leading-8 text-gray-700">
        <FontAwesomeIcon className="text-palette-primary mr-1 w-4 inline-flex transform -translate-y-2" icon={faQuoteLeft} />
          {review}
      </p>
      <div className="flex items-center">
        <img
          height="80" 
          width="80"
          src={image}
          alt="testimonial-avatar-1"
          className="flex-shrink-0 h-20 w-20 rounded-full my-6 object-cover"
        />
        <div className="flex flex-col ml-4">
          <h2 className="text-lg leading-6 font-bold text-gray-900">{name}</h2>
          <p className="leading-6 font-body text-gray-700">{jobTitle}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial

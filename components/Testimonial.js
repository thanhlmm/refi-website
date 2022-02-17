import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Testimonial({ review, name, jobTitle, image }) {

  return (
    <div className="p-6 mb-12 transition duration-200 ease-in transform bg-white border border-gray-200 rounded shadow-lg w-96 sm:mb-0 hover:scale-110" data-aos="flip-right">
      <p className="text-xl leading-8 text-gray-700 md:text-2xl">
        <FontAwesomeIcon className="inline-flex w-4 mr-1 transform -translate-y-2 text-palette-primary" icon={faQuoteLeft} />
        {review}
      </p>
      <div className="flex items-center">
        <img
          height="80"
          width="80"
          src={image}
          alt="testimonial-avatar-1"
          className="flex-shrink-0 object-cover w-20 h-20 my-6 rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h2 className="text-lg font-bold leading-6 text-gray-900">{name}</h2>
          <p className="leading-6 text-gray-700 font-body">{jobTitle}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial

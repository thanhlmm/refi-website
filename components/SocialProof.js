import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStripe, faLyft, faSpotify, faPiedPiper } from '@fortawesome/free-brands-svg-icons'

function SocialProof() {

  return (
    <ul className="flex justify-center items-center list-none py-1">
      <li className="p-4">
        <FontAwesomeIcon className="w-10 sm:w-12 text-gray-600" icon={faStripe} />
      </li>
      <li className="p-4">
        <FontAwesomeIcon className="w-10 sm:w-12 text-gray-600" icon={faLyft} />
      </li>
      <li className="p-4">
        <FontAwesomeIcon className="w-10 sm:w-12 text-gray-600" icon={faSpotify} />
      </li>
      <li className="p-4">
        <FontAwesomeIcon className="w-10 sm:w-12 text-gray-600" icon={faPiedPiper} />
      </li>
    </ul>
  )
}

export default SocialProof

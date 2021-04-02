import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStripe, faLyft, faSpotify, faPiedPiper } from '@fortawesome/free-brands-svg-icons'

function SocialProof() {

  return (
    <ul className="flex items-center justify-center py-1 list-none">
      <li className="p-4">
        <FontAwesomeIcon className="w-10 text-gray-600 sm:w-12" icon={faStripe} />
      </li>
      <li className="p-4">
        <FontAwesomeIcon className="w-10 text-gray-600 sm:w-12" icon={faLyft} />
      </li>
      <li className="p-4">
        <FontAwesomeIcon className="w-10 text-gray-600 sm:w-12" icon={faSpotify} />
      </li>
      <li className="p-4">
        <FontAwesomeIcon className="w-10 text-gray-600 sm:w-12" icon={faPiedPiper} />
      </li>
    </ul>
  )
}

export default SocialProof

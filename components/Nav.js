import { useState } from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import Link from 'next/link'

function Nav() {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header>
      <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto md:p-6">
        <Link href="/" passHref>
          <a className="p-4 cursor-pointer focus:outline-none">
            <h1 className="flex items-center no-underline">
              <img height="32" width="32" alt="logo" className="object-contain w-8 h-8 p-0.5 mr-2" src="/icon.png" />
              <span className="text-xl font-bold tracking-tight">
                {process.env.siteTitle}
              </span>
            </h1>
          </a>
        </Link>

        {isExpanded
          ?
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            type="button"
            className="inline-flex items-center justify-center px-6 py-4 text-gray-600 transition duration-150 ease-in-out bg-white rounded-md hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-white"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          :
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            type="button"
            className="inline-flex items-center justify-center px-6 py-4 text-gray-600 transition duration-150 ease-in-out bg-white rounded-md md:hidden hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
            id="main-menu"
            aria-label="Main menu"
            aria-haspopup="true"
          >
            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        }

        {isExpanded ?
          <MobileNav toggleExpansion={toggleExpansion} />
          :
          <DesktopNav />
        }
      </div>
    </header >
  )
}

export default Nav

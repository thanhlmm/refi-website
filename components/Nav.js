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
          <a className="focus:outline-none p-4 cursor-pointer">
            <h1 className="flex items-center no-underline">
              <img height="32" width="32" alt="logo" className="h-8 w-8 object-contain" src="/icon.svg" />
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
            className="bg-white inline-flex items-center justify-center px-6 py-4 rounded-md
              text-gray-600 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-white
              transition duration-150 ease-in-out"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          :
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            type="button"
            className="bg-white md:hidden inline-flex items-center justify-center px-6 py-4 rounded-md 
              text-gray-600 hover:text-gray-700 hover:bg-gray-100 focus:outline-none 
              transition duration-150 ease-in-out"
            id="main-menu"
            aria-label="Main menu"
            aria-haspopup="true"
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
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

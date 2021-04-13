import Link from 'next/link'

function DesktopNav() {
  return (
    <nav
      className="hidden md:block md:flex md:items-center md:w-auto"
    >
      {[
        {
          route: `#pricing`,
          title: `Pricing`,
        },
        {
          route: `#faq`,
          title: `FAQ`,
        },
        {
          route: `https://dev.to/thanhlm`,
          title: `Blog`,
        },
        {
          route: `https://docs.refiapp.workers.dev/`,
          title: `Changelogs`,
        },
      ].map((link) => (
        <Link
          href={link.route}
          passHref
          key={link.title}
        >
          <a
            className="justify-center block p-4 py-4 mx-auto font-medium font-semibold text-gray-600 no-underline transition duration-150 ease-in-out md:mt-0 hover:text-gray-700 focus:outline-none"
          >
            {link.title}
          </a>
        </Link>
      ))}
      <Link
        passHref
        href="https://refi-updater.vercel.app/"
      >
        <a
          className="block px-6 py-2 mt-4 font-semibold text-white no-underline transition duration-150 ease-in-out rounded md:inline-block md:mt-0 md:ml-8 bg-palette-primary hover:bg-palette-dark focus:outline-none">
          Download
        </a>
      </Link>
    </nav>
  )
}

export default DesktopNav

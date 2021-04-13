import { useRouter } from 'next/router'

function MobileNav({ toggleExpansion }) {
  const router = useRouter()

  const navBtnClicked = (route) => {
    toggleExpansion(false)
    router.push(route)
  }

  return (
    <nav
      className="block w-full h-screen md:block md:flex md:items-center md:w-auto"
    >
      <div className="border-b border-gray-300"></div>
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
        <button
          className="block w-full py-4 mx-auto font-medium font-semibold text-gray-600 no-underline transition duration-150 ease-in-out border-b border-gray-300 md:mt-0 hover:text-gray-700 focus:outline-none"
          key={link.title}
          onClick={() => navBtnClicked(link.route)}
        >
          {link.title}
        </button>
      ))}
      <button
        className="block w-5/6 px-6 py-2 mx-auto mt-4 text-lg font-semibold text-white no-underline transition duration-150 ease-in-out rounded bg-palette-primary hover:bg-palette-dark focus:outline-none"
        onClick={() => navBtnClicked('https://refi-updater.vercel.app/')}
      >
        Download
      </button>
    </nav>
  )
}

export default MobileNav

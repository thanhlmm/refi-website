import { useRouter } from 'next/router'

function ButtonCTA() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 sm:flex-row">
      <button
        className="w-40 px-4 py-2 text-xl font-semibold text-white transition duration-150 ease-in-out border border-transparent rounded focus:outline-none md:px-6 bg-palette-primary hover:bg-palette-dark"
        onClick={() => router.push('https://github.com/thanhlmm/refi-app/releases')}
        id="download-app"
      >
        Download
      </button>
      {/* <button
        className="w-40 px-4 py-2 text-xl transition duration-150 ease-in-out bg-white border border-transparent rounded focus:outline-none md:px-6 hover:bg-palette-lighter border-palette-dark text-palette-dark"
        onClick={() => router.push('/contact')}
      >
        Contact us
      </button> */}
    </div>
  )
}

export default ButtonCTA

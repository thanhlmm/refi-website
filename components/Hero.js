import ButtonsCTA from './ButtonsCTA'
import GitHubButton from 'react-github-btn'

function Hero() {

  return (
    <div className="bg-gradient-to-t from-palette-light">
      <div className="flex flex-col items-center max-w-6xl px-6 pb-4 mx-auto mt-10 lg:flex-row lg:justify-around md:pb-6 lg:pb-8 lg:px-6 lg:pb-16">
        <div className="w-4/5 py-4 mx-auto text-center lg:text-left sm:w-2/3 lg:w-2/5 lg:pr-6" data-aos="fade-in">
          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl">
            Refi App
          </h2>
          <p className="mt-6 text-base text-gray-700 font-body sm:text-lg md:text-xl">
            An open-source GUI tool to make interacting with Firestore less painful
          </p>
          <div className="flex items-center justify-center my-5 space-x-4 sm:my-8 lg:justify-start">
            <ButtonsCTA />
            <a href="https://github.com/thanhlmm/refi-app" target="_blank">
              <img src="/gh.svg" className="w-8 h-8 opacity-80" />
            </a>
            <GitHubButton href="https://github.com/thanhlmm/refi-app" data-icon="octicon-star" data-show-count="true" aria-label="Star thanhlmm/refi-app on GitHub">Star</GitHubButton>
          </div>
        </div>
        <div className="mx-auto mt-6 mb-16 lg:m-0 lg:w-3/5" data-aos="fade-up">
          <img className="z-20 object-contain w-full mx-auto rounded shadow-lg" src="/images/main.gif" alt="main-img" />
        </div>
      </div>
      <div className="relative">
        <div className="custom-shape-divider-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Hero

import FooterLinkColumn from './FooterLinkColumn'
import SocialIcon from './SocialIcon'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="pt-8 pb-4 text-white bg-palette-primary">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <h2 className="mb-4 text-3xl font-semibold md:mb-0">
              We are here to help
            </h2>
            <p className="mt-2 mb-2 text-lg text-white">
              We look forward to having you be part of our community.
              </p>
            <div className="mt-6">
              <SocialIcon icon={faTwitter} url="https://twitter.com/cuthanh15" />
              <SocialIcon icon={faGithub} url="https://github.com/thanhlmm/refi-app" />
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex flex-wrap mb-6 items-top">
              <FooterLinkColumn
                header="Product"
                items={[
                  {
                    label: 'Start here',
                    link: '/'
                  },
                  {
                    label: 'Changelogs',
                    link: 'https://docs.refiapp.workers.dev/'
                  },
                  {
                    label: 'FAQ',
                    link: '/faq'
                  },
                ]}
              />
              <FooterLinkColumn
                header=""
                items={[
                  {
                    label: 'Blog',
                    link: 'https://dev.to/thanhlm'
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full px-4 mx-auto text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-white">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                href="/"
                className="text-white"
              >
                {process.env.siteTitle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

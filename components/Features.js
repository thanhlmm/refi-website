import Feature from './Feature'
import SectionHeader from '@/components/SectionHeader'

function Features() {

  return (
    <div className="pt-2 pb-10 bg-gray-50" data-aos="fade-up">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <SectionHeader text="Features" />
          <p className="max-w-2xl mt-4 text-xl leading-7 text-center text-gray-700 font-body lg:mx-auto">
            With awesome features
          </p>
        </div>

        <div className="mt-10">
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {[
              'Privacy',
              'Feature # 2',
              'Feature # 3',
              'Feature # 4',
              'Feature # 5',
              'Feature # 6'
            ].map((item, index) => (
              <li key={index}>
                <Feature
                  featureTitle={item}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Features

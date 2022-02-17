import Testimonial from './Testimonial'
import SectionHeader from '@/components/SectionHeader'

function TestimonialSection() {

  return (
    <div className="pt-4">
      <div className="w-full max-w-5xl px-2 mx-auto">
        <SectionHeader text="Here's what our customers are saying" />
        {/* <p className="px-2 mt-6 text-base text-center text-gray-700 sm:text-left font-body sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p> */}
        <div className="flex flex-col items-center pt-16 space-x-4 sm:flex-row sm:justify-around">
          <Testimonial
            name="Hieu Nguyen"
            jobTitle="Developer"
            image="https://ph-avatars.imgix.net/3002026/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=170&h=170&fit=crop&dpr=2"
            review="What a great tool and generous of you for making it open-source. I love using Firebase and was a bit confusing when starting to use it."
          />
          <Testimonial
            name="Dave Jeffery"
            jobTitle="Founder @ ToDesktop"
            image="https://ph-avatars.imgix.net/253580/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=170&h=170&fit=crop&dpr=2"
            review="I love this. It works great. The official Firestore UI is slow and difficult to navigate. This fixes all those issues. 🙏"
          />
          <Testimonial
            name="GamingMaster29"
            jobTitle="Reddit"
            image="https://ph-avatars.imgix.net/3892565/f60906b7-0fd1-4e2b-b691-38e401695466?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=170&h=170&fit=crop&dpr=2"
            review="THIS IS IT. THIS IS WHAT I WAITED FOR SINCE DEVELOPING WITH FIREBASE. Thank you very much!!!"
          />
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection

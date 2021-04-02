import { useState } from 'react'
import SEO from '@/components/SEO'
import LoginHeader from '@/components/LoginHeader'
import SignInForm from '@/components/SignInForm'
import SignUpForm from '@/components/SignUpForm'

function LoginPage() {
  const pageTitle = `Login | ${process.env.siteTitle}`
  const [isSigningIn, setIsSigningIn] = useState(true)

  const toggleIsSigningIn = () => {
    setIsSigningIn(!isSigningIn)
  }

  return (
    <div className="container mx-auto min-h-screen mt-6 sm:mt-12">
      <SEO title={pageTitle} />
      {
        isSigningIn ?
          <div>
            <LoginHeader
              toggleIsSigningIn={toggleIsSigningIn}
              header={`Login to your account`}
              question={`Don't have an account?`}
              cta={`Sign up`}
            />
            <SignInForm />
          </div>
          :
          <div>
            <LoginHeader
              toggleIsSigningIn={toggleIsSigningIn}
              header={`Create your account`}
              question={`Already have an account?`}
              cta={`Sign in`}
            />
            <SignUpForm />
          </div>
      }
    </div>
  )
}

export default LoginPage

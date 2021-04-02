import { useState } from 'react'

function SignInForm() {
  const [email, setEmail] = useState('')
  const [resetEmail, setResetEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorWarning, setErrorWarning] = useState('')
  const [showPasswordResetModal, setShowPasswordResetModal] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('sign in with email', email,'and password', password)
    // you can use errorWarning to display an error if something goes wrong with authentication
  }

  const sendResetEmail = () => {    
    console.log('reset email!', resetEmail)
  }

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 relative">
        <div className={showPasswordResetModal ? `absolute inset-0 bg-palette-lighter w-full max-w-xl mx-auto h-64 border border-gray-100 shadow z-20 rounded flex justify-center items-center` : `hidden`}>
          <div className="space-y-8 w-full flex flex-col justify-center items-center">
            <div className="font-medium text-lg text-gray-900">Reset Password</div>
            <input
              id="reset-email"
              name="reset-email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none w-11/12 mx-auto rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-palette-primary focus:border-palette-primary focus:z-10 sm:text-sm"
              placeholder="Email address"
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <div className="w-full space-x-4 flex justify-center">
              <button
                className="py-1 px-2 w-32 bg-palette-primary hover:bg-palette-dark rounded text-white focus:outline-none"
                onClick={sendResetEmail}
              >
                Send Email
              </button>
              <button
                className="py-1 px-2 w-20 bg-palette-primary hover:bg-palette-dark rounded text-white focus:outline-none"
                onClick={() => setShowPasswordResetModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <form
          className="mt-8 space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-palette-primary focus:border-palette-primary focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-palette-primary focus:border-palette-primary focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-palette-primary hover:bg-palette-dark focus:outline-none"
            >
              Sign in
          </button>
          </div>
        </form>
        <div className="flex justify-center">
          <button
            className="font-medium text-palette-primary hover:text-palette-dark cursor-pointer"
            onClick={() => setShowPasswordResetModal(true)}
          >
            Forgot your password?
            </button>
        </div>
        {
          errorWarning === '' ?
            null
            :
            <div className="bg-red-50 p-2 rounded-md border border-red-500 text-red-600 font-medium">
              Error! {errorWarning}
            </div>
        }
      </div>
    </div>
  )
}

export default SignInForm

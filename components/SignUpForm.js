import { useState } from 'react'

function SignUpForm() {  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorWarning, setErrorWarning] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('sign up with username', username,', email', email,'and password', password)
    // you can use errorWarning to display an error if something goes wrong with authentication
  }

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form
          className="mt-8 space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-palette-primary focus:border-palette-primary focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
              Sign up
          </button>
          </div>
        </form>
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

export default SignUpForm

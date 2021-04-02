import PageHeader from '@/components/PageHeader'

function LoginHeader({ toggleIsSigningIn, header, question, cta }) {
  return (
    <div className="w-5/6 mx-auto">
      <PageHeader text={header} />
      <div className="w-full p-2 rounded flex justify-center space-x-2">
        <p className="text-gray-600">{question}</p>
        <button
          className="text-palette-primary hover:text-palette-dark font-medium focus:outline-none"
          onClick={toggleIsSigningIn}
        >
          {cta}
        </button>
      </div>
    </div>
  )
}

export default LoginHeader

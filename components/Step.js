function Step({image, title, description}) {

  return (
    <div className="px-4 w-full lg:w-1/3 flex flex-col justify-between items-center mb-4 lg:mb-0">
      <img width={200} height={200} src={image} className="w-full" alt="how-it-works" />
      <div className="mt-4 text-center">
        <h2 className="mb-2 font-bold text-xl md:text-2xl lg:text-xl">
          {title}
        </h2>
        <p className="text-gray-700">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Step

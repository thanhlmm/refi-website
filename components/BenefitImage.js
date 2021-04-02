function BenefitImage({ imageSrc, imageWidth, fade }) {

  const imageClass = `mx-auto object-contain ${imageWidth}`
  const dataAOS = `fade-${fade}`

  return (
    <div className="w-full md:w-1/2 text-center" data-aos={dataAOS}>
      <img height={600} width={300} className={imageClass} src={imageSrc} alt="benefit-preview" />
    </div>
  )
}

export default BenefitImage

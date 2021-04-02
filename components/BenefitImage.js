function BenefitImage({ imageSrc, imageWidth, fade }) {

  const imageClass = `mx-auto object-contain ${imageWidth}`
  const dataAOS = `fade-${fade}`

  return (
    <div className="w-full text-center md:w-1/2" data-aos={dataAOS}>
      <img height={500} width={400} className={imageClass} src={imageSrc} alt="benefit-preview" />
    </div>
  )
}

export default BenefitImage

import HeroBannerDescription from "./HeroBannerDescription"

export default function HeroBannerText() {

  let textClassName = "font-PPEdNewUltralight text-[60px] md:text-[120px] lg:text-[140px] lx:text-[120px] xl:text-[142px] 3xl:text-[180px]"

  return (
    <div className="text-[#FBFAED] leading-[4rem] sm:leading-none w-full relative bottom-[12%] h-fit">
      <p className={`${textClassName} relative md:top-14 md:left-0 sm:top-6 sm:left-[44%]`}>
        The future
      </p>
      <p className={`${textClassName} grid md:place-content-end w-full`}>
        <span className="sm:mr-4 xl:mr-2 3xl:mr-36">of education is</span>
      </p>
      <p className={`${textClassName} relative sm:bottom-6 md:bottom-24`}>
        here.
      </p>
      <HeroBannerDescription className='relative mt-4 sm:mt-0 sm:bottom-11' />
    </div>
  )
}

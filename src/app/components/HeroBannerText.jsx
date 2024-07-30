import HeroBannerDescription from "./HeroBannerDescription"

export default function HeroBannerText() {

  let textClassName = "font-PPEdNewUltralight text-[60px] md:text-[120px] lg:text-[140px] lx:text-[120px] xl:text-[142px] 3xl:text-[180px]"

  return (
    <div className="text-[#FBFAED] leading-[4rem] sm:leading-none w-full relative bottom-[12%] h-fit">
      <p className={`${textClassName} relative lg:top-8 sm:left-0 sm:top-[-20%] md:top-6 lg:left-1 w-fit`}>
        The future
      </p>
      <p className={`${textClassName} grid sm:relative sm:top-6 3xl:top-0`}>
        <span className="">of education is</span>
      </p>
      <p className={`${textClassName} relative sm:-bottom-2`}>
        here.
      </p>
      <HeroBannerDescription className='relative mt-4 sm:bottom-0' />
    </div>
  )
}

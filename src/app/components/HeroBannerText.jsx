import HeroBannerDescription from "./HeroBannerDescription"

export default function HeroBannerText() {

  let textClassName = "font-PPEdNewUltralight text-[120px] xl:text-[142px]"

  return (
    <div className="text-[#FBFAED] w-full relative bottom-[14%] h-fit">
        <p className={`${textClassName} relative top-14`}>
            The future
        </p>
        <p className={`${textClassName} grid place-content-end w-full`}>
            <span className="mr-4">of innovation is</span>
        </p>
        <p className={`${textClassName} relative bottom-24`}>
          here.
        </p>
        <HeroBannerDescription className='relative bottom-11' />
    </div>
  )
}

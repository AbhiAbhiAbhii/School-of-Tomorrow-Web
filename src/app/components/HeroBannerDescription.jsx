export default function HeroBannerDescription({ className }) {

    const textClassName = "text-sm w-full xl:w-[40ch]"

  return (
    <div className={`${className} font-inter w-full grid grid-flow-row lg:grid-flow-col place-content-end gap-4 lg:gap-12 about scroll-m-7`}>
        <p className={`${textClassName}`}>

            Schools of Tomorrow aims to invest in School Leaders - the conductors who make India’s schools run.Much of the educational research from the past two decades point to two investments that offer the greatest return-on-investment in improving outcomes for students from low-income communities. Intuitively, the first of those is the teacher. The second greatest investment is a community that is often overlooked: the school leader.
        </p>
        <p className={`${textClassName}`}>
        School leaders have the greatest influence on a school environment. They not only establish an instructional vision of excellence, but they also hire and retain excellent teaching talent. They manage operations and coach educators. They build culture and nurture teams to flourish. Wherever you’ll find a school filled with excellent teachers, you’ll inevitably find an excellent school leader in the backdrop. Despite the critical role these individuals play, efforts invested into building and developing this community are often too little, too late.        </p>
    </div>
  )
}

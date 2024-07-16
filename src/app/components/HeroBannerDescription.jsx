export default function HeroBannerDescription({ className }) {

    const textClassName = "text-sm w-full xl:w-[40ch]"

  return (
    <div className={`${className} font-inter w-full grid grid-flow-row lg:grid-flow-col place-content-end gap-4 lg:gap-12`}>
        <p className={`${textClassName}`}>
            During 5-7 August of 2024, five organizations are coming together – iTeach Schools, The Akanksha Foundation, The Circle, Teach For India, and Teach For All – to host
            a conference that will endeavor to answer those three questions.<br /><br />
            We’ll gather more than 100 School Leaders – along with 200 local educators - from across India and
            the world.
        </p>
        <p className={`${textClassName}`}>
            Spending three days in the city of Pune, we’ll get into some of the city’s best schools working with kids from low-income communities; we’ll work through
            hackathon design challenges to reinvent schools; and we’ll engage with workshops and collaborative learning experiences to tap into our collective wisdom.
        </p>
    </div>
  )
}

import BlockA from "./SideBar/BlockA";

export default function TicketShowcase() {

  return (
    <section className='bg-[#FFD238] flex items-center justify-center py-12 md:py-24'>
        <div className="font-PPEdNewUltralight text-purpleB text-4xl xl:text-8xl 3xl:text-9xl">
          <p>
            Register to <b>innovate</b>,
          </p>
          <div className="relative">
            <b>collaborate</b> and<br /><b>transform</b> the schools of<br /> tomorrow<BlockA className='w-[300px] mt-4 md:mt-0 md:absolute md:left-[42%] bottom-6' />
          </div>
        </div>
    </section>
  )
}


import BlockA from "./SideBar/BlockA";

export default function TicketShowcase() {

  return (
    <section className='bg-[#FFD238] flex items-center justify-center py-12 md:py-24'>
        <div className="font-PPEdNewUltralight text-purpleB text-4xl md:text-6xl xl:text-8xl 3xl:text-9xl tracking-normal">
          <p className="md:mb-4">
            Register to <b>innovate</b>,
          </p>
          <div className="relative">
            <b>collaborate</b> and<br /><b>transform</b> the schools of<br /> tomorrow!<BlockA className='w-[300px] mt-4 md:mt-4 xl:absolute xl:left-[48%] bottom-6' />
          </div>
        </div>
    </section>
  )
}


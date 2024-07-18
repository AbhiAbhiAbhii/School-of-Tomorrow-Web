import BlockA from "./SideBar/BlockA";

export default function TicketShowcase() {

  return (
    <section className='bg-[#FFD238] flex items-center justify-center py-24'>
        <div className="font-PPEdNewUltralight text-purpleB text-8xl 2xl:text-9xl">
            <p>
              Register to <b>innovate</b>,
            </p>
            <div className="relative">
              <b>collaborate</b> and<br /><b>transform</b> the schools of<br /> tomorrow<BlockA className='w-[300px] absolute left-[42%] bottom-6' />
            </div>
        </div>
    </section>
  )
}


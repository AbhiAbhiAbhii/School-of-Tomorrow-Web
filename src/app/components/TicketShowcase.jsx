import BlockA from "./SideBar/BlockA";

export default function TicketShowcase() {
  return (
    <section className='bg-[#FFD238] flex items-center justify-center py-24'>
        <div className="font-PPEdNewUltralight text-purpleB text-8xl 2xl:text-9xl">
            <p>
                Tickets to the
            </p>
            <div className="relative">
                future is one click<br />away.<BlockA className='w-[300px] absolute left-[30%] bottom-6' />
            </div>
        </div>
    </section>
  )
}

import Image from 'next/image'
import BeliefTextComponent from './BeliefTextComponent'

export default function BeliefShowcase() {
    
    const upperData = [
        {
            id: '01',
            text: 'Acquire concrete knowledge and skills – through capacity-building workshops - to begin redesigning schools within their individual contexts.'
        },
        {
            id: '02',
            text: 'Acquire concrete knowledge and skills – through capacity-building workshops - to begin redesigning schools within their individual contexts.'
        }
    ]

    const lowerData = [
        {
            id: '03',
            text: 'Acquire concrete knowledge and skills – through capacity-building workshops - to begin redesigning schools within their individual contexts.'
        }, 
        {
            id: '04',
            text: 'Acquire concrete knowledge and skills – through capacity-building workshops - to begin redesigning schools within their individual contexts.'
        }
    ]

  return (
    <section className='space-y-24'>
       <div className='font-PPEdNewUltralight text-[#FBFAED] text-6xl'>
        <p>The beliefs that</p>
        <p className='relative left-24'>shape our event</p>
       </div>
       <div className='flex gap-4'>
        <div>
            <Image 
                src='/assets/illustration-sparkle.svg'
                alt='sparkle'
                height={300}
                width={300}
            />
        </div>
        <div className='space-y-20 w-full'>
            <div className='flex gap-12 w-full ml-12'>
                <BeliefTextComponent 
                    data={upperData}
                />
            </div>
            <div className='flex gap-12 justify-end'>
                <BeliefTextComponent 
                    data={lowerData}
                />
            </div>
        </div>
       </div>
    </section>
  )
}

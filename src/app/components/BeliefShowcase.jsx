import Image from 'next/image'
import BeliefTextComponent from './BeliefTextComponent'

export default function BeliefShowcase() {
    
    const upperData = [
        {
            id: '01',
            title: 'Masterclasses by Industry Experts',
            text: "In-depth insights and knowledge or specific topics related to the conference's them"
        },
        {
            id: '02',
            title: 'Learning Workshops',
            text: 'Practice designinsights and tools, focused on solving real-world challenges in Schoclis across Pune'
        }
    ]

    const lowerData = [
        {
            id: '03',
            title: 'Insight Panels',
            text: 'Breakdown-topic surgent and deeply relevant to the cause of building future-reedy schools initiate spans and inspiration to take forward'
        }, 
        {
            id: '04',
            title: 'Hackathon',
            text: 'Unconference format to design prototype rapid and collaborative manner. cuminating into a community procation'
        }
    ]
    const evenLowerData = [
        {
            id: '05',
            title: 'Keynote Sessions',
            text: 'Insights and inspiration as well bessert the tone for the rest of the conference by studentleaders and industry experts'
        }, 
        {
            id: '06',
            title: 'Exhibits & Pop-Up Studios',
            text: 'Exemplary concepts and installations, Ever outcortes by urgs und schools across the country.'
        }
    ]

  return (
    <section className='space-y-24'>
       <div className='font-PPEdNewUltralight text-[#FBFAED] text-5xl 2xl:text-6xl 3xl:text-8xl'>
        <p>Experience the</p>
        <p className='relative left-12'>school of tomorrow conference</p>
        <p>
            through
        </p>
       </div>
       <div className='flex items-center gap-4'>
        <div 
            className={
                `h-[300px] w-[300px] 3xl:h-[400px] 3xl:w-[400px]`
            }
        >
            <Image 
                src='/assets/asset-sot.svg'
                alt='sparkle'
                className='w-full h-full'
                height={300}
                width={300}
            />
        </div>
        <div className='space-y-20 w-full'>
            <div 
                className={
                    `flex gap-12 w-full ml-12
                    2xl:gap-24
                    `
                }
            >
                <BeliefTextComponent 
                    data={upperData}
                />
            </div>
            <div className='flex gap-12 justify-end'>
                <BeliefTextComponent 
                    data={lowerData}
                />
            </div>
            <div 
                className={
                    `flex gap-12 w-full ml-12
                    2xl:gap-24
                    `
                }                
            >
                <BeliefTextComponent 
                    data={evenLowerData}
                />
            </div>
        </div>
       </div>
    </section>
  )
}

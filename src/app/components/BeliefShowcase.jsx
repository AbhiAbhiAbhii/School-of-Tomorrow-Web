'use client'
import Image from 'next/image'
import BeliefTextComponent from './BeliefTextComponent'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';


export default function BeliefShowcase() {
    
    const upperData = [
        {
            id: '01',
            title: 'Masterclasses by Industry Experts',
            text: "In-depth insights and knowledge or specific topics related to the conference's theme"
        },
        {
            id: '02',
            title: 'Learning Workshops',
            text: 'Practice designs insights and tools, focused on solving real-world challenges in Schools across Pune'
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

    const mobData = [].concat([...upperData, ...lowerData, ...evenLowerData])

  return (
    <section className='sm:space-y-24'>
       <div className='font-PPEdNewUltralight text-[#FBFAED] text-5xl sm:text-5xl 2xl:text-6xl 3xl:text-8xl'>
        <p>Experience the</p>
        <p className='relative sm:left-12'>school of tomorrow conference</p>
        <p>
            through
        </p>
       </div>
       <div className='sm:flex items-center gap-4'>
        <div 
            className={
                `h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] 3xl:h-[400px] 3xl:w-[400px] ml-auto`
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
        <div className='hidden sm:block space-y-20 w-full'>
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
        <div className='flex mt-12 sm:hidden'>
            <Swiper
                slidesPerView={1.9}
            >
                {mobData.map((item) => {
                    return(
                        <SwiperSlide
                            key={item.id}
                        >
                            <div>
                                <p className='flex flex-col gap-2 text-white w-[90%]'>
                                    <span className='font-PPEdNewUltralight text-2xl'>[{item.id}]</span>
                                    <span className='text-lg'>{item.title}</span>
                                    <span className='font-inter text-sm w-full leading-5'>{item.text}</span>
                                </p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
       </div>
    </section>
  )
}

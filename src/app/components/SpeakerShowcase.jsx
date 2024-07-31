'use client'
import React from 'react'
import Eyebrow from './Eyebrow'
import SpeakerItemHolder from './SpeakerItemHolder'
import { speakerDataA, speakerDataB, speakerDataC, speakerDataNew, speakerDataNewB, speakerDataNewC, speakerDataNewD, speakerDataNewE } from '../../../data'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode"
import 'swiper/css/navigation'
import Image from 'next/image'
import Link from 'next/link'


export default function SpeakerShowcase() {

  const mobData = [].concat([...speakerDataNew, ...speakerDataNewB, ...speakerDataNewC, ...speakerDataNewD, ...speakerDataNewE, ...speakerDataA, ...speakerDataB, ...speakerDataC])

  return (
    <section className='speakers scroll-m-7 space-y-12'>
        <Eyebrow 
            text='Our Guest Speakers'
            isSingle
        />
        <SpeakerItemHolder 
            className={'hidden sm:flex'}
            data={speakerDataNew}
        />
        <SpeakerItemHolder 
            isEven
            className={'hidden sm:flex'}
            data={speakerDataNewB}
        />
        <SpeakerItemHolder 
            className={'hidden sm:flex'}
            data={speakerDataA}
        />
        <SpeakerItemHolder 
            isEven
            className={'hidden sm:flex'}
            data={speakerDataB}
        />
        <SpeakerItemHolder 
            className={'hidden sm:flex'}
            data={speakerDataC}
        />
        <SpeakerItemHolder 
            isEven
            className={'hidden sm:flex'}
            data={speakerDataNewC}
        />
        <SpeakerItemHolder 
            className={'hidden sm:flex'}
            data={speakerDataNewD}
        />
        <SpeakerItemHolder
            isEven 
            className={'hidden sm:flex'}
            data={speakerDataNewE}
        />
        <div className='flex sm:hidden'>
            <Swiper
                slidesPerView={1.8}
                spaceBetween={20}
            >
                {mobData.map((item, index) => {

                    let bgClassName

                    if(index % 2 === 0) {
                        bgClassName = "bg-[#13C1E3]"   
                    }
                    if(index % 6 === 0) {
                        bgClassName = "bg-[#FFD238]"   
                    } else {
                        bgClassName = "bg-[#EF4976]" 
                    }

                    return(
                        <SwiperSlide
                            key={index}
                        >
                            <div 
                                className={`space-y-2`}>
                                <div 
                                    className={
                                        `h-[300px] overflow-hidden ${bgClassName}
                                        flex items-end justify-end`
                                    }      
                                >
                                <Image 
                                    src={item.src}
                                    alt='Speaker'
                                    height={400}
                                    width={400}
                                    className='w-full h-full object-cover hex-B'
                                />
                                </div>
                                <div className='text-[#D5D5D5]'>
                                <Link target='_blank' href={item.link} className='font-PPEdNewUltralight text-xl custom-underline'>
                                    {item.name}
                                </Link>
                                <p className='font-inter text-sm'>{item.title}</p>
                                </div>
                            </div> 
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </section>
  )
}

'use client'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import { beliefData } from '../../../data';


export default function BeliefShowcase() {

  return (
    <section className='sm:space-y-24'>
       <div className='font-PPEdNewUltralight text-[#FBFAED] text-5xl sm:text-8xl 2xl:text-8xl 3xl:text-8xl'>
        <p>Experience the</p>
        <p className='relative'>schools of tomorrow conference</p>
        <p>through</p>
       </div>
       <div>
        <div className='flex mt-12'>
            <Swiper
                slidesPerView={1.9}
                breakpoints={{
                    600: {
                        slidesPerView: 2.3
                    }
                }}
            >
                {beliefData.map((item) => {
                    return(
                        <SwiperSlide
                            key={item.id}
                        >
                            <div>
                                <p className='flex flex-col gap-2 sm:space-y-4 text-white w-[90%]'>
                                    <span className='text-lg sm:text-4xl sm:w-3/4'>{item.title}</span>
                                    <span className='font-inter text-sm sm:text-lg w-full leading-5'>{item.text}</span>
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

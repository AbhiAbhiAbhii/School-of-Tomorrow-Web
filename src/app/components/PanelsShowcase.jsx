import React from 'react'
import DynamicArrow from './DynamicArrow'
import Accordion from './Accordion'
import { accordionData } from '../../../data'

export default function PanelsShowcase() {

  return (
    <section className='panels sm:flex sm:justify-between'>
      <div className='font-PPEdNewUltralight sm:space-y-8 text-[#FBFAED] flex items-center justify-between sm:flex-col sm:items-start sm:sticky sm:top-2 sm:left-0 !h-fit'>
        <p
          className={
            `text-5xl
            3xl:text-8xl
            2xl:text-6xl 2xl:w-[5ch]`
          }
        >
          Our Panels
        </p>
        <div className='flex items-center gap-4'>
          <span className='text-base sm:text-2xl'>RSVP Now</span> <DynamicArrow strokeColor="#FFD238" className='bg-prupleB h-[30px] w-[30px] p-1 rounded-full' />
        </div>
      </div>
      <div className='w-full mt-12 sm:mt-0 sm:w-[70%]'>
        <Accordion  
          data={accordionData}
        />
      </div>
    </section>
  )
}

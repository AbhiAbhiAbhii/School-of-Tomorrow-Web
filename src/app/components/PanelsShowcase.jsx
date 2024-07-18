import React from 'react'
import DynamicArrow from './DynamicArrow'
import Accordion from './Accordion'
import { accordionData } from '../../../data'

export default function PanelsShowcase() {

  return (
    <section className='panels'>
      <div className='font-PPEdNewUltralight space-y-8 text-[#FBFAED]'>
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
          <span className='text-2xl'>RSVP Now</span> <DynamicArrow strokeColor="#FFD238" className='bg-prupleB h-[30px] w-[30px] p-1 rounded-full' />
        </div>
      </div>
      <div>
        <Accordion  
          data={accordionData}
        />
      </div>
    </section>
  )
}

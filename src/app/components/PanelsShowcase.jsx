'use client'
import React from 'react'
import DynamicArrow from './DynamicArrow'

export default function PanelsShowcase() {

  const colors = ['#FFD238', '#EF4976', '#FFFFFF', '#13C1E3']


  const randomBg = '#FFFF'

  console.log(Math.floor((Math.random() * 10) + 1))

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
      {/* Accordion */}
      <div>
          {
            colors.map(item => <p style={{background: `${item}`}} key={item}>{item}</p>)
          }
      </div>
    </section>
  )
}

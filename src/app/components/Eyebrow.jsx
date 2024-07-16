import Link from 'next/link'
import React from 'react'
import DynamicArrow from './DynamicArrow'

export default function Eyebrow({text, link}) {
  return (
    <div className='flex justify-between text-[#FBFAED] font-PPEdNewUltralight w-full'>
        <p className='text-6xl'>{text}</p>
        <Link className='flex items-center gap-2 text-2xl' href={link}>
          View all <DynamicArrow className='h-4 w-4' strokeColor="#ffff" />
        </Link>
    </div>
  )
}

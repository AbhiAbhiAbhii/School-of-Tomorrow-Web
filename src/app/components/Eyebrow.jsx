import Link from 'next/link'
import React from 'react'
import DynamicArrow from './DynamicArrow'

export default function Eyebrow({text, link, isSingle, className}) {
  return (
    <div className={`flex justify-between text-[#FBFAED] font-PPEdNewUltralight w-full ${className}`}>
      <p className='text-5xl md:text-6xl 3xl:text-8xl'>{text}</p>
      {!isSingle && (
        <Link className='flex items-center gap-2 text-2xl' href={link}>
        View all <DynamicArrow className='h-4 w-4' strokeColor="#ffff" />
        </Link>
      )}
    </div>
  )
}

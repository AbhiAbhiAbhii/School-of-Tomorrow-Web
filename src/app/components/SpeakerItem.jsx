'use client'

import Image from 'next/image'

export default function SpeakerItem({ name, src, title, index }) {

  return (
    <div className='space-y-2 hover-me' key={index}>
        <div className='w-full h-[300px] overflow-hidden'>
            <Image 
                src={src}
                alt='Speaker'
                height={400}
                width={400}
                className='w-full h-full object-cover'
            />
        </div>
        <div className='text-[#D5D5D5]'>
            <p className='font-PPEdNewUltralight text-3xl'>{name}</p>
            <p className='font-inter text-sm'>{title}</p>
        </div>
    </div>
  )
}

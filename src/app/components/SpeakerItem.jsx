'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function SpeakerItem({ index, item }) {

  return (
    <div className='space-y-2 hover-me' key={index}>
      <div className='w-full h-[300px] overflow-hidden'>
        <Image 
          src={item.src}
          alt='Speaker'
          height={400}
          width={400}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='text-[#D5D5D5]'>
        <Link href={item.link} className='font-PPEdNewUltralight text-3xl custom-underline'>
          {item.name}
        </Link>
        <p className='font-inter text-sm'>{item.title}</p>
      </div>
    </div>
  )
}

'use client'

import Image from 'next/image'
import React, { useState } from 'react'

export default function SpeakerItem({ name, src, title, index }) {

    const [detectHover, setDetectHover] = useState(0)

    function detectMouseHover(index) {
        setDetectHover(index)
    }

  return (
    <div onMouseEnter={() => detectMouseHover(index)} className={`space-y-2 ${index === detectHover ? 'w-[75%]':'w-[25%]'} transition-all`} key={name}>
        <div className='w-full h-[300px] transition-all overflow-hidden'>
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

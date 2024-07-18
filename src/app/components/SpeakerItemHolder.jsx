'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function  SpeakerItemHolder({ data , isEven}) {

  const [active, setActive] = useState(
    isEven ? 2:0
  )

  const handleMouseOver = (i) => {
    setActive(i)
  }

  return (
    <div className='flex gap-2'>
        {data.map((item, index) => {
          let bgClassName
          switch(index) {
            case 0:
              bgClassName = "bg-[#13C1E3]"
              break;
            case 1:
              bgClassName = "bg-[#FFD238]"
              break;
            case 2:
              bgClassName = "bg-[#EF4976]"
              break;
          }
          return (
            <div onMouseOver={() => handleMouseOver(index)}
              className={`space-y-2 ${active === index ? 'expand-75':'shrink-25'}`}  key={index}>
              <div 
                className={
                  `w-full h-[300px] overflow-hidden ${bgClassName}
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
                <Link href={item.link} className='font-PPEdNewUltralight text-3xl custom-underline'>
                  {item.name}
                </Link>
                <p className='font-inter text-sm'>{item.title}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

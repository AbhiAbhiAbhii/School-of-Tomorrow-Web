import React from 'react'
import Eyebrow from './Eyebrow'
import Image from 'next/image'

export default function LogoShowcase({ text, data }) {
  return (
    <div className='space-y-6'>
      <Eyebrow isSingle text={text} />
      <ul className='flex flex-wrap w-full'>
        {data.map((item) => {
          return(
            <li 
              className='border mb-3 border-[#FFD33A] grid place-items-center' 
              key={item.id}
            >
              <Image 
                src={item.src}
                height={180}
                width={250}
                className='object-contain'
                alt='logo'
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

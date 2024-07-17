import React from 'react'
import Eyebrow from './Eyebrow'
import Image from 'next/image'

export default function LogoShowcase({ text, data }) {
  return (
    <div className='space-y-6'>
      <Eyebrow isSingle text={text} />
      <ul className='flex flex-wrap gap-2 w-full'>
        {data.map((item) => {
          return(
            <li key={item.id}>
              <Image 
                src={item.src}
                height={180}
                width={180}
                alt='logo'
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

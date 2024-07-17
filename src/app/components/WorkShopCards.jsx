import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

export default function WorkShopCards({ data }) {

  return (
    <ul className='flex gap-6'>
        {data.map((item) => (
            <li className={
                clsx('h-[539px] flex flex-col justify-end p-4 relative overflow-hidden',{
                    'bg-[#FFD238]': item.id === 0,
                    'text-[#000000]': item.id === 0,
                    'bg-[#000000]': item.id === 1,
                    'text-white': item.id === 1
                })
            } 
                key={item.id}
            >
                <div className='absolute -top-1 -right-0 w-full'>
                    <Image 
                        className='h-full w-full'
                        src={item.src}
                        alt='hexagon'
                        height={200}
                        width={200}
                    />
                </div>
                <p className='font-PPEdNewUltralight'>
                    {item.title}
                </p>
                <div className='font-inter'>
                    {item.tags.map(tag => <p key={tag}>{tag}</p>)}
                </div>
                <p className='font-inter'>
                    {item.description}
                </p>
            </li>
        ))}
    </ul>
  )
}

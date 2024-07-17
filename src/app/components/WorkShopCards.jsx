import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

export default function WorkShopCards({ data }) {

  return (
    <ul className='flex gap-2 w-3/4'>
        {data.map((item) => (
            <li className={
                clsx('h-[539px] flex flex-col space-y-4 justify-end p-4 relative overflow-hidden w-[45%]',{
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
                <div className='space-y-1'>
                    <p className='font-PPEdNewUltralight text-4xl w-[12ch]'>
                        {item.title}
                    </p>
                    <div className='font-inter flex flex-wrap gap-2'>
                        {item.tags.map(tag => <p className='text-[12px] font-semibold bg-white p-1 text-[#000000]' key={tag}>{tag}</p>)}
                    </div>
                </div>
                <p className='font-inter leading-5 text-sm w-[26ch]'>
                    {item.description}
                </p>
            </li>
        ))}
    </ul>
  )
}

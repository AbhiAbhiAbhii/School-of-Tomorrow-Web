import React from 'react'

export default function BeliefTextComponent({data}) {
  return (
    <>
    {data.map(item => {
        return(
            <div key={item.id}>
                <p className='flex flex-col gap-2 text-white'>
                    <span className='font-PPEdNewUltralight text-4xl'>[{item.id}]</span>
                    <span className='font-inter text-sm max-w-full w-[26ch] leading-5'>{item.text}</span>
                </p>
            </div>
        )
    })}
    </>
  )
}

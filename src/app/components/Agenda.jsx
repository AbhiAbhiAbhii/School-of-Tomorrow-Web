'use client'
import React, { useState } from 'react'
import Eyebrow from './Eyebrow'
import AgendaCard from './AgendaCard'
import { tableData } from '../../../data'
import TableVariant1 from './Table/TableVariant1'
import Image from 'next/image'

export default function Agenda() {

    const [active, setActive] = useState(0)

    function handleClick(index) {
        setActive(index)
    }

    const dates = [
        {
            day: 'Day 1',
            date: 'Aug 05'
        },
        {
            day: 'Day 2',
            date: 'Aug 06'
        },
        {
            day: 'Day 3',
            date: 'Aug 07'
        },
    ]

    let style

    if(active === 0) style = '0%'
    if(active === 1) style = '50%'
    if(active === 2) style = '100%'

  return (
    <div className='agenda scroll-m-7 space-y-12 relative'>
        {/* <Image 
            src="/hand.svg"
            alt='hand'
            height={200}
            width={200}
            className='hidden xl:block absolute top-0 -right-16'
        /> */}
        <Eyebrow 
            text='Program Agenda'
            isSingle 
            className='!justify-center sm:!justify-between mx-auto md:mx-0'
            textClass={'xl:!text-7xl'}
        />
        <div
            className='relative sm:hidden flex justify-between' 
        >
            {
                dates.map((item, index) => {

                    return(
                        <div
                            onClick={() => handleClick(index)}
                            className='text-center font-PPEdNewUltralight text-[#FBFAED]' key={index}>
                            <p className='text-base'>
                                {item.day}
                            </p>
                            <p className='text-2xl'>
                                {item.date}
                            </p>
                        </div>
                    )
                })
            }
            <div className='absolute w-full h-[2px] -bottom-2'>
                <div className='w-full h-full relative rounded-md bg-white'>
                    <div style={{
                        height:'100%',
                        background:'#FFD33A',
                        width:'20%',
                        transition:'all 0.3s ease',
                        position:'absolute',
                        top:'0',
                        left: `${style}`,
                        transform: `translateX(-${style})`
                    }} />
                </div>
            </div>
        </div>
            <div className='sm:hidden'>
                {
                    tableData.map((item, index) => <TableVariant1 style={{display: active === index ? '':'none'}} index={index} key={item.id} item={item} />)
                }
            </div>
        <div className='hidden sm:flex flex-wrap gap-4 w-full'>
            {
                tableData.map((item, index) => <TableVariant1 index={index} key={item.id} item={item} />
                )
            }
        </div>
    </div>
  )
}

import Link from 'next/link'
import React from 'react'
import DynamicArrow from './DynamicArrow'
import WorkShopCards from './WorkShopCards'

export default function WorkShopShowcase() {

    const cardData =[
        {
            id: 0,
            title: 'Futuring & Reimagining',
            description: 'Building a theory of change/theory of problem to design your school from scratch',
            tags: ['ASPIRING', 'SCHOOL'],
            src: '/assets/hex-A.svg'
        },
        {
            id: 1,
            title: 'Holistic Vision of learning',
            description: 'Leaders of tomorrow, leaders of today: The Avasara Leadership Curriculum',
            tags: ['ASPIRING', 'SCHOOL'],
            src: '/assets/hex-B.svg'
        },
    ]

  return (
    <section className='w-full'>
        <div className='flex items-center justify-between flex-wrap w-full'>
            <WorkShopCards data={cardData} />
            <div className='font-PPEdNewUltralight space-y-2 w-fit mr-4'>
                <p className='text-[#FBFAED] text-5xl'>
                    Our<br/> Workshops
                </p>
                <Link href='/' className='text-white text-xl flex items-center gap-2'>
                    View all <DynamicArrow className='h-3 w-3' strokeColor='#ffff' />
                </Link>
            </div>
        </div>
    </section>
  )
}

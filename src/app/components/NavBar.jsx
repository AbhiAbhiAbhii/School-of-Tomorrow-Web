import Image from 'next/image'
import React from 'react'

export default function NavBar() {
  return (
    <nav className='fixed flex items-center pt-12 pb-4 px-6 justify-between lx:hidden top-0 left-0 mb-4 bg-purple z-20 w-full'>
      <div 
        className='w-[150px] h-[50px] sm:h-[150px] sm:w-[150px]'
      >
        <Image 
          src={'/assets/sot-logo.svg'}
          alt='schools of tomorrow'
          height={100}
          width={100}
          className='h-full w-full'
        />
      </div>
      <div
        className='bg-white w-[20%] sm:w-[80px] p-2 sm:py-3 sm:h-fit flex items-center justify-center flex-col space-y-1'
      >
        <div className='bg-prupleB h-[5px] w-full' />
        <div className='bg-prupleB h-[5px] w-full' />
        <div className='bg-prupleB h-[5px] w-full' />
      </div>
    </nav>
  )
}

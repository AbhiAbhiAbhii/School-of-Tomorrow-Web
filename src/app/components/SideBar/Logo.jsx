import Image from 'next/image'
import React from 'react'
import SOTLogo from '../../../../public/assets/sot-logo.svg';

export default function Logo() {
  return (
    <div className='w-full'>
      <Image 
        height={400}
        width={220}
        src={SOTLogo}
        className='h-full w-full'
        alt="Schools of tomorrow"
      />
    </div>
  )
}

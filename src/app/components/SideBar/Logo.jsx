import Image from 'next/image'
import React from 'react'
import SOTLogo from '../../../../public/assets/sot-logo.svg';

export default function Logo() {
  return (
    <div>
      <Image 
        height={400}
        width={320}
        src={SOTLogo}
        alt="School of tomorrow"
      />
    </div>
  )
}

import Image from 'next/image'
import React from 'react'

export default function HeroBanner() {
  return (
    <div className="w-full">
      <Image 
        src='/assets/hero-banner.svg'
        alt="hero-banner"
        className="w-full"
        height={500}
        width={1000}
      />
    </div>
  )
}

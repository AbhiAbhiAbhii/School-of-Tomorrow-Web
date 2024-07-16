import Image from 'next/image'
import React from 'react'

export default function Arrow({ className }) {
  return (
    <div className={`${className} rounded-full grid place-items-center w-fit px-3 py-3 bg-prupleB`}>
      <Image 
        src='/assets/arrow-vector.svg'
        height={20}
        width={20}
        alt='arrow'
      />
    </div>
  )
}

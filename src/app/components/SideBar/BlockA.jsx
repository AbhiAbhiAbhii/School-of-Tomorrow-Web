import Link from 'next/link'
import React from 'react'
import Arrow from '../Arrow'

export default function BlockA() {
  return (
    <Link
        className="flex items-center justify-center gap-2 py-2 bg-white rounded-sm" 
        href='/'
    >
      <p className="font-PPEdNewRegular text-purpleB text-[36px]">
        Register Now
      </p>
      <Arrow />
    </Link>
  )
}

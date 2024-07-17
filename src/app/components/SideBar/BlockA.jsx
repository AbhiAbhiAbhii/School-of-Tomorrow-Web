import Link from 'next/link'
import React from 'react'
import Arrow from '../Arrow'

export default function BlockA({ className }) {
  return (
    <Link
      className={`flex items-center justify-center gap-2 py-2 bg-white rounded-sm ${className}`}
      href='/'
    >
      <p className="font-PPEdNewRegular text-purpleB text-[30px]">
        Register Now
      </p>
      <Arrow />
    </Link>
  )
}

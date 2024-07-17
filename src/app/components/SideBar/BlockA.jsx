import Link from 'next/link'
import React from 'react'
import Arrow from '../Arrow'

export default function BlockA({ className }) {
  return (
    <Link
      className={`flex items-center justify-center gap-2 py-2 bg-white rounded-sm ${className}`}
      href='https://docs.google.com/forms/d/e/1FAIpQLSdfhQ-XhnXIebqcIifyQqZ-kcN7KgEgdpE-VRSKKJoopzpP5g/viewform'
    >
      <p className="font-PPEdNewRegular text-purpleB text-[30px]">
        Register Now
      </p>
      <Arrow />
    </Link>
  )
}

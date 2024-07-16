import React from 'react'

export default function PinkBlockB({ text, sideComponent }) {
  return (
    <div className='flex items-center justify-between'>
      <p className="font-inter text-purpleB font-bold text-base tracking-[-0.31px]">
        {text}
      </p>
      {sideComponent && (sideComponent)}
    </div>
  )
}

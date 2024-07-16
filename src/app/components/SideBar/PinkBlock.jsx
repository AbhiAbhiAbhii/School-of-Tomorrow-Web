import React from 'react'

export default function PinkBlock({ text, mainText, isSingleText, sideText }) {
  return (
    <div className='space-y-3'>
        <p className="font-inter text-purpleB font-bold text-base tracking-[-0.31px]">
          {text}
        </p>
        <div className="flex justify-between items-center">
          {mainText}
          {
            isSingleText ?
            null
            :
            sideText
          }
        </div>
    </div>
  )
}

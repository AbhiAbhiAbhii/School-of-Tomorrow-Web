import React from 'react'
import Eyebrow from './Eyebrow'
import Image from 'next/image'

export default function LogoShowcase({ text }) {
  return (
    <div>
      <Eyebrow isSingle text={text} />
      <div>
        {/* {[0, 1, 2, 3].map(item => {
          <div key={item}>
            <Image />
          </div>
        })} */}
      </div>
    </div>
  )
}

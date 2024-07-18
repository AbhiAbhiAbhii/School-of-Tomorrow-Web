import React from 'react'
import SpeakerItem from './SpeakerItem'

export default function  SpeakerItemHolder({ data }) {
  return (
    <div className='flex justify-end gap-2 w-full'>
        {data.map((item, index) => (
            <SpeakerItem key={index} index={index} item={item} />
        ))}
    </div>
  )
}

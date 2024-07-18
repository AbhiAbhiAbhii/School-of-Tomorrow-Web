import React from 'react'
import Eyebrow from './Eyebrow'
import SpeakerItemHolder from './SpeakerItemHolder'
import { speakerDataA, speakerDataB, speakerDataC } from '../../../data'

export default function SpeakerShowcase() {


  return (
    <section className='speakers scroll-m-7 space-y-12'>
        <Eyebrow 
            text='Our Guest Speakers'
            isSingle
        />
        <SpeakerItemHolder 
            data={speakerDataA}
        />
        <SpeakerItemHolder 
            isEven
            data={speakerDataB}
        />
        <SpeakerItemHolder 
            data={speakerDataC}
        />
    </section>
  )
}

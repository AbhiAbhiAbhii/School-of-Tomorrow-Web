import React from 'react'
import Eyebrow from './Eyebrow'
import SpeakerItem from './SpeakerItem'

export default function SpeakerShowcase() {

    const speakerData = [
        {
            src: '/assets/speaker-A.png',
            name: 'Tom Preston',
            title: 'Founder, Github'
        },
        {
            src: '/assets/speaker-B.png',
            name: 'Jana Iris',
            title: 'TQ Ventures'
        },
        {
            src: '/assets/speaker-C.png',
            name: 'Adam Wiggins',
            title: 'Heroku'
        },
    ]

  return (
    <section className='speakers scroll-m-7 space-y-12'>
        <Eyebrow 
            text='Our Speakers'
            link="/"
        />
        <div className='flex justify-end gap-2 w-full'>
            {speakerData.map(({src, name, title}, index) => (
                <SpeakerItem key={index} index={index} name={name} src={src} title={title} />
            ))}
        </div>
    </section>
  )
}

import React from 'react'
import Eyebrow from './Eyebrow'
import SpeakerItem from './SpeakerItem'
import SpeakerItemHolder from './SpeakerItemHolder'

export default function SpeakerShowcase() {

    const speakerDataA = [
        {
            src: '/assets/speaker-A.png',
            name: 'Atul Thakkar',
            title: 'Director at Anand Rathi Financial Services Limited',
            link: 'https://www.linkedin.com/in/atul-thakkar-8286526'
        },
        {
            src: '/assets/speaker-B.png',
            name: 'Khushboo Awasthi',
            title: 'Co-founder at Mantra4Change',
            link: 'https://www.linkedin.com/in/khushboo-awasthi-m4c/'
        },
        {
            src: '/assets/speaker-C.png',
            name: 'Rahul Gupta',
            title: 'Founder at Rajalka Consulting',
            link: 'https://www.linkedin.com/in/rahul-gupta-507571181/'
        },
    ]

    const speakerDataB = [
        {
            src: '/assets/speaker-A.png',
            name: 'Payal Patel',
            title: 'Program Manager and Treasurer at Jayso Labs',
            link: 'https://www.linkedin.com/in/payal-bhatt/'
        },
        {
            src: '/assets/speaker-A.png',
            name: 'Akash Burlawar',
            title: 'Chief of Staff at Khan Academy',
            link: 'https://www.linkedin.com/in/akashburlawar/'
        },
        {
            src: '/assets/speaker-A.png',
            name: 'Nidhi Anarkat',
            title: 'Co-founder and CEO at NavGurukul',
            link: 'https://www.linkedin.com/in/nidhianarkat/'
        },
    ]

    const speakerDataC = [
        {
            src: '/assets/speaker-A.png',
            name: 'Utsav Kheria',
            title: 'Co-founder at Rocket Learning',
            link: 'https://www.linkedin.com/in/utsav-kheria-0848494/'
        },
        {
            src: '/assets/speaker-A.png',
            name: 'Krish Sreedevi',
            title: 'Co-founder at The School of Discovery',
            link: 'https://www.linkedin.com/in/aksreedevi/'
        },
        {
            src: '/assets/speaker-A.png',
            name: 'Jana Iris',
            title: 'TQ Ventures',
            link: 'https://www.youtube.com/' // need new link
        },
    ]

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
            data={speakerDataB}
        />
        <SpeakerItemHolder 
            data={speakerDataC}
        />
    </section>
  )
}

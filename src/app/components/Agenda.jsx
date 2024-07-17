import React from 'react'
import Eyebrow from './Eyebrow'
import AgendaCard from './AgendaCard'

export default function Agenda() {

    const tableData = [
        {
            day: 'Day I',
            description: 'Participants will engage with capacity building workshops designed to spark inspiration and provide tools. They’ll leave better equipped to start redesigning.',
            table: [
                {
                    id: 0,
                    time: '10:00',
                    icon: '/assets/hand-wave.svg',
                    description: 'Welcome from Scott & Saron'
                },
                {
                    id: 1,
                    time: '10:00',
                    icon: '/assets/talk-icon.svg',
                    description: 'Welcome from Scott & Saron'
                },
                {
                    id: 2,
                    time: '10:00',
                    icon: '/assets/talk-icon.svg',
                    description: 'Welcome from Scott & Saron'
                },
            ]
        },
        {
            day: 'Day II',
            description: 'Participants will engage with capacity building workshops designed to spark inspiration and provide tools. They’ll leave better equipped to start redesigning.',
            table: [
                {
                    id: 0,
                    time: '10:00',
                    icon: '/assets/hand-wave.svg',
                    description: 'Welcome from Scott & Saron'
                },
                {
                    id: 1,
                    time: '10:00',
                    icon: '/assets/talk-icon.svg',
                    description: 'Welcome from Scott & Saron'
                },
                {
                    id: 2,
                    time: '10:00',
                    icon: '/assets/talk-icon.svg',
                    description: 'Welcome from Scott & Saron'
                },
            ]
        },
    ]

  return (
    <div className='agenda scroll-m-7 space-y-12'>
        <Eyebrow 
            text='Program Agenda'
            isSingle 
        />
        <div className='flex gap-12'>
            {tableData.map((item) => {
                return(
                    <AgendaCard key={item.day} tableData={item} />
                )
            })}
        </div>
    </div>
  )
}

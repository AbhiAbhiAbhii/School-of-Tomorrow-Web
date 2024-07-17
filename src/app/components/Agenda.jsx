import React from 'react'
import Eyebrow from './Eyebrow'
import AgendaCard from './AgendaCard'

export default function Agenda() {

    const tableData = [
        {
            day: 'Day I',
            date: 'August 05',
            description: 'Innovate',
            table: [
                {
                    id: 0,
                    time: '9:00 - 10:00',
                    icon: '/assets/hand-wave.svg',
                    tableDetails: [
                        {
                            title: 'Opening and key note',
                            facillitator: '',
                            description: ''   
                        },
                    ]
                },
                {
                    id: 1,
                    time: '10:00 - 12:00',
                    icon: '/assets/talk-icon.svg',
                    tableDetails: [
                        {
                            title: 'Masterclass 1: School Re-tool for hacking innovation in existing schools',
                            facillitator: 'Tropic Design and Innovation',
                            description: ''
                        },
                        {
                            title: 'Masterclass 2: Building a theory of change/theory of problem to design your school from scratch',
                            facillitator: 'The Circle',
                            description: ''
                        },   
                    ]            
                },
                {
                    id: 2,
                    time: '12:00 - 01:15',
                    icon: '/assets/talk-icon.svg',
                    tableDetails: [
                        {
                            title: 'Masterclass 3: Igniting a Movement of Young Changemakers',
                            facillitator: 'Reap Benefit',
                            description: 'Enabling students to solve real - world problems is a larger purpose of education.' 
                        },    
                        {
                            title: 'Masterclass 4: Leaders of tomorrow, leaders of today - The Avasara Way',
                            facillitator: 'Avasara Academy',
                            description: 'Exploring how Avasara leverages their programming and spaces to build student leadership.'
                        }, 
                    ]
                },
                {
                    id: 3,
                    time: '01:15',
                    icon: '/assets/talk-icon.svg',
                    tableDetails: [
                        {
                            title: 'Lunch Break',
                            facillitator: '',
                            description: '' 
                        }
                    ]
                },
                {
                    id: 4,
                    time: '02:15 - 03:30',
                    icon: '/assets/talk-icon.svg',
                    tableDetails: [
                        {
                            title: 'Masterclass 5: Nurturing, developing and creating the ideal school culture - Our role as Leaders and Coaches. ',
                            facillitator: 'Avasara Academy',
                            description: 'You are only as good as your team! How do we effectively develop and empower our teams?' 
                        },
                        {
                            title: 'Masterclass 6 ',
                            facillitator: 'Avasara Academy',
                            description: 'You are only as good as your team! How do we effectively develop and empower our teams?' 
                        },
                    ]
                },
            ]
        },
        {
            day: 'Day II',
            date: 'August 06',
            description: 'Collaborate',
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
            day: 'Day III',
            date: 'August 07',
            description: 'Collaborate',
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
        <div className='flex flex-wrap gap-12'>
            {tableData.map((item) => <AgendaCard key={item.day} tableData={item} />)}
        </div>
    </div>
  )
}

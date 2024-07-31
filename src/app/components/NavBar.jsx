'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import PinkBlock from './SideBar/PinkBlock'
import Separator from './Separator'
import PinkBlockB from './SideBar/PinkBlockB'
import Icons from './SideBar/Icons'
import BlockA from './SideBar/BlockA'
import { useAnimation } from '../hooks/useAnimation'

export default function NavBar() {

  const [active, setActive] = useState(false)

  function handleClick(section) {
    setActive(false)
    document.querySelector(`${section}`).scrollIntoView({
      behavior: 'smooth'
  })
  }

  let textA =<p className="font-PPEdNewRegular text-purpleB tracking-tighter text-6xl flex gap-2">07<sup className="text-sm tracking-normal">TH</sup></p>
  let textB = <p className="font-inter text-purpleB font-bold text-2xl leading-7 tracking-tighter">Buntara Bhavan, <br />Baner, Pune</p>
  const socials = [
    {
      id: 0,
      social: 'Instagram',
      link: 'https://www.instagram.com/schoolsoftomorrow_summit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      icon: '/assets/socials/insta.svg'
    },
    {
      id: 1,
      social: 'LinkedIn',
      link: 'https://www.linkedin.com/company/schools-of-tomorrow-summit/',
      icon: '/assets/socials/linkedin.svg'
    },
  ]
  const socialsComponent = <ul className='flex items-center gap-4'>{socials.map(item => <Icons key={item.id} item={item} />)}</ul>

  const nav = [
    {
      id: 0,
      text: 'About',
      link:'.about'
    },
    {
      id: 1,
      text: 'Speakers',
      link:'.speakers'
    },
    {
      id: 2,
      text: 'Panels',
      link:'.panels'
    },
    {
      id: 3,
      text: 'Agenda',
      link:'.agenda'
    },
  ]

  useAnimation('.about', '.mob-hot-link:first-child')
  useAnimation('.speakers', '.mob-hot-link:nth-child(2)')
  useAnimation('.panels', '.mob-hot-link:nth-child(3)')
  useAnimation('.agenda', '.mob-hot-link:nth-child(4)')

  return (
    <>
    <nav className='fixed lx:hidden top-0 left-0 mb-4 bg-purple z-20 w-full'>
      <div className='flex items-center pt-12 pb-4 sm:pt-6 pl-1 pr-4 justify-between relative'>
        <div 
          className='w-[150px] h-[50px] sm:h-[150px] sm:w-[150px]'
        >
          <Image 
            src={'/assets/sot-logo.svg'}
            alt='schools of tomorrow'
            height={100}
            width={100}
            className='h-full w-full'
          />
        </div>
        <div
          onClick={() => setActive(prevState => !prevState)}
          className='bg-white cursor-pointer w-[20%] sm:w-[80px] p-2 sm:py-3 sm:h-fit flex items-center justify-center flex-col space-y-1'
        >
          <div className='bg-prupleB h-[5px] w-full' />
          <div className='bg-prupleB h-[5px] w-full' />
          <div className='bg-prupleB h-[5px] w-full' />
        </div>
      </div>
      <div 
      className={
        `absolute left-0 h-screen w-full bg-prupleB z-40 pb-12`
      }

      style={{
        top: active ? '0px':'-200vh',
        overflowY:'scroll'
      }}
    >
      <div className='flex items-center pt-12 pb-4 sm:pt-6 pl-1 pr-4  justify-between relative'>
        <div 
          className='w-[150px] h-[50px] sm:h-[150px] sm:w-[150px]'
        >
          <Image 
            src={'/assets/sot-logo.svg'}
            alt='schools of tomorrow'
            height={100}
            width={100}
            className='h-full w-full'
          />
        </div>
        <div
          onClick={() => setActive(prevState => !prevState)}
          className='cursor-pointer bg-white w-[20%] relative sm:w-[80px] p-2 h-[40px] sm:py-3 h- sm:h-fit flex items-center justify-center flex-col'
        >
          <div className='bg-prupleB h-[5px] w-[40%] absolute top-2/4 transform rotate-[45deg] -translate-y-2/4' />
          <div className='bg-prupleB h-[5px] w-[40%] absolute top-2/4 transform -rotate-[45deg] -translate-y-2/4' />
        </div>
      </div>
      <div 
        className='px-2'
      >
        <ul className='space-y-12 mt-8'>
          {nav.map((item) => {

            return(
              <li className='font-PPEdNewUltralight text-6xl mob-hot-link' onClick={() => handleClick(item.link)} key={item.id}>
                {item.text}
              </li>
            )
          })}
        </ul>

        <div className='mt-24'>
          <div className="bg-pink rounded-sm p-4 relative space-y-4">
            <BlockA 
              className="absolute -top-[12%] left-[50%] transform !-translate-x-2/4 !w-3/4"
            />
            <PinkBlock 
              text='WHEN' 
              mainText={<p className="font-inter text-purpleB font-bold text-2xl leading-7 tracking-tighter">AUGUST<br /> 2024</p>}
              sideText={textA}
            />
            <Separator className='bg-purple' />
            <PinkBlock 
              text="WHERE"
              mainText={textB}
              isSingleText
            />
            <Separator className='bg-purple' />
            <PinkBlockB 
              text="SOCIALS"
              sideComponent={socialsComponent}
            />
          </div>
        </div>
      </div>
    </div>
    </nav>
    
    </>
  )
}

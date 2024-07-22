import React from 'react'
import Logo from './Logo'
import BlockA from './BlockA'
import PinkBlock from './PinkBlock'
import Separator from '../Separator'
import PinkBlockB from './PinkBlockB'
import Link from 'next/link'
import Image from 'next/image'
import SideBarLinks from './SideBarLinks'
import Icons from './Icons'

export default function SideBar() {
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

  const socialsComponent = <ul className='flex items-center gap-4'>{socials.map(item => <Icons key={item.id} item={item} />)}</ul>

  return (
    <aside className="hidden sticky lx:flex top-0 left-0 h-fit w-[350px] 2xl:w-[400px] max-w-full">
      <Image 
        alt='img'
        height={100}
        width={100}
        className='h-[200px] w-[50px]'
        src='/assets/side-bar-hand.png'
      />
      <div className="space-y-4 w-[280px] 3xl:w-[320px]"> 
        <Logo />
        <BlockA />
        <div className="bg-pink rounded-sm p-4 space-y-4">
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
        <ul className='flex flex-wrap items-center justify-between'>
          {nav.map(item => <SideBarLinks key={item.id} item={item} />)}
        </ul>
      </div>
    </aside>
  )
}

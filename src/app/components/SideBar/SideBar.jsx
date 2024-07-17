import React from 'react'
import Logo from './Logo'
import BlockA from './BlockA'
import PinkBlock from './PinkBlock'
import Separator from '../Separator'
import PinkBlockB from './PinkBlockB'
import Link from 'next/link'
import Image from 'next/image'

export default function SideBar() {
  let textA =<p className="font-PPEdNewRegular text-purpleB tracking-tighter text-6xl flex gap-2">5-7<sup className="text-sm tracking-normal">TH</sup></p>
  let textB = <p className="font-inter text-purpleB font-bold text-2xl leading-7 tracking-tighter">NAME <br />153 BROADWAY <br />WILLIAMSBURG <br />PUNE IN</p>

  const socials = [
    {
      id: 0,
      social: 'Instagram',
      link: '/'
    },
    {
      id: 1,
      social: 'Youtube',
      link: '/'
    },
    {
      id: 2,
      social: 'Facebook',
      link: '/'
    },
  ]

  const nav = [
    {
      id: 0,
      text: 'About',
      link:''
    },
    {
      id: 1,
      text: 'Speakers',
      link:''
    },
    {
      id: 2,
      text: 'Agenda',
      link:''
    },
    {
      id: 3,
      text: 'Workshops',
      link:''
    },
  ]

  const socialsComponent = <ul className='flex items-center gap-4'>{socials.map(item => <li className='bg-prupleB' key={item.id}><Link className='p-3' href={item.link}></Link></li>)}</ul>

  return (
    <aside className="flex sticky top-0 left-0 h-fit w-[350px] max-w-full">
      <Image 
        alt='img'
        height={100}
        width={100}
        className='h-[200px] w-[50px]'
        src='/assets/side-bar-hand.png'
      />
      <div className="space-y-4 w-[250px]"> 
        <Logo />
        <BlockA />
        <div className="bg-pink rounded-sm p-4 space-y-4">
          <PinkBlock 
            text='WHEN' 
            mainText={<p className="font-inter text-purpleB font-bold text-2xl leading-7 tracking-tighter">AUGUST <br /> 2024</p>}
            sideText={textA}
          />
          <Separator />
          <PinkBlock 
            text="WHERE"
            mainText={textB}
            isSingleText
          />
          <Separator />
          <PinkBlockB 
            text="SOCIALS"
            sideComponent={socialsComponent}
          />
        </div>
        <ul className='flex items-center justify-between'>
          {nav.map(item => <li className='font-inter font-bold p-1 transition-all hover:bg-white hover:text-purpleB text-white text-sm cursor-pointer' key={item.id}>{item.text}</li>)}
        </ul>
      </div>
    </aside>
  )
}

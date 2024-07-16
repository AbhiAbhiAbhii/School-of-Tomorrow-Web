import React from 'react'
import Logo from './Logo'
import BlockA from './BlockA'
import PinkBlock from './PinkBlock'
import Separator from '../Separator'
import PinkBlockB from './PinkBlockB'
import Link from 'next/link'

export default function SideBar() {
  let textA =<p className="font-PPEdNewRegular text-purpleB tracking-tighter text-7xl flex gap-2">5-7<sup className="text-sm tracking-normal">TH</sup></p>
  let textB = <p className="font-inter text-purpleB font-bold text-3xl leading-7 tracking-tighter">NAME <br />153 BROADWAY <br />WILLIAMSBURG <br />PUNE IN</p>

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

  const socialsComponent = <ul className='flex items-center gap-4'>{socials.map(item => <li className='bg-prupleB' key={item.id}><Link className='p-3' href={item.link}></Link></li>)}</ul>

  return (
    <aside className="">
      {/* INNER */}
      <div className="space-y-4"> 
        <Logo />
        <BlockA />
        {/* next component */}
        <div className="bg-pink rounded-sm p-4 space-y-4">
          <PinkBlock 
            text='WHEN' 
            mainText={<p className="font-inter text-purpleB font-bold text-3xl leading-7 tracking-tighter">AUGUST <br /> 2024</p>}
            sideComponent={textA}
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
      </div>
    </aside>
  )
}

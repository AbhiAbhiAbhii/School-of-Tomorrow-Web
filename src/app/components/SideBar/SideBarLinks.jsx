'use client'

import { useEffect } from "react"

export default function SideBarLinks({item}) {

    function handleClick(section) {
        document.querySelector(`${section}`).scrollIntoView({
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        
    }, [])

  return (
    <li onClick={() => handleClick(item.link)} className='font-inter font-bold p-1 transition-all hover:bg-white hover:text-purpleB text-white text-sm cursor-pointer'>{item.text}</li>  
)
}

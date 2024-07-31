'use client'
import { useDesktopAnimation } from "@/app/hooks/useDesktopAnimation"

export default function SideBarLinks({item}) {

    function handleClick(section) {
        document.querySelector(`${section}`).scrollIntoView({
            behavior: 'smooth'
        })
    }

    useDesktopAnimation('.about', '.hot-link:first-child')
    useDesktopAnimation('.speakers', '.hot-link:nth-child(2)')
    useDesktopAnimation('.panels', '.hot-link:nth-child(3)')
    useDesktopAnimation('.agenda', '.hot-link:nth-child(4)')

  return (
    <li onClick={() => handleClick(item.link)} className='hot-link font-inter font-bold p-1 transition-all hover:bg-white hover:!text-purpleB text-white text-sm cursor-pointer'>{item.text}</li>  
    )
}

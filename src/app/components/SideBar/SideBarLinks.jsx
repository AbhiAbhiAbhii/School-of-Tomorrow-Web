'use client'

import { useEffect } from "react"

export default function SideBarLinks({item}) {

    function handleClick(section) {
        document.querySelector(`${section}`).scrollIntoView({
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    document.querySelector('.hot-link:first-child').style.backgroundColor = '#FFFF'
                    document.querySelector('.hot-link:first-child').style.color = '#24223C'
                } else {
                    document.querySelector('.hot-link:first-child').style.backgroundColor = ''
                    document.querySelector('.hot-link:first-child').style.color = '#FFFF'
                }
            })
        }, {threshold: 0.8})
        observer.observe(document.querySelector('.about'))

        const secondObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    document.querySelector('.hot-link:nth-child(2)').style.backgroundColor = '#FFFF'
                    document.querySelector('.hot-link:nth-child(2)').style.color = '#24223C'
                } else {
                    document.querySelector('.hot-link:nth-child(2)').style.backgroundColor = ''
                    document.querySelector('.hot-link:nth-child(2)').style.color = '#FFFF'
                }
            })
        }, {threshold: 0.8})
        secondObserver.observe(document.querySelector('.speakers'))

        const thirdObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    document.querySelector('.hot-link:nth-child(3)').style.backgroundColor = '#FFFF'
                    document.querySelector('.hot-link:nth-child(3)').style.color = '#24223C'
                } else {
                    document.querySelector('.hot-link:nth-child(3)').style.backgroundColor = ''
                    document.querySelector('.hot-link:nth-child(3)').style.color = '#FFFF'
                }
            })
        }, {threshold: 0.8})
        thirdObserver.observe(document.querySelector('.panels'))

        const fourthObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    document.querySelector('.hot-link:nth-child(4)').style.backgroundColor = '#FFFF'
                    document.querySelector('.hot-link:nth-child(4)').style.color = '#24223C'
                } else {
                    document.querySelector('.hot-link:nth-child(4)').style.backgroundColor = ''
                    document.querySelector('.hot-link:nth-child(4)').style.color = '#FFFF'
                }
            })
        }, {threshold: 0.8})
        fourthObserver.observe(document.querySelector('.agenda'))

        
    }, [])

  return (
    <li onClick={() => handleClick(item.link)} className='hot-link font-inter font-bold p-1 transition-all hover:bg-white hover:!text-purpleB text-white text-sm cursor-pointer'>{item.text}</li>  
    )
}

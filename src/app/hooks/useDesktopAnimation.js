'use client'

import { useEffect } from "react"

export const useDesktopAnimation = (inView, targetItem) => {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    document.querySelector(`${targetItem}`).style.backgroundColor = '#FFFF'
                    document.querySelector(`${targetItem}`).style.color = '#24223C'
                } else {
                    document.querySelector(`${targetItem}`).style.backgroundColor = 'transparent'
                    document.querySelector(`${targetItem}`).style.color = '#FFFF'
                }
            })
        })
        observer.observe(document.querySelector(`${inView}`))
    }, [])
}
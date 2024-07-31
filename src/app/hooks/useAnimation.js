'use client'

import { useEffect } from "react"

export const useAnimation = (inView, targetItem, isDesk) => {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    document.querySelector(`${targetItem}`).style.color = '#FFFF'
                } else {
                    document.querySelector(`${targetItem}`).style.color = 'rgba(255, 255, 255, 0.36)'
                }
            })
        })
        observer.observe(document.querySelector(`${inView}`))
    }, [])
}
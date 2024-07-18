'use client'

import { useEffect, useState } from "react"

export default function Accordion({ data, className }) {

    const colors = ['#FFD238', '#EF4976', '#FFFFFF', '#13C1E3']
    const [randomColors, setRandomColors] = useState(['#13C1E3'])

    useEffect(() => {

        const generateRandomColor = () => {

            return data.map(() => {
                return colors[Math.floor(Math.random() * colors.length)]
            })
        }

        setRandomColors(() => generateRandomColor())

    }, [data])


  return (
    <ul className={`${className}`}>
        {data.map((item, index) => {

            return(
                <li    
                    key={item.id}
                    style={{
                        background: `${randomColors[index]}`
                    }}
                >
                    {item.title}
                </li>
            )
        })}
    </ul>
  )
}

'use client'

import { useEffect, useState } from "react"
import DynamicArrow from "./DynamicArrow"

export default function Accordion({ data, className }) {

    const colors = ['#FFD238', '#EF4976', '#FFFFFF', '#13C1E3']
    const [randomColors, setRandomColors] = useState(['#13C1E3'])

    const [active, setActive] = useState(0)

    useEffect(() => {

        const generateRandomColor = () => {

            return data.map(() => {
                return colors[Math.floor(Math.random() * colors.length)]
            })
        }

        setRandomColors(() => generateRandomColor())

    }, [])

    function handleClick(index) {
       if(active === index) {
        setActive(null)
       } else {
        setActive(index)
       }
    }


  return (
    <ul className={`${className} space-y-6`}>
        {data.map((item, index) => {
            const count = 1 + index
            return(
                <li    
                    key={item.id}
                    style={{
                        background: `${randomColors[index]}`
                    }}
                    onClick={() => handleClick(index)}
                    className="p-2 sm:p-6 h-fit transition-all cursor-pointer"
                >
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-6">
                            <p 
                                className="bg-[#22203E] rounded-full w-[40px] h-[40px] grid place-items-center text-white font-inter"
                            >
                                {count}
                            </p>
                            <p 
                                className="font-PPEdNewUltralight text-[#000] text-xl sm:text-3xl w-[75%]"
                            >
                                {item.title}
                            </p>
                       </div>
                        <div 
                            className={`${active === index ? 'rotate-active':'rotate-in-active'} transition-all cursor-pointer`}
                        >
                            <DynamicArrow 
                                strokeColor='#22203E'
                                className="h-[30px] w-[30px]"
                            />
                        </div>
                    </div>
                    <div
                        className={`overflow-hidden ${active === index ? 'active-height mt-4': 'in-active-height mt-0'} transition-all`}
                    >
                        <p className="text-[#22203E] font-inter font-semibold leading-4 sm:leading-5 text-xs sm:text-sm">
                            {item.description}
                        </p>
                    </div>
                </li>
            )
        })}
    </ul>
  )
}

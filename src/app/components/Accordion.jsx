'use client'

export default function Accordion({ data, className }) {


  return (
    <ul className={`${className}`}>
        {data.map((item) => {

            let colors = ['#FFD238', '#EF4976', '#FFFFFF', '#13C1E3']

            const colorsLength = colors.length

            const randomBg = colors[Math.floor(Math.random() * colorsLength)]


            return(
                <li    
                    key={item.id}
                    style={{
                        background: `${randomBg}`
                    }}
                >
                    Accordion item
                </li>
            )
        })}
    </ul>
  )
}

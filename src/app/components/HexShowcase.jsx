import React from 'react'

export default function HexShowcase() {

    const hexData = [
        {
            id: 0,
            number: '75%',
            text: 'of students from India'
        },
        {
            id: 1,
            number: '25%',
            text: 'of students International'
        },
        {
            id: 2,
            number: '200',
            text: 'Educator participants'
        },
    ]

  return (
    <section className='flex items-center justify-center w-full'>
        {hexData.map((item, index) => {
            let bgColor, postion, textColor;

            // if(item.id !== 1) {
            //     bgColor='bg-purple'
            //     textColor='text-white'
            // } else {
            //     bgColor='bg-[#FFD238]'
            //     textColor='text-[#222427]'
            // }

            if(index === 0) postion='left-6 -z[10]'

            if(index === 2) postion='right-6'

            return(
            <div key={item.id} className={`relative ${postion}`}>
                <div key={item.id} className="hex h-[250px] w-[250px] grid place-items-center bg-white overflow-hidden">
                    <div className={`hex ${bgColor} bg-purple transition-all text-white hover:text-purpleB hover:bg-[#FFD238] h-[99%] w-[99%] grid place-items-center text-center`}>
                        <p className={`leading-[20px] ${textColor} relative top-1`}>
                            <span className="font-PPEdNewRegular text-6xl">{item.number}</span><br/><span className="font-inter text-sm flex w-[70%] mx-auto leading-4">{item.text}</span>
                        </p>
                    </div>
                </div>
            </div>
            )
        })}
    </section>
  )
}

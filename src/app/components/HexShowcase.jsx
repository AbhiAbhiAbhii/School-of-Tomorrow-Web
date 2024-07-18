import React from 'react'

export default function HexShowcase() {

    const hexData = [
        {
            id: 0,
            number: '75%',
            text: 'of the 100 School Leader participants will be from India’s schools'
        },
        {
            id: 1,
            number: '25%',
            text: 'will come from across the world'
        },
        {
            id: 2,
            number: '200',
            text: 'additional educator participant will attend key parts of the conference open to the wider public'
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
                <div
                    className={
                        `hex grid place-items-center bg-white overflow-hidden 
                        h-[250px] w-[250px]
                        2xl:h-[300px] 2xl:w-[300px]
                        3xl:h-[400px] 3xl:w-[400px]`
                    }
                >
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

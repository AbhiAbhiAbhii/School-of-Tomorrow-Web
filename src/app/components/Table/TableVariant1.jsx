import Image from "next/image"
import BlockA from "../SideBar/BlockA"

export default function TableVariant1({item, index, className, style}) {

  return (
    <div 
        className={`
                h-[660px] border border-[#4D4C61] py-12 px-8 sm:p-12 space-y-12
                ${index === 2 ? 'bg-[#FFD238]':''} ${className}
            `}
            style={style}
    >
        <div className='space-y-6'>
            <div className="absi">
                <Image 
                    src={
                        index !== 2 ?
                        "/registration-close.svg"
                        :
                        "/Registration-open.svg"
                    }
                    alt="img"
                    height={56}
                    width={56}
                />
            </div>
            <p 
                className={
                    `flex ${index === 2 ? 'text-[#22203E]':'text-[#4D4C61]'} text-6xl sm:text-7xl font-PPEdNewUltralight`
                }
            >
                {item.date}<sup className='text-lg sm:text-3xl'>{item.day}</sup>
            </p>
            <p
                className={`font-inter font-semibold text-2xl ${index === 2 ? 'text-[#22203E]':'text-white'}`}
            >
                {item.title}
            </p>
        </div>

        {/* Render table */}

        <div
            className='agenda-scroll overflow-y-scroll h-[250px]'
        >
            <ul>
                <table className='w-full'>
                    <tbody 
                        className={
                            `font-inter font-semibold ${index === 2 ? 'text-[#22203E]':'text-white'} text-base w-full`
                        }
                    >
                        {item.tableDetails.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td className='pb-4'>{item.time}</td>
                                    <td className='pb-4'><Image src={item.icon} alt='text' height={25} width={25} /></td>
                                    <td className='pb-4'>{item.text}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </ul>
        </div>
        {index === 2 && (
            <BlockA 
                className='!mt-4'
            />
        )}
    </div>
  )
}

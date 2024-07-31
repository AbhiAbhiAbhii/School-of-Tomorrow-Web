import Image from "next/image"
import BlockA from "../SideBar/BlockA"

export default function TableVariant1({item, index, className, style}) {

  return (
    <div 
        className={`
                h-[590px] border border-[#4D4C61] bg-[#FFD238] py-12 px-8 sm:p-12 space-y-12 w-full
                ${className}
            `}
            style={style}
    >
        <div className='space-y-6'>
            <p 
                className={
                    `flex text-[#22203E] text-6xl sm:text-7xl font-PPEdNewUltralight`
                }
            >
                {item.date}<sup className='text-lg sm:text-3xl'>{item.day}</sup>
            </p>
            <p
                className={`font-inter font-semibold text-2xl text-[#22203E]`}
            >
                {item.title}
            </p>
        </div>

        {/* Render table */}
        <div className='agenda-scroll overflow-y-scroll h-[250px] w-full'>
            <ul>
                <table className='w-full'>
                    <tbody 
                        className={
                            `font-inter font-semibold text-[#22203E] text-base w-full`
                        }
                    >
                        {item.tableDetails.map((item, i) => {
                            return(
                                <tr className="flex items-start gap-2 sm:gap-2" key={i}>
                                    <td className='pb-4 text-lg'>{item.time}</td>
                                    <td className='hidden sm:flex pb-4'><Image src={item.icon} alt='text' height={25} width={25} /></td>
                                    <td className='pb-4'>
                                        <p className="text-lg">{item.text}</p>
                                        {item.descriptionDetails && (
                                            <div className="space-y-4">
                                                {item.descriptionDetails.map(details => (
                                                <p className="font-semibold w-full sm:w-full" key={details.title}>
                                                    {details.title}<span className="text-sm">{details.description !== null && (`: ${details.description}`)}</span>
                                                </p>
                                            ))}
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </ul>
        </div>
        <BlockA 
            className='!mt-4'
        />
    </div>
  )
}

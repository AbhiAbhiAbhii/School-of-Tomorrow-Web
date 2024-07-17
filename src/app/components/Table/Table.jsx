import Image from 'next/image'
import React from 'react'

export default function Table({ data }) {
  return (
    <div>
        <table>
            <tbody>
                <tr className='font-inter text-sm text-white'>
                    <td>{data.time}</td>
                    <td>
                        <Image 
                            src={data.icon}
                            height={20}
                            width={20}
                            alt='icon'
                        />
                    </td>
                    <td>{data.description}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

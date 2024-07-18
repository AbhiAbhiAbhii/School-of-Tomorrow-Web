import React from 'react'
import Eyebrow from './Eyebrow'
import AgendaCard from './AgendaCard'
import { tableData } from '../../../data'
import Image from 'next/image'
import TableVariant1 from './Table/TableVariant1'

export default function Agenda() {
    {/* {tableData.map((item) => <AgendaCard key={item.day} tableData={item} />)} */}

  return (
    <div className='agenda scroll-m-7 space-y-12'>
        <Eyebrow 
            text='Program Agenda'
            isSingle 
        />
        <div className='flex flex-wrap gap-4 w-full'>
            {
                tableData.map((item, index) => {
                    return  <TableVariant1 index={index} key={item.id} item={item} />
                })
            }
        </div>
    </div>
  )
}

import React from 'react'
import Table from './Table/Table'
import Separator from './Separator'

export default function AgendaCard({ tableData }) {
  return (
    <div className='space-y-4 w-[40%] p-6'>
        <div className='text-[#FBFAED] space-y-3'>
            <p className='font-PPEdNewUltralight text-7xl'>{tableData.day}</p>
            <p className='text-sm'>
                {tableData.description}
            </p>
        </div>
        <Separator className="bg-white !p-[2px]" />
        <div className='space-y-4 !mt-10'>
            {tableData.table.map(item => {
                return (
                    <Table key={item.id} data={item}/>
                )
            })}
        </div>
    </div>
  )
}

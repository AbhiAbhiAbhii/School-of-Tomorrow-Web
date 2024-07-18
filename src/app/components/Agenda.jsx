import React from 'react'
import Eyebrow from './Eyebrow'
import AgendaCard from './AgendaCard'
import { tableData } from '../../../data'

export default function Agenda() {

  return (
    <div className='agenda scroll-m-7 space-y-12'>
        <Eyebrow 
            text='Program Agenda'
            isSingle 
        />
        <div className='flex flex-wrap gap-12'>
            {/* {tableData.map((item) => <AgendaCard key={item.day} tableData={item} />)} */}
        </div>
    </div>
  )
}

'use client'

import React, { useEffect, useState } from 'react'

export default function Reveal() {

  const [mount, setMount] = useState(false)

  useEffect(() => {
    setTimeout(() => setMount(true), 2000)
  }, [])


  return (
    <>
    {
        mount ?
        null
        :
        <div className='fade-out h-full w-full absolute top-0 left-0 transition-all z-20 bg-purple' />
    }
    </>
  )
}

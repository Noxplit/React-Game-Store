import React from 'react'
import './genere.css'

export default function Genere({genere}) {
  return (
    <div className='flex flex-col bg-[#313033] rounded-xl px-4 py-2 justify-center items-center '>{genere}</div>
  )
}

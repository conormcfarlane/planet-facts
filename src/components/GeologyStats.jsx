import React from 'react'

export default function GeologyStats({planet}) {
    const statistics = [
        {label : "ROTATION TIME", key: "rotation"},
        {label : "REVOLUTION TIME", key: "revolution"},
        {label : "RADIUS", key: "radius"},
        {label : "AVERAGE TEMP.", key: "temperature"},
    ]
  return (
    <div className='w-full flex flex-col gap-2 md:flex-row '>
        {statistics.map((statistic) => (
            <div key={statistic.key} className='flex md:flex-1 flex-col justify-between px-6 py-2 border border-gray-400 ' >
                <p>{statistic.label}</p>
                <p className='md:text-3xl md:tracking-tighter'>{planet[statistic.key]}</p>
            </div>
        ))}
    </div>
  )
}

import React from 'react'

const page = () => {
  return (
    <div className='h-[90vh] flex items-center justify-center text-2xl font-semibold'>
      home
      <svg className='w-[200px] h-[250px]'>
        <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5" />
        <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
          stroke="green" fill="transparent" stroke-width="5" />
        <circle cx="25" cy="75" r="20" />
      </svg>

      <svg>
        <path d='M 10 80 Q 95 10 180 80' />
      </svg>
    </div>
  )
}

export default page

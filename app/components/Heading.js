import React from 'react'

const Heading = ({title}) => {
  return (
    <div className=' text-[32px] font-medium flex items-center gap-4 py-16'>
         {title}
         <div className=' h-[2px] w-[40px] bg-yellow-400 translate-y-1 '></div>
    </div>
  )
}

export default Heading
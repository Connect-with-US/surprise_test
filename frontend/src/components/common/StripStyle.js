import React from 'react'

const StripStyle = ({value,value1}) => {
  return (
    <div className={`grid h-12 w-[99%] mx-auto place-items-center    bg-gray-800 rounded-${value1?(value1):("t-full")} text-white text-xl text-center font-semibold`}>
    <p >{value}</p>
    
  </div>
  )
}

export default StripStyle

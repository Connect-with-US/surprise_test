import React from 'react'

const StripStyle = ({value,value1}) => {
  return (
    <div className={`grid h-12 w-[99%] mx-auto  mb-3 place-items-center    
    bg-zinc-200 rounded-${value1?(value1):("t-full")}
      text-black text-xl text-center font-semibold`}>
    <p >{value}</p>
    
  </div>
  )
}

export default StripStyle;

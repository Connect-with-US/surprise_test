import React from 'react'

const StripStyle = ({value,value1}) => {
  return (
    <div className={`grid h-12 w-[99%]  mb-3 place-items-center    
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
     from-amber-700 via-orange-300 to-rose-800 rounded-${value1?(value1):("t-full")}
      text-black text-xl text-center font-semibold`}>
    <p >{value}</p>
    
  </div>
  )
}

export default StripStyle

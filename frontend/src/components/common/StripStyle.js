import React from 'react'

const StripStyle = ({value,value1}) => {
  return (
    <div className={`grid h-12 w-[100%]  mt-0  mb-0 place-items-center    
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
     from-amber-600 via-orange-300 to-rose-400 rounded-${value1?(value1):("t-full")}
      text-black text-xl text-center font-semibold`}>
    <p >{value}</p>
    
  </div>
  )
}

export default StripStyle;

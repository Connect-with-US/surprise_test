import React from 'react';

const shareData=[{title:"TWITER"},{title:"LINKDIN"},{title:"GITHUB"}]
const Footer = () => {
  return (
    <div className='m-24 '>
    <div className='flex justify-end  to-90%  h-96 w-full mx-auto border-t-4 border-l-4 rounded-3xl border-teal-400'>
    
        <div className='  h-80 w-full  border-r-4 border-b-4 rounded-2xl border-red-200 bg-gradient-to-r from-gray-500 via-slate-700 to-gray-500  '
        >
        <div className='  h-96 w-full  border-b-4 rounded-3xl border-red-700  '
        >
        <div className='  text-white  h-2  w-11/12 mx-auto  border-t-4 rounded-3xl border-amber-950  '
        >
        <div className='grid grid-cols-3 items-center w-9/12 mt-12 justify-items-center'>
        <div className=' '>
            <p className='text-2xl border-dashed border-b-4 w-full mb-8 font-semibold brightness-100 border-amber-950 '>SHARE</p>
            {
                shareData.map((item,index)=>(
                    <p key={index} className='text-lg font-semibold m-2'>{item.title}</p>
                ))
            }
        </div>
        <div> 
        <p className='text-xl border-dashed border-b-4 w-full mb-8 font-semibold brightness-100 border-amber-950 '>FOLLOW</p>
        {
                shareData.map((item,index)=>(
                    <p key={index} className='text-lg font-semibold m-2'>{item.title}</p>
                ))
            }
        </div>
        <div>
        <p className='text-2xl border-dashed border-b-4 w-full mb-8 font-semibold brightness-100 border-amber-950 '>LEGAL</p>
        {
                shareData.map((item,index)=>(
                    <p key={index} className='text-lg font-semibold m-2'>{item.title}</p>
                ))
            }
        </div>
        </div>
        </div>
        </div>
        </div>
                
    </div>
     
    </div>
  )
}

export default Footer;

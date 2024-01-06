import React, { useState } from 'react'

const AiquestionsFormateStyle = () => {
    const[qdata,setqdata]=useState(false);

  return (
    <div className=' w-6/12  flex flex-col mx-auto  mb-4 justify-center text-center absolute top-20 left-0 right-0'>
      <div>
        <h1 className='text-3xl font-bold m-1'>Generate Question Papers in minutes</h1>
        <h3 className='text-xl font-semibold m-1'>Most Advanced Test Generator</h3>
      </div>
      <div className='flex flex-col w-full gap-y-4 mx-auto min-h-96 border bg-zinc-200 p-4 rounded'>
        <label className='w-full text-start text-xl '>
            <p> Enter A Title For Question Paper<sup>*</sup></p>
            <input className='w-full rounded h-10 px-2 focus:outline-none focus:ring-0  focus:border-green-500 border-2 border-solid mt-2'
                name='title'
                placeholder='enter your question title'
            />

        </label>
        <div className=' grid grid-cols-3 w-full h-12 divide-x-2 bg-neutral-50 justify-center rounded font-semibold'>
            <button onClick={(qdata)=>!qdata} >Type or Paste text</button>
            <button onClick={()=> setqdata( !qdata)}>upload PDF</button>
            <button>PreAisearch</button>
        </div>
        <form>
            <div className='flex  justify-center items-center border-[2px] p-2 rounded min-h-48 border-neutral-50'>
                {qdata ? (<input type='file'name="foo"  accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps" 
                className="text-sm text-stone-500
                        file:mr-5 file:py-1 file:px-3 file:border-none file:w-full
                        file:text-xs file:font-medium
                        file:bg-stone-50 file:text-stone-700
                        hover:file:cursor-pointer hover:file:bg-blue-50
                        hover:file:text-blue-700"/>)
                :(<textarea type='text' placeholder='enter your text' className='w-full min-h-44  bg-zinc-100 justify-start px-2 focus:outline-none
                focus:ring-0  focus:border-gray-300 border-2 border-solid rounded-[8px] text-justify'/>)
                }
            </div>
            <button className='w-full p-3 text-center font-semibold  text-black rounded  bg-emerald-400 hover:border-emerald-400 hover:border-[1px] hover:bg-neutral-50 duration-200'>Generates Questions</button>
        </form>
      </div>
      
    </div>
  )
}

export default AiquestionsFormateStyle;

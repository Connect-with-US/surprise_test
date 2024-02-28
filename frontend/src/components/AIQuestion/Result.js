import React from 'react'
import { useSelector } from 'react-redux'
import { PieChart } from 'react-minimal-pie-chart';

const Result = () => {
    const score=useSelector((state)=>state.AiQuestion.result)
  return (
    <div>
    <div className='flex flex-col  w-full mb-6 h-[288px] bg-gradient-to-r from-gray-800 via-indigo-950 to-gray-500 text-black text-center rounded-b-3xl mt-2'/>
        <div className='w-[50%] h-44 border text-black mx-auto rounded-lg shadow-xl text-center '>

        <h1 className=' shadow-lg p-4 text-xl font-bold'>well come </h1>
        <h1 className=' text-green-500 m-2 text-lg'>This is your score card details</h1>
        <div>
            <h1>{`you got Total score `} <span className=' font-bold m-4'>{`${score}`}</span></h1>
            {/* <h1>{}</h1> */}
        </div>
        {/* <PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    
  ]}
  radius={60}
 
/> */}

        </div>
    </div>
  )
}

export default Result

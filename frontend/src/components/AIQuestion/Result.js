import React from 'react'
import { useSelector } from 'react-redux'
import { PieChart } from 'react-minimal-pie-chart';

const Result = () => {
  const score = useSelector((state) => state.AiQuestion.result)
  console.log("total",score)
  return (
    <div>
      <div className='flex flex-col overflow-hidden w-full mb-6 h-[180px]  text-black text-center rounded-b-3xl mt-2 ' />

      <div className='w-[50%] h-[22rem] border text-black mx-auto rounded-lg shadow-xl text-center mb-36 shadowHai bg-orange-100 '>

        <h1 className=' shadow-lg p-4 text-3xl font-bold'>  Result</h1>
        <h1 className=' text-black m-4 mb-8 text-2xl'>This is your score card details</h1>
        <div className=' grid grid-cols-2 gap-4 '>
          <div className=' border p-5 rounded-2xl'>
            <div>
              <p className=' text-xl font-semibold border-b  p-2 m-4'>1. Each Questions Contains 5 Marks</p>
            </div>
            <div className=' flex gap-10 justify-center text-xl font-bold'>
              <p>Total Correct : <span>{`${score?.correctQuestions}`}</span></p>
              <p> wrong : <span className=' text-red-600'> {`${score?.wrongQuestions}`}</span></p>
            </div>
          </div>
          <div>
            <h1 className=' text-xl font-bold mt-10'>{`Your  Total Score : `} <span className=' text-xl font-bold m-4'>{`${score?.score}`}</span></h1>
            {/* <h1>{}</h1> */}
          </div></div>
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

export default Result;

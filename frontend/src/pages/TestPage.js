import React from 'react'
import BorderStyle from '../components/common/BorderStyle';
import Button from '../components/common/Button';
import AiquestionsFormateStyle from '../components/AIQuestion/AiquestionsFormateStyle';


const Qdata=[
    {question:"What is the name of your country",
    op1:"India",op2:"Nepal",op3:"Bharat",op4:"America"
},
{question:"What is the name of your country",
    op1:"India",op2:"Nepal",op3:"Bharat",op4:"America"
},
{question:"What is the name of your country",
    op1:"India",op2:"Nepal",op3:"Bharat",op4:"America"
},
{question:"What is the name of your country",
    op1:"India",op2:"Nepal",op3:"Bharat",op4:"America"
},
{question:"What is the name of your country",
    op1:"India",op2:"Nepal",op3:"Bharat",op4:"America"
},
{question:"What is the name of your country",
    op1:"India",op2:"Nepal",op3:"Bharat",op4:"America"
},
]
const TestPage = () => {
  return (
    <div className='mr-1 ml-1 relative h-screen'>
      <div className='flex flex-col  w-full mb-6 h-[288px] bg-gradient-to-r from-gray-500 via-slate-700 to-gray-500 text-black text-center rounded-b-3xl mt-3'/>
      
      <AiquestionsFormateStyle />
      {/* <div className='text-black text-center py-2 text-md font-semibold bg-zinc-200'>
        <p>YOUR QUESTION DISPLAY HERE AS SOON AS YOU CLICK ON BUTTON</p>
      </div>
      <div className='flex justify-center flex-col'>
        <div className='grid grid-cols-2 justify-center items-center m-12'>

            {
                Qdata.map((item,index)=>(
                 
                    <div key={index} className='grid  justify-center items-center text-center gap-2'>
                    <div className='flex'>
                    <p>{index+1}.</p>
                    <p>{item.question}</p>
                    </div>
                    <div className='mb-4'>
                    <div className='flex'>
                    <input value={item.op1} type='checkbox'/>
                    <option>{item.op1}</option>
                    </div>
                    <div className='flex'>
                    <input value={item.op2} type='checkbox'/>
                    <option>{item.op2}</option>
                    </div>
                    <div className='flex'>
                    <input value={item.op3} type='checkbox'/>
                    <option>{item.op3}</option>
                    </div>
                    <div className='flex'>
                    <input value={item.op4} type='checkbox'/>
                    <option>{item.op4}</option>
                    </div></div>
                   
                    
                    </div>
                ))
            }
        </div>
        <Button/>
        </div> */}
        
    </div>
  )
}

export default TestPage;

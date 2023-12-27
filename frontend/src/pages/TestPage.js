import React from 'react'

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
    <div>
      <div className='flex flex-col w-full h-96 bg-gradient-to-r from-gray-500 via-slate-700 to-gray-500 text-black text-center mt-0'>
      <p className='text-white text-md mb-6 p-1  w-1/4 mx-auto'>SELECT THE OPTION GET YOUR QUESTION </p>
        <form className='h-full' >
        <div className='flex flex-col gap-y-40'>
        <div className='grid grid-cols-3 w-1/2 mx-auto p-2  text-md font-semibold '>
        <label className='flex w-full justify-center gap-2'>
        <p className='text-white'>PICK FEILD</p>
            <select name="selectedFruit" className='rounded'>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
            </select>
        </label>
        <label className='flex w-full justify-center gap-2'>
        <p className='text-white'>PICK TOPIC</p>
            <select name="selectedFruit" className='rounded'>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
            </select>
        </label>
        <label className='flex w-full justify-center gap-2'>
        <p className='text-white'>PICK SUBTOPIC</p>
            <select name="selectedFruit" className='rounded'>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
            </select>
        </label></div>
        <button className='text-white bg-black rounded py-1 mx-auto justify-center w-1/12 place-items-baseline animate-bounce'>GET</button>
        </div>
        </form>

      </div>
      <div className='text-white text-center text-lg font-medium bg-black'>
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
        <div className='flex justify-center text-white m-12'>
            <button className='text-lg bg-black rounded-3xl p-2 w-1/6 mx-auto'>SUBMIT</button>
        </div>
        </div>
        <div className=" border-dashed w-11/12 mx-auto border-t-4 border-b-4 h-3 border-b-red-950 border-slate-400 hover:border-b-slate-400 hover:border-t-red-950 "/>
    </div>
  )
}

export default TestPage;

import React, { useState } from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useSelector } from 'react-redux';
const Qdata=[
    {question:"What is the name of your country",
    op1:"India",op2:"Nepal",op3:"Bharat",op4:"America"
},
{question:"What is the name of your country",
op1:"India",op2:"Nepal",op3:"Bharat",op4:"America"
},
{question:"What is the name of your country bn bj mjbhjv gyugg gugiu ",
op1:"India",op2:"Nepal",op3:"Bharat",op4:"America"
},

]
const data=[
    {title:"question "},
    {title:"question "},
    {title:"question "},
    {title:"question "},
    {title:"question "},
    {title:"question "},
]

const QuestionsStyle = () => {
    let [current,setNext]=useState(0);
    const question=useSelector(state=>state.AiQuestion.question)
    console.log("i am from style the questions ->>>",question)
    const nextQuestions=()=>(
        setNext(current+1))
  return (
    <div className='flex gap-x-2 text-black text-xl  w-[80%] m-4 mx-auto  '>
        <div className='border-[1px] border-black w-[20%] rounded'>
            
                {
                    data.map((item,index)=>(
                        <div key={index} className='border-2 p-2 m-2 rounded text-center bg-zinc-200'>
                        <p>{` ${index+1} ${" "} ${item.title}`}</p></div>
                    ))
                }
            
        </div>
        <div className=' w-[70%] mx-auto  bg-zinc-100 border-[1px] rounded p-4 '>
            <div className='flex justify-center   mx-auto  text-black gap-x-44  text-2xl font-semibold '>
                <p>Started At <span>12.00</span></p>
                <p>Ended At <span>1.00</span></p>
            </div>
            
            <div className=''>
                <div className={`grid  justify-center items-center shadow-md m-2 h-72 bg-zinc-50 rounded p-6 
                `}>

                    { 
                        question ? (question.map((item,index)=>(
                        
                            <div key={index} className={`grid  justify-center items-center text-center gap-2 ${
                index === current && current <=index && current>=0 ? 'visible' : 'hidden'
              } p-2 `}>
                            <div className='flex m-2'>
                                <p>{index+1}.</p>
                                <p>{item.question}</p>
                            </div>
                            <div className=' grid grid-cols-2 gap-x-6 gap-y-2 mb-4 justify-end'>

                            {
                                item.options.map((item2,index2)=>(
                                    <div key={index2} className='flex gap-x-1'>
                                        <input value={index2+1} type='checkbox'/>
                                        <option>{item2}</option>
                                    </div>
                                ))
                            }
                                
                           </div>
                            
                        </div>
                        ))):("Loading...")
                    }
                </div>
               <div className='flex justify-end m-2'>
               <IoIosArrowDropleftCircle size={30} onClick={()=>{ if(current>=0){return setNext(current-1) }else{return}} }/>
               <IoIosArrowDroprightCircle size={30} onClick={nextQuestions}/>
               

               </div>
            
            </div>
        </div>
    </div>
  )
}

export default QuestionsStyle;

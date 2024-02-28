import React, { useState } from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { AnsValidate } from '../../service/Ai/OpenAi';
import { useNavigate } from 'react-router-dom';

const QuestionsStyle = () => {
    let [current,setNext]=useState(0);
    const questions=useSelector(state=>state.AiQuestion.question)
    console.log("i am from style the questions ->>>",questions)
    const nextQuestions=()=>setNext(current+1)
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [answers, setAnswers] = useState({});
  
  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers({
      ...answers,
      [questionIndex]: selectedOption
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send answers to backend for validation
    console.log("user usetions are",questions)
    console.log("User's answers:", answers);
    dispatch(AnsValidate(answers, questions,navigate))
    // You can now send 'answers' to your backend API for validation
  };

  return (
    // <div className=' text-black text-xl  w-[80%] m-4 mx-auto'>
        
    //             <div className={` w-full h-96
    //                 `}>
    //                 { 
    //                     question ? (question.map((item,index)=>(
                        
    //                         <div key={index} className='flex  ' >

    //                                 <div className=' w-[15%] m-[0.15rem] rounded '>
                                    
    //                                     <div className='border-2 p-2 m-2 rounded text-center bg-zinc-200'>
    //                                     <p>{` ${index+1} ${" "} ${"questions"}`}</p></div>
                    
    //                                 </div>

    //                                 <div className={`grid  w-[70%] bg-zinc-200 justify-center items-center text-center gap-2 ${
    //                                     index === current && current <=index && current>=0 ? 'visible' : 'hidden'
    //                                 } p-2 `}>
    //                                     <div className=' bg-neutral-50  w-full h-full p-2 rounded'>
    //                                         <div className='flex m-2'>
    //                                             <p>{index+1}.</p>
    //                                             <p>{item.question}</p>
    //                                         </div>
    //                                         <div className=' grid grid-cols-2 gap-x-6 gap-y-2 mb-4 justify-end'>

    //                                             {
    //                                                 item.options.map((item2,index2)=>(
    //                                                     <div key={index2} className='flex gap-x-1'>
    //                                                         <input value={index2+1} type='checkbox'/>
    //                                                         <option>{item2}</option>
    //                                                     </div>
    //                                                 ))
    //                                             }
    //                                         </div>
                                            
    //                                     </div>
    //                                         <div className='flex justify-end m-2'>
    //                                         <IoIosArrowDropleftCircle size={30} onClick={()=>{ if(current>=0){return setNext(current-1) }else{return}} }/>
    //                                         <IoIosArrowDroprightCircle size={30} onClick={nextQuestions}/>
    //                                         </div>
    //                                 </div>
    //                         </div>
    //                         ))):("Loading...")
    //                 }
    //             </div>
                
    // </div>
    <div className=' w-full text-center '>
    <h1 className='text-xl font-bold m-4'>Question Paper</h1>
    <div className='w-[60%] mx-auto bg-white shadow-sm border justify-center text-start p-8 rounded-lg'>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className=' m-4'>
            <p>{`${index+1} ${question.question}`}</p>
            <ul className=' m-2'>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleAnswerChange(index, option)}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div><button type="submit" className=' border p-2 px-4 rounded-lg mx-auto justify-center hover:bg-neutral-200'>Submit Answers</button></div>
      </form>
    </div>
  </div>
  )
}

export default QuestionsStyle;

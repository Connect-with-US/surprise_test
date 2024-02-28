import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AiquestionsFormateStyle from '../components/AIQuestion/AiquestionsFormateStyle';
import QuestionsStyle from '../components/AIQuestion/QuestionsStyle';
import TimeComp from '../components/AIQuestion/TimeComp';
import DownloadFormate from '../components/download/DownloadFormate';


const TestPage = () => {
    const question=useSelector(state=>state.AiQuestion.question)
    const loading=useSelector(state=>state.auth.loading)
    const questionData=useSelector(state=>state.AiQuestion.questionData)

  return (
    <div className='mr-1 ml-1   '>
      <div className='flex flex-col  w-full mb-6 h-[288px] bg-gradient-to-r from-gray-800 via-indigo-950 to-gray-500 text-black text-center rounded-b-3xl mt-2'/>
      
      {
        questionData ? (<QuestionsStyle/>): (<AiquestionsFormateStyle />)
      }

     {/* <DownloadFormate/> */}
      
      
        
    </div>
  )
}

export default TestPage;

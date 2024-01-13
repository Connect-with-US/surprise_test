import React from 'react'
import { useSelector } from 'react-redux'
import singleColStyle from './formate_style/singleColStyle'
import DoubleCol from './formate_style/DoubleCol'
const DownloadFormate = () => {
    const Qdata=useSelector(state=>state.AiQuestion.question)
  return (
    <div className='grid grid-cols-2 bg-zinc-200 m-4 '>
      <div>
            <singleColStyle/>
      </div>
      <div><DoubleCol/></div>
      
    </div>
  )
}

export default DownloadFormate

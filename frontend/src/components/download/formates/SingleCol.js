import React from 'react'
import { useSelector } from 'react-redux'
const SingleCol = () => {
  const questions=useSelector(state=>state.AiQuestion.question)
  return (
    <div className=' w-full  '>
    
    <div className='text-center'>
      <form >
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
                
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </form>
    </div>
  </div>
  )
}

export default SingleCol;

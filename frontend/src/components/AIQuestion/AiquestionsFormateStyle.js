import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { OpenAi } from '../../service/Ai/OpenAi';
import { useNavigate } from 'react-router-dom';
const AiquestionsFormateStyle = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const num=2
    const [childValue, setChildValue] = useState('');
    const [content, setContent] = useState(null);
    const handleChildValue = (formData) =>  setChildValue(formData);
    const buttonData=[{lable:'Type or Paste text',
                      component:<TextareaComponent onChildValueChange={handleChildValue}/>
                      },
                    {lable:'Upload pdf',
                    component:<FileUploadComponent/>
                  },
                    {lable:'PreAisearch'}
                  ]

    const loadContent=(component)=>setContent(component)
 
    const submitHandler=async(event)=>{
      event.preventDefault();
      dispatch(OpenAi(childValue,num,navigate))
    }

    const clickHandler=()=>navigate('/downloadformate') 
    
    
  return (
    <div className=' w-6/12  flex flex-col mx-auto  mb-4 justify-center text-center   '>
      <div>
        <h1 className='text-3xl font-bold m-1'>Generate Question Papers in minutes</h1>
        <h3 className='text-xl font-semibold m-1'>Most Advanced Test Generator</h3>
      </div>
      <div className='flex flex-col w-full gap-y-4 mx-auto min-h-96 border bg-zinc-100 p-4 rounded'>
        <label className='w-full text-start text-xl '>
            <p> Enter A Title For Question Paper</p>
            <input className='w-full rounded h-10 px-2 focus:outline-none focus:ring-0  focus:border-green-500 border-2 border-solid mt-2'
                name='title'
                placeholder='enter your question title'
            />

        </label>
        <div className=' grid grid-cols-3 w-full h-12  divide-x-2   justify-center items-center rounded font-semibold'>
           {/* here i have to changes */}

           {
            buttonData.map((item,index)=>(
             <button key={index} onClick={() => loadContent(item.component)} className=' hover:shadow-2xl hover:scale-105  bg-neutral-50 h-full'> 
             {item.lable}</button>
            ))
           }
        </div>
        <form onSubmit={submitHandler}>
            <div className='flex  justify-center items-center border-[2px] p-2 rounded min-h-48 border-neutral-50'>
               {content}
            </div>
            <div className=' flex gap-2'>
            <button className='w-full p-3 text-center font-semibold  text-black rounded  bg-emerald-400 hover:border-emerald-400 hover:border-[1px] hover:bg-neutral-50 duration-200'>Generates Questions</button>
            <button className='w-full p-3 text-center font-semibold  text-black rounded  bg-emerald-400 hover:border-emerald-400 hover:border-[1px] hover:bg-neutral-50 duration-200' onClick={clickHandler}>Download Question</button></div>
        </form>
      </div>
      
    </div>
  )
}



const TextareaComponent = ({onChildValueChange}) => {
  const [formData,setFormData]=useState({
    message:""
  })
  function changeHandler(event){
    setFormData((prevData)=>(
      {...prevData,
      [event.target.name]:event.target.value}
    ))
    onChildValueChange(formData);
  }
  return (
    <textarea type='text' name="message" value={formData.value} onChange={changeHandler} placeholder='enter your text' className='w-full min-h-44  bg-zinc-100 justify-start px-2 focus:outline-none
                focus:ring-0  focus:border-gray-300 border-2 border-solid rounded-[8px] text-justify'/>
  )
};


const FileUploadComponent = () => {
  return (
    <input type='file'name="foo"  accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps" 
                className="text-sm text-stone-500
                        file:mr-5 file:py-1 file:px-3 file:border-none file:w-full
                        file:text-xs file:font-medium
                        file:bg-stone-50 file:text-stone-700
                        hover:file:cursor-pointer hover:file:bg-blue-50
                        hover:file:text-blue-700"/>
  );
};



export default AiquestionsFormateStyle;

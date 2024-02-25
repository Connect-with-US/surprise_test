import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { OpenAi } from '../../service/Ai/OpenAi';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AiquestionsFormateStyle = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {
      register,
      handleSubmit, } = useForm();
    
    const [childValue, setChildValue] = useState('');
    const [content, setContent] = useState(null);
    const handleChildValue = (formData) =>  setChildValue(formData);
    const buttonData=[{lable:'Type or Paste text',
                      component:<TextareaComponent onChildValueChange={handleChildValue}/>
                      },
                    {lable:'Upload pdf',
                    component:<FileUploadComponent onChildValueFileChange={handleChildValue} />
                  },
                    {lable:'PreAisearch'}
                  ]

    const loadContent=(component)=>setContent(component)
 
    const submitHandler=async(data)=>{
      const num=data?data.number:2;
      dispatch(OpenAi(childValue,num,navigate))
    }

    const clickHandler=()=>navigate('/downloadformate') 

  return (
    <div className=' w-6/12  flex flex-col mx-auto  mb-4 justify-center text-center'>
      <div>
        <h1 className='text-3xl font-bold m-1'>Generate Question Papers in minutes</h1>
        <h3 className='text-xl font-semibold m-1'>Most Advanced Test Generator</h3>
      </div>
      <div className='flex flex-col w-full gap-y-4 mx-auto min-h-96 border bg-zinc-100 p-4 rounded'>
      <form onSubmit={ handleSubmit(submitHandler) }>
      <div className=' felx flex-row justify-start gap-x-4'>
        <label className='text-start text-xl'>       
            <p> Enter A Title For Question Paper</p>
            <input className=' w-[90%]  rounded h-10 px-2 focus:outline-none focus:ring-0  focus:border-green-500 border-2 border-solid mt-2'
                name='title' placeholder='enter your question title'/>
        </label>
        <label className='text-xl'> 
            <input className='w-[10%] text-center rounded h-10 px-2 focus:outline-none focus:ring-0  focus:border-green-500 border-2 border-solid mt-2'
                 placeholder='2' 
                  {...register("number")}
                />
        </label>

        </div>
        <div className=' grid grid-cols-3 w-full h-12  divide-x-2   justify-center items-center rounded font-semibold'>
           {/* here i have to changes */}

           {
            buttonData.map((item,index)=>(
             <button key={index} type='button' onClick={()=> loadContent(item.component)} className=' hover:shadow-2xl hover:scale-105  bg-neutral-50 h-full'> 
             {item.lable}</button>
            ))
           }
        </div>
        
        <div>
            <div className='flex  justify-center items-center border-[2px] p-2 rounded min-h-48 border-neutral-50'>
               {content}
            </div>
            <div className=' flex gap-2'>
            <button type='submit'  className='w-full p-3 text-center font-semibold  text-black rounded  bg-emerald-400 hover:border-emerald-400 hover:border-[1px] hover:bg-neutral-50 duration-200'>Generates Questions</button>
            <button className='w-full p-3 text-center font-semibold  text-black rounded  bg-emerald-400 hover:border-emerald-400 hover:border-[1px] hover:bg-neutral-50 duration-200' onClick={clickHandler}>Download Question</button></div>
            </div>
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


  const FileUploadComponent =({onChildValueFileChange}) => {
  const[filedata,setfiles]=useState({data:""});
  const {data}=filedata
  const handlechange=(e)=>{
    // console.log("our files are coming",e.target.files[0]);
    const file=e.target.files[0];
    setfiles(file);
    onChildValueFileChange(file);  
  }
  
  return (
    <input type='file'name="file"  accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps" 
   onChange={handlechange}
   value={data} 
   multiple
                className="text-sm text-stone-500
                        file:mr-5 file:py-1 file:px-3 file:border-none file:w-full
                        file:text-xs file:font-medium
                        file:bg-stone-50 file:text-stone-700
                        hover:file:cursor-pointer hover:file:bg-blue-50
                        hover:file:text-blue-700"/>
  );
};



export default AiquestionsFormateStyle;

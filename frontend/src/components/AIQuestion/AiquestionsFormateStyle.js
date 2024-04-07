import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { OpenAi } from '../../service/Ai/OpenAi';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AiquestionsFormateStyle = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const preai="Indian youth are the youngest compared to youth in other countries. what is the top 10 advantage of it"
    const {
      register,
      handleSubmit, } = useForm();
    
    const [childValue, setChildValue] = useState('');
    const [content, setContent] = useState(null);
    const handleChildValue = (formData) =>  setChildValue(formData);
    const handleChildValue2=(preai)=>setChildValue(preai);
    const buttonData=[{lable:'Type or Paste text',
                      component:<TextareaComponent onChildValueChange={handleChildValue}/>
                      },
                  //   {lable:'Upload pdf',
                  //   component:<FileUploadComponent onChildValueFileChange={handleChildValue} />
                  // },
                    {lable:'PreAisearch',
                    // component:<TextareaComponent  onChildValueChange={handleChildValue2}/>
                    component:<textarea type='text' name="message" value={preai}  className='w-full min-h-44  bg-zinc-100 justify-start px-2 focus:outline-none
                    focus:ring-0  focus:border-gray-300 border-2 border-solid rounded-[8px] text-justify'/>
                  }
                  ]

    const loadContent=(component)=>setContent(component)
 
    const submitHandler=async(data)=>{
      const num=data?data.number:5;
      dispatch(OpenAi(childValue,num,navigate))
    }

    

  return (
    <div className='w-6/12  flex flex-col mx-auto  mb-4 justify-center text-center'>
      <div>
      <div className='flex'><h2 className='text-3xl font-bold m-1 ml-10 font-md' >Generate question Papers</h2>
      <span className='text-3xl  m-1 font-edu-sa font-bold italic text-blue-600'>in seconds</span>
      </div> 
        <h3 className='text-xl font-semibold mb-4 gap-5 ModernEra rounded '> <span className='bg-violet-300' >Most Advanced Test Generator</span></h3>
      </div>
      <div className='bg-orange-300 flex flex-col w-full  mx-auto min-h-96  shadowHai p-6 rounded'>
      <form onSubmit={ handleSubmit(submitHandler) }>

        <label className=' Open Sans text-xl text-center font-semibold '>       
            <p> Put your Topic or Discription</p>
            {/* <input className='shadow w-[50%]  rounded h-10 px-2 focus:outline-none focus:ring-0   border-2 border-solid mt-2'
                name='title' placeholder='enter your question title'/> */}
        </label>
        <label className='m-2 text-xl'> 
            <input className=' w-[50%] text-center rounded h-10 px-2 focus:outline-none focus:ring-0 border-2 border-solid mt-2'
                 placeholder='No of questions default 2 ' 
                  {...register("number")}
                />
        </label>

        <div className='grid grid-cols-2 w-full h-12  divide-x-2 justify-center items-center rounded font-semibold m-1'>
           {/* here i have to changes */}

           {
            buttonData.map((item,index)=>(
             <button key={index} type='button' onClick={()=> loadContent(item.component)} className=' hover:shadow-2xl hover:scale-105  bg-neutral-50 h-full m-1 rounded-sm'> 
             {item.lable}</button>
            ))
           }
        </div>
        
        <div>
            <div className='flex justify-center items-center border-[2px] p-2 rounded min-h-48 border-neutral-50'>
               {content}
            </div>
            <div className='flex gap-2 mx-auto w-full justify-center '>
            <button type='submit' className='border bg-blue-300 p-2 px-3 rounded-lg hover:bg-neutral-50 m-2'>Generates Questions</button>
            </div>
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
                        hover:file:text-blue-700 "/>
  );
};



export default AiquestionsFormateStyle;

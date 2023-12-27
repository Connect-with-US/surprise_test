import React from 'react'
import imge from "../assets/login.png"
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { apiConnector } from '../service/apisConnector'

const BASE_URL="http://localhost:8000";
const TestData=[
  {title:"DSA",
  des:"This is for codeing test your skill as this level",
  photo:imge
  },
  {title:"DSA",
  des:"This is for codeing test your skill as this level",
  photo:imge
  },
  {title:"DSA",
  des:"This is for codeing test your skill as this level",
  photo:imge
  },
  {title:"DSA",
  des:"This is for codeing test your skill as this level",
  photo:imge
  },
  {title:"DSA",
  des:"This is for codeing test your skill as this level",
  photo:imge
  },
  {title:"DSA",
  des:"This is for codeing test your skill as this level",
  photo:imge
  },
  {title:"DSA",
  des:"This is for codeing test your skill as this level",
  photo:imge
  },
  {title:"DSA",
  des:"This is for codeing test your skill as this level",
  photo:imge
  },
  {title:"DSA",
  des:"This is for codeing test your skill as this level",
  photo:imge
  },
  {title:"DSA",
  des:"This is for codeing test your skill as this level",
  photo:imge
  },
  {title:"DSA",
  des:"This is for codeing test your skill as this level",
  photo:imge
  },
  {title:"DSA",
  des:"This is for codeing test your skill as this level",
  photo:imge
  }
]


const Home = () => {

  const[data,setData]=useState([]);
 
  useEffect(()=>{
    (async()=>{
    // const response=await axios.get('https://jsonplaceholder.typicode.com/users')
    const response=await apiConnector('GET',BASE_URL+'/')
    console.log(response.data);
    })()
  })

  console.log(`all data are get from server ${data}`)


  let navigate=useNavigate();

  return (
    <div className=' '>
      <div className='grid grid-cols-3 w-full h-96 bg-gradient-to-r from-gray-500 via-slate-700 to-gray-500 rounded-b-3xl ml-1 mr-1  text-center text-white justify-center place-items-center text-3xl gap-x-8'>
        <div className='bg-red-100 w-11/12 rounded-r-full rounded-b-full rounded-t-full mb-24 h-1/6' />
        <div className='grid gap-20'>
        <p className='text-white hover:text-purple-300 hover:border-b-4 hover:p-2 hover:rounded-full duration-500 cursor-pointer' > AI BASED TEST ASSISTEMENT </p>
        <button onClick={()=>(navigate('/testpage'))} className='animate-bounce text-xl bg-black rounded-3xl py-2 px-4 w-1/3 mx-auto'>TAKE TEST</button>
        <p className='w-full h-1 border-b border-dashed border-t '/>
        </div>
        <div className='bg-red-400 w-11/12 h-1/6 rounded-full' />
      </div>
      <div className='h-12 w-[96%] mx-auto  place-items-center bg-gray-800 rounded-t-full text-white text-xl text-center font-semibold'>
        <p>TEST YOUR SKILL</p>
        
      </div>
      <div className="mt-1 border-dashed w-11/12 mx-auto border-t-4 border-b-4 h-3 border-b-red-950 border-slate-400 hover:border-b-slate-400 hover:border-t-red-950 "/>

      <div className='grid grid-cols-6 w-[96%] mx-auto mb-1 mt-6 divide-x divide-y divide-white'>
        {
          TestData.map((item,index)=>(
            <div key={index} className='grid  bg-gray-700 text-white place-content-center text-center p-2 rounded '>
            <p className='text-3xl font-semibold  '>{item.title}</p>
            <p>{item.des}</p>
            <img src={item.photo} sizes={30} className='rounded-xl object-cover w-56 h-48 mx-auto'/>
            </div>
          ))
        }
      </div>
      <div className='h-12 w-[96%] mx-auto  place-items-center bg-gray-800 rounded-b-full text-white text-xl text-center'/>
       
        
  
    </div>
  )
}

export default Home;

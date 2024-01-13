import React from 'react'
import roshan from "../../assets/roshan.jpg"
import nishant from "../../assets/nishant.jpg"
import tanisha from "../../assets/tanisha.jpg"
import pic from "../../assets/pic.jpeg"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const DeveloperListData=[
    {
        name:"Roshan",
        image:roshan,
        linkedinUrl:'https://www.linkedin.com/in/roshan-kr-11070b1a3/',
        gitHubUrl:'https://github.com/RoshanAnsy',
    },{
        name:"Shivam",
        image:pic,
        linkedinUrl:'https://www.linkedin.com/in/shivam-kumar-gaurav-6479561bb/',
        gitHubUrl:'https://github.com/ShivamShroff',
    },{
        name:"Nishant",
        image:nishant,
        linkedinUrl:'https://www.linkedin.com/in/nishant-kumar-a52a6a1b2/',
        gitHubUrl:'https://github.com/Dataworld123',
    },{
        name:"Tanisha",
        image:tanisha,
        linkedinUrl:'https://www.linkedin.com/in/tanisha-singh-198153221/',
        gitHubUrl:'https://github.com/Tanishasingh537',
    },
    

];

const DeveloperList = () => {
    const iconStyle='  fill-zinc-600 hover:fill-teal-600 hover:scale-125 duration-200 hover:shadow-2xl hover:bg-zinc-200 rounded ';
  return (
    <div className='flex flex-col w-[10%] h-auto  border justify-start items-center mt-6 mb-12 rounded-lg ml-8 mr-4 text-slate-600'>
        <h1  className='w-[95%] p-1 mt-1 mb-4 cursor-pointer font-bold text-center bg-zinc-100 rounded-md ' >DEVELOPERS</h1>
        <div>
        {
            DeveloperListData.map((item,index)=>( 
                <div key={index} className='p-2 mt-2  mb-8 ' > 
                <img src={item.image} alt='...' width={90} height={90} className=' border contrast-125  rounded-full p-[2px] bg-zinc-300 object-cover contract-200' />
                <h1  className='m-2 font-bold  text-center border-b-[2px]'>{item.name} </h1>
                <div className='flex justify-around'>
                    <a href={item.linkedinUrl} target='_blank' rel="noopener noreferrer" ><CiLinkedin size={22} className={iconStyle}/></a>
                    <a href={item.gitHubUrl} target='_blank' rel='noopener noreferrer'><FaGithub size={18} className={iconStyle}/></a>
                </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default DeveloperList;

import React from "react";
import Tanisha from "../assets/tanisha.jpg"
import Nishant from "../assets/nishant.jpg"
import Shivam from "../assets/pic.jpeg"
import Roshan from "../assets/roshan.jpg"

const contact = () =>{
    return(
<div>
  <div class="bg-slate-50">
      <div class="container mt-[135px] mx-auto my-20 w-1/3 border  bg-white">
      <div class="p-5 space-y-5 shadow-xl">
        <h4 class="text-center text-3xl">Contact Us</h4>
    
        <form>
          <div class="grid grid-cols-2 gap-5">
            <input
              type="text"
              class="border border-gray-500 px-4 py-2 focus:outline-none focus:bg-blue-500"
              placeholder="First Name"
            />
            <input
              type="text"
              class="border border-gray-500 px-4 py-2 focus:outline-none focus:bg-blue-500bg"
              placeholder="Last Name"
            />
            <input
              type="email"
              class="border border-gray-500 px-4 py-2 focus:outline-none focus:bg-blue-500 col-span-2"
              placeholder="Email"
            />
            <input
              type="tel"
              class="border border-gray-500 px-4 py-2 focus:outline-none focus:bg-blue-500 col-span-2"
              placeholder="Phone"
            />
            <textarea
              cols="10"
              rows="5"
              class="border border-gray-500 px-4 py-2 focus:outline-none focus:bg-blue-500 col-span-2"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Message"
            class="focus:outline-none mt-5 bg-blue-500 px-4 py-2 text-white font-bold w-full"
          />
        </form>
      </div>
    </div>
  </div>
<div class="max-w-[1320px] mx-auto">
  <h1 class="text-4xl text-center font-bold py-6 mb-[45px]">Meet Our Team</h1>
</div>
<div class="max-w-[1320px]  rounded-xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-14 px-20px">
    <div class="shadow-lg  mx-auto h-72 w-72 hover:transform hover:scale-125 transition-transform duration-1000 ease-in-out bg-slate-100  ">
      <img class="h-36 w-36 rounded-full border-2 border-white mx-auto" src={Roshan} alt="Not Found"/>
         <div class="text-center" >
         <h1 class="text-lg font-medium text-center">Roshan Kumar</h1>
         <p text-white-100 mx-auto>Hello Everyone we have built the website for you to have smooth experience</p>
         </div>
    </div>

    <div class="shadow-lg bg-slate-100 h-72 w-72 hover:transform hover:scale-125 transition-transform duration-1000 ease-in-out rounded">
      <img class="h-36 w-36 rounded-full  mx-auto  border-2 border-white" src={Shivam}alt="Not Found"/>
         <div class="text-center" >
         <h1 class="text-lg font-medium text-center">Shivam Kumar Gaurav</h1>
         <p text-white-100 mx-auto>Hello Everyone we have built the website for you to have smooth experience</p>
         </div> 
        
      
    </div>

    <div class="shadow-lg bg-slate-100 h-72 w-72  hover:transform hover:scale-125 transition-transform duration-1000 ease-in-out ">
      <img class="h-36 w-36 rounded-full border-2 border-white mx-auto"src={Nishant} alt="Not Found"/>
         <div class="text-center" >
         <h1 class="text-lg font-medium text-center">Nishant Kumar</h1>
         <p text-white-100 mx-auto>Hello Everyone we have built the website for you to have smooth experience</p>
         </div>
    </div>

    <div class="shadow-lg bg-slate-100 h-72 w-72  hover:transform hover:scale-125 transition-transform duration-1000 ease-in-out ">
      <img class="h-36 w-36 rounded-full border-2 border-white mx-auto" src={Tanisha} alt="Not Found"/>
         <div class="text-center " >
         <h1 class="text-lg font-medium text-center">Tanisha Singh</h1>
         <p text-white-100 mx-auto >Hello Everyone we have built the website for you to have smooth experience</p>
         </div>
    </div>

</div>

<div class="text-center mt-[135px]  ">
  <h1 text-center class="text-center mt-[135px] text-3xl font-bold">Check Out Quiz Fuse Open Source Library</h1>
    <a href="https://github.com/Connect-with-US">
   <button class="bg-blue-500 py-5 px-10 text-xl rounded-full mt-[40px] text-white "> Click Here To Go To Github Library</ button>
  </a>
 </div> 

            
             
                   
             
             
   </div>  
  
    
 )

};

export default contact;
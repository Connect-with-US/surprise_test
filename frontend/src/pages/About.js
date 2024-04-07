import React from "react";
import testPage from "../assets/testPage.png"
import resultPage from "../assets/resulT.png"
import signup from "../assets/signup.png"
import teach from "../assets/teacher.jpg" 
import hr from "../assets/hr.avif"
import publish from "../assets/publish.avif"
const About = () =>{
    return(
        <div class="w-[1200px] mt-14 grid gap-8 px-5 py-20 text-white mx-auto">
            <div class="bg-cyan-50 px-14 pt-14 py-40 h-screen text-center  ">
                 <h1 class="text-6xl py-10 font-bold text-stone-950 text-center p-20  "> Create Multiple Choice Questions (MCQs) online from any text using AI.
                 </h1>
                 <button class="w-28 h-12  pb-15 px-4  bg-blue-500 text-white rounded-lg hover:bg-blue-700 hover:text-gray-100 transition duration-100">Try it Free</button>

            </div>

          <div class="w-[1200px] my-6 grid h-auto py-10 s bg-white-50 ">
            <h1 class="text-stone-950 p-15 text-4xl py-2 text-center font-bold">
            How it works
            </h1>
             
             <div class="flex flex-row pt-8 gap-20 px-14 ">
              <div >
                <img src={testPage} alt="photo" />
              </div>
              <div >
              <img src={resultPage} alt="photo"  />
               
              </div>

              </div>
               
              <div class="w-[1200px] my-14 mb-0 h-auto mx-auto  ">
              <h1 class="text-stone-950  text-4xl py-14 text-center font-bold">
              Who is it for?
            </h1>
            </div>
              <div className=" flex flex-cols-3 justify-center gap-14 w-[1200px]  mx-auto ">
                
              <div class="  w-full h-auto rounded-md shadow-sm hover:shadow-2xl   duration-300 bg-slate-300 ring-2 ring-slate-500 hover:ring-4">
              <img src={teach} alt="photo" />
              <h3 class="py-2 px-8 text-3xl text-stone-950 font-bold text-center">
                  Teachers and Schools
              </h3>  
              <span class="text-stone-950 flex px-6 pb-4">
                  Teachers and Schools can use the QuizFuiz authoring tool to create worksheets easily in a few seconds. They can avoid repetitive questions chosen from a fixed question bank every year.
              </span>
          </div>


              <div class="w-full h-auto rounded-md shadow-sm hover:shadow-2xl transition-transform duration-300  bg-slate-300 ring-2 ring-slate-500 hover:ring-4" >
               
                <img src={hr} alt="photo" />
                
               <h3 class="py-4 px-8 text-3xl text-stone-950 font-bold text-center">
               HR Teams
                </h3>  
                <span class=' text-stone-950 flex  px-6 pb-6'>
                HR teams can use QuizFuiz  to create assessments from compliance documents. Every time there is a change in policies, assessments could be generated and given to employees to make sure that they have read and understood the new policies.

                </span>
              </div>
              <div class="w-full h-auto rounded-md shadow-sm hover:shadow-2xl duration-300 ease-in-out bg-slate-300 ring-2 ring-slate-500 hover:ring-4 " >
               
               <img src={publish} alt="photo" />
               
              <h3 class="py-4 px-8 text-3xl text-stone-950 font-bold text-center">
              Publishers and Edtech Companies
               </h3>  
               <span class=' text-stone-950 flex  px-6 pb-6 '>
               Textbook publishers and edtech companies can use QuizFuiz  instead of outsourcing the assessment creation process. They can have a small in-house team and save hugely on time and cost.
                </span>
             </div>
           </div>
           
          </div>

       </div>
    )
};
export default About;
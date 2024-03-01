import {toast} from "react-hot-toast";
import { apiConnector } from "../apisConnector";
import { setLoading } from "../../central/slices/authslice";
import {setQ} from "../../central/slices/Aiquestionslice"
import {setQuestionsData,setResult} from "../../central/slices/Aiquestionslice"

const BASE_URL="http://127.0.0.1:8000/api/v1.1.2";

export function OpenAi(formData,num,navigate){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        
        try{
            const completion=await apiConnector("POST", BASE_URL+"/openai",{
                "num":num,
                "pram":formData.message,
            }
            )
            console.log("openAi responces",completion)
            if(completion){
                toast.success("you get your questions")
                
                dispatch(setQ(completion.data.questions))
                dispatch(setQuestionsData(true)) 
                dispatch(navigate("/text_download_button"))          
            }
            
        }
        catch(err){
            console.log("something is issue while fetching data from openai")
            toast.success("Something is wrong")
           dispatch(navigate("/testpage"))
        }
        dispatch(setLoading(false));
    }
}


//for pdf
// export function OpenAiPdf(pdf,num){
//     try{
//         const pdfres=await apiConnector("post",url,{"pdf":pdf,"num":num});


//     }catch(err){
//         console.log(err.message)
//     }
// }


//Answer validating 
export  function AnsValidate(userAnswers, questions,navigate){
    return async(dispatch)=>{
    try{
        const responceAns=await apiConnector("post",BASE_URL+"/questionsValidate",{
            userAnswers, questions
        })

        console.log(responceAns)
        
        dispatch(setResult(responceAns?.data?.score));
        navigate("/result")

    }
    catch(err){
        console.log(err.message)
    }
}
}
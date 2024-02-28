
  import { apiConnector } from "../apisConnector";
  import {toast} from "react-hot-toast";
  import { setLoading } from "../../central/slices/authslice";
  import { setSignupData } from "../../central/slices/authslice";
  import { setToken } from "../../central/slices/authslice";
  import Cookies from "js-cookie"
  import { setPopStyle } from "../../central/slices/authslice";

 

  const BASE_URL="http://localhost:8000/api/v1.1.2";

  export  function signup(formData ,navigate){
    return async(dispatch)=>{
    
     dispatch(setLoading(true))
    try{
        
        const resp=await apiConnector("POST",BASE_URL+"/signup",
        {
            "name":formData.name,
            "email":formData.email,
            "password":formData.password,
            "conform_p":formData.confirmPassword
        }
        )
        console.log(resp.data)
        if(resp){
            toast.success("Account created sucessfully")
            dispatch(setLoading(false))
            toast.success("account has been created")
            navigate("/login")
        }
        

    }
    catch(err){
        toast.error(err.response ? err.response.data.message : 'Something went wrong');
        dispatch(setLoading(false));
        console.error(err);
        navigate('/signup');
    }
 }
}

//login 
export  function login(formData,navigate){
    
   return async(dispatch)=>{
    dispatch(setLoading(true))
    console.log("our last token are ",localStorage.getItem("token"))
    
        try{
            // localStorage.setItem("token", JSON.stringify(response.data.token))
            // localStorage.setItem("user", JSON.stringify(response.data.user))
            const resp=await apiConnector("POST",BASE_URL+"/login",
            {
                "email":formData.email,
                "password":formData.password
            })
            console.log("when login this data is found",resp.data.user.token)
            if(resp){
                toast.success("Loged In...")
                dispatch(setPopStyle(false))
                dispatch(setSignupData(resp.data))
                dispatch(setToken(resp.data.user.token))
                dispatch(setLoading(false))
                navigate("/")
                // localStorage.setItem("token",JSON.stringify(resp.data.user.token))
                sessionStorage.setItem("token",JSON.stringify(resp.data.user.token))
                Cookies.set()

            }

        }
        catch(err){
        toast.success("something went wrong")
        dispatch(setLoading(false))
        console.log(err);
        console.log(err.message);
        toast.success("login again..")
        navigate("/login")
        }

    }
}

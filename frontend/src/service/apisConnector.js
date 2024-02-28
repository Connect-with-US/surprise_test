import axios from "axios";


export const axiosInstance=axios.create({});

export const apiConnector=(method,url,bodyData,Headers,params)=>{
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data:bodyData? bodyData:null,
        headers:Headers?Headers:null,
        params:params?params:null,
    });
}




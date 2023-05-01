import { useEffect, useState } from "react";
import { fetchDateFromApi } from "../utils/Api/api";
import { MovieData } from "../types/types";


const useFetch=(url:string)=>{
    
const [data,setData]=useState<MovieData | null>()
const [error,setError]=useState<string|null>("")
const [loading,setLoading]=useState<boolean|null>(false)
useEffect(()=>{
 const fetchData=async()=>{
    try {
    const data=await fetchDateFromApi(url);
    setData(data)
    setLoading(false)
    } catch (error) {
        setLoading(false)
        setError('something went wrong')
        console.log(error);
        
    }
    }
    fetchData()

},[url])
return {data,loading,error}
}


export default useFetch;
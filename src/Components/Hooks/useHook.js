import{ useEffect, useState } from 'react'

const useHook = (url) => {
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null)
    const [data,setData]=useState([])

    const fetchData= async (url)=>{
        setIsLoading(true)
        try{
            const response = await fetch(url)
            const data = await response.json();
            setData(data)
            setIsLoading(false)
            setError(null)
        }catch(error){
            setIsLoading(false)
            setError(error)
        }
    }
    

    useEffect(()=>{
        fetchData(url)
    },[url])
   return {isLoading,error,data}
}

export default useHook

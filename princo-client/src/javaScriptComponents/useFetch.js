import {useEffect, useState} from 'react'
import axios from 'axios'



const useFetch = (url) => {
    const[data, setData]=useState([]);
    const[isPending, setIsPending]=useState(true);
    const[error,setError]=useState(null);
    
    useEffect(() => {
            axios.get(url)
                .then(res => {
                    console.log(res)
                    if (!res.request.status===200) {
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.data;
                })
                .then(data=>{
                    setData(data);
                    setIsPending(false);
                    setError(null);

                })
                .catch(err=>{
                    setIsPending(false);
                    setError(err.message)
                })
                
    }, [url])
    

    return {data,isPending,error,setData,}
}

export default useFetch
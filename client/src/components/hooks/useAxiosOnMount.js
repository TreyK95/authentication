import {useState, useEffect} from 'react'
import axios from 'axios'

const useAxiosOnMount = (url) => {
  console.log(url)

  const [data,setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    getData()
  }, [])

  const getData = async()=>{
    try{
      // debugger
      let res = await axios.get(url)
      console.log(res)
      setData(res.data.data ? res.data.data : res.data)
     
    
      setLoading(false)
    } catch(err){
      setError(err)
      setLoading(false)
    }
  }
  return { data: data,loading: loading ,error: error }
}

export default useAxiosOnMount
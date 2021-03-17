import axios from "axios"
import { useEffect, useState } from "react"

const LoadDataDemo = () => {
  // state for component
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // mount
  useEffect(()=>{
      getData()
  },[])
  const getData = async()=>{
      try{
        let res = await axios.get(`https://reqres.in/api/users?delay=3`)
        setData(res.data.data)
        setLoading(false)
      } catch(err){
          setError(err)
          setLoading(false)
      }
  }
  const renderData = () => {
     return data.map(d => <pre>{JSON.stringify(d,null,1)}</pre>)
  }
  if(loading) return <p>Loading</p>
  if(error) return <p>Error occurred</p>
  return(
      <div>
          <h1>Home</h1>
           <div>
             <header>Data:</header>
             {renderData()}
           </div>
      </div>
  )
}
export default LoadDataDemo

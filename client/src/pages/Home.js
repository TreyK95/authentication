import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'


const Home = () => {
  const [testData, setTestData] = useState(null)
  const [loading, setLoading] = useState(true)
  const {user} = useContext(AuthContext)


  useEffect(() => {
    getData()
  }, [])

  const getData = async()=>{
    try{
      let res = await axios.get(`/api/api_test`)
      setTestData(res.data)
      setLoading(false)
    } catch(err){
      alert('err')
      setLoading(false)
  }

}
if(loading) return <p>Loading</p>
  return (
    <div>
      <h1>Home</h1>
      {testData && testData.dataHere}
      <p>User Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  )
}
export default Home 

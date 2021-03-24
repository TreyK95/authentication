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
if(!user) return <p>Please Register or Login</p>
  return (
    <div>
      <h1>Welcome Home {user.email}</h1>
      {/* {testData && testData.dataHere} */}
    </div>
  )
}
export default Home 

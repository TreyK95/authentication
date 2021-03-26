import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'
import {Header, Icon, Image} from 'semantic-ui-react'


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
       {/* <Header as='h1' textAlign='center'>Welcome to myFriendster: {user.email}</Header> */}
       <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Welcome to myFriendster: {user.email} </Header.Content>
    </Header>
    <Image
      centered
      size='large'
      src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
    />
    </div>
  )
}
export default Home 

// this page will be for people that have not yet been friended by anyone. 



import axios from 'axios'
import React, {useState, useContext, useEffect} from 'react'
import { Card, Header, Image } from 'semantic-ui-react'

import { AuthContext } from '../providers/AuthProvider'


const People = () => {
  const [buddies, setBuddies] = useState(null)
  const [loading, setLoading] = useState(true)
  const { user } = useContext(AuthContext)
  
  useEffect(()=>{
    getData()
  },[])

  const getData = async() => {
    try{
      let res = await axios.get('/api/buddies')
      console.log('res buddies')
      console.log('res.data', res.data)
      setBuddies(res.data)
     
      setLoading(false)
    } catch(err) {
      alert('err')
      setLoading(false)
    }
  }
  // const buddy =  buddy[Math.floor(Math.random() * buddies.length)]
  
  // const removeBuddy = (id) => {
  //   const newBuddies = buddies.filter( buddy => buddy.id !== id)
  //   setBuddies(newBuddies)
  // }
 
  // const addBuddy = (id) => {}
  // if(loading) return <p>Loading potential buddies, please wait</p>
  // if(buddies !== null && buddies.length < 1 ) return <p>No more potential buddies</p>
  
  const renderBuddies = () => {
    if(buddies !== null && buddies.length > 1){
      console.log('render buddy test1')
      return buddies.map(buddy =>{
        console.log('render buddy test 2')
          // console.log({buddy})
        return(
          <Card>
            <Card.Header>{buddy.name}</Card.Header>
            <Card.Content>
              <Image src={buddy.avatar} />
            </Card.Content>
            <Card.Description>
              {buddy.email}
            </Card.Description>
          </Card>
        )
      })
    }
  }
  
  return (
    <div>
      <h1>MyBuddies</h1>
      {renderBuddies()}

      
    </div>
  )
}


export default People

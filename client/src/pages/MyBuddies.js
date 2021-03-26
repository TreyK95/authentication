// This page will be for rendering buddies that have already been friended
// can remove friends from this page


import axios from 'axios'
import React, {useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Header, Image } from 'semantic-ui-react'

import { AuthContext } from '../providers/AuthProvider'


const MyBuddies = () => {
  const [buddies, setBuddies] = useState([])
  
  useEffect(()=>{
    getBuddies()
  },[])

  const getBuddies =  async () => {
    try {
      console.log('test1')
      let res = await axios.get('/api/my_buddies')
      console.log('test2', res.data)
      setBuddies(res.data)
    } catch (err){
      alert('error occurred getting your buddies')
    }
  }

  return (
    <>
    <div>

      <h1>MyBuddies</h1>
      <Card.Group itemsPerRow={5}>
        {buddies.map(buddy =>
          <Card key={buddy.id}>
            <Image src={buddy.avatar}/>
            <Card.Content>
              <Card.Header>{buddy.name}</Card.Header>
              <Card.Meta>{buddy.email}{buddy.id}</Card.Meta>
            </Card.Content>
            <Button>Remove Buddy</Button>
          </Card>
          )}
      </Card.Group>
    </div>
    </>
  )
}

export default MyBuddies
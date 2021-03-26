import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, Header } from "semantic-ui-react"

const AddBuddyForm = () => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post('/api/buddies', {name, email, avatar})
      console.log(res)
      history.push('/buddies')
    } catch (err) {
      console.log(err)
    }
  }

  
  return(
    <Form onSubmit={handleSubmit}>
      <Header as="h1" textAlign="center">Create A New Buddy</Header>
      <Form.Input 
         
         label='Name'
          placeholder='Name'
          name='name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
      />
      <Form.Input 
          label='email' 
          placeholder='please type your new buddy email' 
          name='email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
      />
      <Form.Input 
          label='avatar' 
          placeholder='please paste the url of your buddy image here' 
          name='avatar'
          value={avatar}
          onChange={(e)=>setAvatar(e.target.value)}
      />
      <Button type='submit'>Submit</Button>
    </Form>
  )
}



export default AddPostForm;
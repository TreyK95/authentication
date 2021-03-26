import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, Header } from "semantic-ui-react"

const AddPostForm = () => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async () => {
    // e.preventDefault()
    console.log(name)
    console.log(description)
    try {
      console.log(name)
      console.log(description)
      let res = await axios.post('/api/posts', {name, description})
      console.log(name)
      console.log(description)
      console.log(res)
      history.push('/posts')
    } catch (err) {
      console.log(err)
    }
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Header as="h1" textAlign="center">Create New Post</Header>
      <Form.Input 
      label='Name'
      placeholder='Name'
      name='name'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <Form.TextArea 
      label='Post' 
      placeholder='What are you thinking...' 
      name='description'
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />
      <Button>Submit</Button>
    </Form>
  )
}



export default AddPostForm;
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Header } from "semantic-ui-react"

const EditPostForm = () => {
  const {id} = useParams()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    try {
      if(id){
        axios.put(`/api/posts/${id}`, {name, description})
      } else {
        axios.post('/api/posts', {name, description, likes: 0})
      }
    } catch (err) {
      console.log(err)
    }
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Header as="h1" textAlign="center">Edit Post</Header>
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



export default EditPostForm;
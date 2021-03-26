import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button, Form, Header } from "semantic-ui-react"

const EditPostForm = () => {
  const {id} = useParams()
  const history = useHistory()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    try {
      let res = await axios.get(`/api/posts/${id}`)
      setName(res.data.name)
      setDescription(res.data.description)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    try {
      axios.put(`/api/posts/${id}`, {name, description})
      history.push('/posts')
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
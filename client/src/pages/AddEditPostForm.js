import { useState } from "react";
import { Button, Form, Header } from "semantic-ui-react"

const AddEditPostForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  return(
    <Form>
      <Header as="h1" textAlign="center">Post Form</Header>
      <Form.Input 
      label='Name'
      placeholder='Name'
      />
      <Form.TextArea label='About' placeholder='What are you thinking...' />
      <Button>Submit</Button>
    </Form>
  )
}



export default AddEditPostForm;
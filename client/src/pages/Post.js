import { Icon } from "semantic-ui-react"
import Card from "../components/Card"

const Post = () => {
  return(
    <Card>
      <Card.Content header='About Amy' />
      <Card.Content />
      <Card.Content extra>
        <Icon name='user' />4 Friends
      </Card.Content>
    </Card>
  )
}


export default Post
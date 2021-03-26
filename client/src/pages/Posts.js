import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Icon } from "semantic-ui-react"
import Loader from '../components/Loader'
import Post from "./Post"

const Posts = () => {
  const [posts, setPosts] = useState([{name: 'Jack Daniels', description: 'cool cool cool', likes: 0}, {name: 'McDonalds', description: 'french fries', likes: 10}])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getData()
  }, [])

  console.log(posts)
  const getData = async () => {
    try {
      // setPosts({name: 'Jack Daniels', description: 'cool cool cool', likes: 0})
      // let res = await axios.get('api/posts')
      // console.log(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const renderPosts = () => {
    return posts.map(post => {
      return(
        <Card>
          <Card.Content header={post.name} />
          <Card.Content description={post.description}/>
          <Card.Content extra>
            <Icon name='thumbs up' /> {post.likes} Likes
          </Card.Content>
        </Card>
      )
    })
  }

  if(loading) return <Loader />
  return(
    <>
      <h1>My Posts</h1>
      {renderPosts()}
    </>
  )
}



export default Posts
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card, Icon } from "semantic-ui-react"
import Button from "../components/Button"
import Loader from '../components/Loader'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getData()
  }, [])

  console.log('posts:')
  console.log(posts)
  const getData = async () => {
    try {
      // setPosts([{name: 'Jack Daniels', description: 'cool cool cool', likes: 0},{name: 'McDonalds', description: 'french fries', likes: 20}])
      let res = await axios.get('api/posts')
      setPosts(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const deletePost = async (id) => {
    try {
      await axios.delete(`/api/posts/${id}`)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  const likePost = async (updatedObj, id) => {
    try {
      updatedObj.likes += 1
      let res = await axios.put(`/api/posts/${id}/likes`, {...updatedObj})
      let newPostsArr = posts.map(post => post.id === id ? res.data : post)
      setPosts(newPostsArr)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }


  const renderPosts = () => {
    if(posts.length >= 1){
      return posts.map(post => {
        return(
          <Card>
            <Card.Content header={post.name} />
            <Card.Content description={post.description}/>
            <Card.Content extra >
              <Icon name='like' onClick={()=>likePost({...post}, post.id)}/> {post.likes} Likes
            </Card.Content>
            <Card.Content style={{display: 'flex'}}>
              <Link to={`/postForm/${post.id}`}>
                <Button>Edit Post</Button>
              </Link>
              <Button onClick={()=>deletePost(post.id)}>Delete Post</Button>
            </Card.Content>
          </Card>
        )
      })
    } else{
      return <h1>You have no posts! Why don't you make one?</h1>
    }
  }

  if(loading) return <Loader />
  return(
    <>
      <h1>My Posts</h1>
      <Link to='/postForm'>
        <Button>New Post</Button>      
      </Link>
      {renderPosts()}
    </>
  )
}



export default Posts
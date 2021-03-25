import axios from "axios"
import { useEffect, useState } from "react"
import Loader from '../components/Loader'
import Post from "./Post"

const Posts = () => {
  const [posts, setPosts] = useState({name: 'Jack Daniels', description: 'cool cool cool', likes: 0})
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getData()
  }, [])

  const getData = async () => {
    try {
      let res = await axios.get('api/posts')
      console.log(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const renderPosts = () => {
    return <Post />
  }

  if(loading) return <Loader />
  return(
    <>
      <h1>My Posts</h1>
    </>
  )
}



export default Posts
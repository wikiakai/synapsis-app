'use client'
import PostCard from '@/components/PostCard'
import { useEffect, useState } from 'react'
import { getPosts } from '../services/getPosts'
import { ListPost } from '../types'

const PostList = () => {
  const [dataPost, setDataPost] = useState<ListPost | []>([])

  useEffect(() => {
    const getDataPost = async () => {
      try {
        const data: ListPost = await getPosts()
        setDataPost(data)
      } catch (error) {
        console.log(error)
      }
    }

    getDataPost()
  }, [])

  return (
    <div className="flex flex-row flex-wrap-item gap-2 w-full">
      {dataPost.map((post) => (
        <PostCard post={post} index={post.id} isDetail={false} />
      ))}
    </div>
  )
}

export default PostList

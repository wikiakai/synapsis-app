'use client'

import PostCard from '@/components/PostCard'
import React, { useEffect, useState } from 'react'
import { getPost, getPostComments } from '../services'
import { IPost, PostCommentsType } from '../types'
import CommentsCard from '@/components/CommentCard'

interface PropsType {
  id: number
}

const PostDetail = (props: PropsType) => {
  const { id } = props
  const [dataPost, setDataPost] = useState<IPost>({
    id: 0,
    user_id: 0,
    title: '',
    body: '',
  })

  const [dataComments, setDataComments] = useState<PostCommentsType | []>([])

  const getDataPost = async () => {
    try {
      const data: IPost = await getPost(id)
      setDataPost(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getPostComment = async () => {
    try {
      const data: PostCommentsType = await getPostComments(id)
      setDataComments(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (id) {
      getDataPost()
      getPostComment()
    }
  }, [])

  return (
    <div className="flex flex-row flex-wrap-item gap-2 w-full">
      <div className="flex flex-col">
        <p className="subhead_text">Detail posts</p>
        <PostCard post={dataPost} isDetail={true} />
      </div>
      <div className="flex flex-col">
        <p className="subhead_text">Comments</p>
        <CommentsCard data={dataComments} />
      </div>
    </div>
  )
}

export default PostDetail

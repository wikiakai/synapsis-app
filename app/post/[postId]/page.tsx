import PostDetail from '@/lib/posts/view/PostDetail'
import React from 'react'
interface Props {
  params: {
    postId: number
  }
}
const page = ({ params }: Props) => {
  const { postId } = params
  return (
    <div>
      <PostDetail id={postId} />
    </div>
  )
}

export default page

import PostDetail from '@/lib/postList/view/PostDetail'
import React from 'react'
interface Props {
  params: {
    postId: number
  }
}
const page = ({ params }: Props) => {
  const { postId } = params
  return (
    <div className="flex flex-col flex-center gap-5">
      <PostDetail id={postId} />
    </div>
  )
}

export default page

import PostList from '@/lib/postList/view/PostList'
import { Suspense } from 'react'

const page = () => {
  return (
    <div className="flex flex-col flex-center">
      <p className="subhead_text">List posts</p>
      <PostList />
    </div>
  )
}

export default page

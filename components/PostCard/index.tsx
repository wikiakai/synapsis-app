'use client'

import { IPost } from '@/lib/posts/types'
import Link from 'next/link'

interface PostCardProps {
  post: IPost
  isDetail: boolean
  index?: number
}
const PostCard = (props: PostCardProps) => {
  const { post, isDetail } = props

  return (
    <div
      className={`${
        isDetail ? 'w-[470px]' : 'w-[270px]'
      } rounded overflow-hidden shadow-lg`}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        {isDetail && <p className="text-gray-700 text-base">{post.body}</p>}
      </div>
      <div className="px-6 pt-4 pb-2">
        {!isDetail && (
          <Link
            href={`/post/${post.id}`}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            Detail..
          </Link>
        )}
      </div>
    </div>
  )
}

export default PostCard

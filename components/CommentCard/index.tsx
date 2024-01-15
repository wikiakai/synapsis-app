import { PostCommentsType } from '@/lib/posts/types'
import React from 'react'

interface CommentsCardProps {
  data: PostCommentsType
}
const CommentsCard = (props: CommentsCardProps) => {
  const { data } = props
  return (
    <div className="lg:flex flex-col gap-3 ">
      {data.map((i) => (
        <div className="border-r border-b border-l w-full bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {i.email}
            </div>
            <p className="text-gray-700 text-base">{i.body}</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://v1.tailwindcss.com/img/jonathan.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{i.name}</p>
              <p className="text-gray-600">{i.id}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommentsCard

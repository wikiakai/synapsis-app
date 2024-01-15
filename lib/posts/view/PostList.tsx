'use client'
import PostCard from '@/components/PostCard'
import { useEffect, useState } from 'react'
import { getPosts } from '../services/getPosts'
import { ListPost } from '../types'

const PostList = () => {
  const [dataPost, setDataPost] = useState<ListPost | []>([])
  const [limit, setLimit] = useState<number>(5)
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    const getDataPost = async () => {
      try {
        const data: ListPost = await getPosts(limit, page)
        setDataPost(data)
      } catch (error) {
        console.log(error)
      }
    }

    getDataPost()
  }, [])

  return (
    <div className="flex flex-row flex-center flex-wrap-item gap-2 w-full">
      <div className="flex flex-col gap-5 pt-5">
        <div className="mt-5">
          <select
            id="limit"
            value={limit}
            name="limit"
            onChange={(e) => setLimit(e.target.value as unknown as number)}
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mt-2 "
          >
            <option>Select limit</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <div className="align-center justify-center flex flex-row gap-5">
          <button
            className="outline_blue_btn"
            onClick={() => (page === 1 ? {} : setPage(page - 1))}
          >
            Prev
          </button>
          <p className="font-bold">Page {page}</p>
          <button
            className="outline_blue_btn"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-center flex-wrap-item gap-2 w-full">
        {dataPost.map((post) => (
          <PostCard post={post} index={post.id} isDetail={false} />
        ))}
      </div>
    </div>
  )
}

export default PostList

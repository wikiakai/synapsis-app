import { ListPost } from './../types/index'

import Axios from 'axios'

export const getPosts = async (
  limit: number,
  page: number
): Promise<ListPost> => {
  try {
    const response = await Axios.get(
      `https://gorest.co.in/public/v2/posts?page=${page}&per_page=${limit}`,
      {
        headers: {
          Authorization:
            'Bearer b0244fa8dc9d4d136841b063c47f47dae1a17f2955a332a79e07de1948cb0e15',
        },
      }
    )

    const data: ListPost = response.data

    return data
  } catch (error) {
    console.error(error)
    // Rethrow the error or handle it as needed
    throw error
  }
}

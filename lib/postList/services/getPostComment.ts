import { PostCommentsType } from './../types/index'

import Axios from 'axios'

export const getPostComments = async (id: number): Promise<PostCommentsType> => {
  try {
    const response = await Axios.get(
      `https://gorest.co.in/public/v2/posts/${id}/comments`,
      {
        headers: {
          Authorization:
            'Bearer b0244fa8dc9d4d136841b063c47f47dae1a17f2955a332a79e07de1948cb0e15',
        },
      }
    )

    const data: PostCommentsType = response.data

    return data
  } catch (error) {
    console.error(error)
    // Rethrow the error or handle it as needed
    throw error
  }
}

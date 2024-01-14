import { ListUserType } from './../types/index'

import Axios from 'axios'

export const getUsers = async (): Promise<ListUserType> => {
  try {
    const response = await Axios.get(
      'https://gorest.co.in/public/v2/users?page=1&per_page=20',
      {
        headers: {
          Authorization:
            'Bearer b0244fa8dc9d4d136841b063c47f47dae1a17f2955a332a79e07de1948cb0e15',
        },
      }
    )

    const data: ListUserType = response.data

    return data
  } catch (error) {
    console.error(error)
    // Rethrow the error or handle it as needed
    throw error
  }
}

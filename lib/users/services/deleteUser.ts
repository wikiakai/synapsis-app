import { IUserForm } from './../types/index'

import Axios from 'axios'

export const deleteUser = async (id: number) => {
  try {
    const response = await Axios.delete(
      `https://gorest.co.in/public/v2/users/${id}`,
      {
        headers: {
          Authorization:
            'Bearer b0244fa8dc9d4d136841b063c47f47dae1a17f2955a332a79e07de1948cb0e15',
        },
      }
    )

    return response
  } catch (error) {
    console.log(error)
    // Rethrow the error or handle it as needed
    return error
  }
}

export interface IUser {
  id: number
  name: string
  email: string
  gender: string
  status: string
}

export type ListUserType = IUser[]

export interface IUserForm {
  id?: number
  name: string
  email: string
  gender: string
  status: string
}

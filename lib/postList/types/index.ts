export interface IPost {
  id: number
  user_id: number
  title: string
  body: string
}

export type ListPost = IPost[]

export interface IPostComments {
  id: number
  post_id: number
  name: string
  email: string
  body: string
}

export type PostCommentsType = IPostComments[]

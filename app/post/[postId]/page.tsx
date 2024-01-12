import React from 'react'
interface Props {
  params: {
    postId: string
    
  }
}
const page = ({ params }: Props) => {
  return (
    <div>{params.postId}</div>
  )
}

export default page
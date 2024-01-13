import { IUser } from '@/lib/users/types'
import React from 'react'

interface UserCardProps {
  user: IUser
  onOpenModal: (content: string, user: IUser | null) => void
}
const UserCard = (props: UserCardProps) => {
  const { user, onOpenModal } = props
  const isActiveUser = user.status === 'active'
  return (
    <div className="w-[250px] max-w-sm flex flex-col justify-between  shadow-lg rounded-lg p-5 h-[350px] text-center">
      <div className="flex flex-col items-center ">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 ">{user.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user.email}
        </span>
      </div>
      <div className="pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {user.gender}
        </span>
        <span
          className={`inline-block ${
            isActiveUser ? 'bg-green-300' : 'bg-slate-500'
          } rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2`}
        >
          {user.status}
        </span>
      </div>
      <div className="pt-4 flex gap-2">
        <button className="blue_btn" onClick={() => onOpenModal('edit', user)}>
          Edit
        </button>
        <button className="outline_red_btn">Delete</button>
      </div>
    </div>
  )
}

export default UserCard

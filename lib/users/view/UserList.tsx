'use client'
import UserCard from '@/components/userCard'
import React, { useEffect, useState } from 'react'
import { IUserForm, ListUserType } from '../types'
import { getUsers } from '../services/getUsers'
import Modal from '@/components/Modal'

const UserList = () => {
  const [dataUser, setDataUser] = useState<ListUserType | []>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<string>('')
  const [selectedUser, setSelectedUser] = useState<IUserForm | null>({
    name: '',
    email: '',
    gender: '',
    status: '',
  })
  const getDataUser = async () => {
    try {
      setDataUser([])
      const data: ListUserType = await getUsers()
      setDataUser(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getDataUser()
  }, [])

  const handleCloseModal = () => {
    setShowModal(false)
    getDataUser()
  }

  const handleOpenModal = (content: string, user: IUserForm | null) => {
    setModalContent(content)
    setSelectedUser(user)
    setShowModal(true)
  }
  return (
    <div className="flex flex-row flex-center flex-wrap-item gap-2 w-full">
      <button className="blue_btn" onClick={() => handleOpenModal('add', null)}>
        Add User
      </button>
      <div className="flex flex-row flex-center flex-wrap-item gap-2 w-full">
        {dataUser.map((user) => (
          <UserCard user={user} onOpenModal={handleOpenModal} />
        ))}
      </div>
      <Modal
        open={showModal}
        onClose={handleCloseModal}
        content={modalContent}
        user={selectedUser}
      />
    </div>
  )
}

export default UserList

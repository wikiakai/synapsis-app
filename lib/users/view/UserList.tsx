'use client'
import UserCard from '@/components/userCard'
import React, { useEffect, useState } from 'react'
import { IUser, IUserForm, ListUserType } from '../types'
import { getUsers } from '../services/getUsers'
import Modal from '@/components/Modal'
import Spinner from '@/components/Spinner'

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
  const [limit, setLimit] = useState<number>(5)
  const [page, setPage] = useState<number>(1)
  const [searchKey, setSearchKey] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const getDataUser = async () => {
    try {
      setLoading(true)
      setDataUser([])
      const data: ListUserType = await getUsers(limit, page)
      const filteredData =
        searchKey !== '' ? data.filter((a) => a.name === searchKey) : data

      if (filteredData === undefined) {
        setDataUser([])
      } else {
        setDataUser([...filteredData])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getDataUser()
  }, [limit, page, searchKey])

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
    <div className="flex flex-row flex-center  flex-wrap-item gap-2 w-full">
      <div className="flex flex-col gap-5 pt-5">
        <div className="flex-center flex ">
          <button
            className="blue_btn"
            onClick={() => handleOpenModal('add', null)}
          >
            Add User
          </button>
        </div>

        <div className="mt-5 flex gap-3">
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
            <option value="20">20</option>
          </select>
          <input
            type="text"
            name="name"
            id="name"
            value={searchKey}
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Search user"
            onChange={(e) => setSearchKey(e.target.value)}
          />
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
        {loading ? (
          <>
            <Spinner />
          </>
        ) : (
          <>
            {dataUser.length === 0 ? (
              <>
                <p className="mt-10">No data found</p>
              </>
            ) : (
              <>
                {dataUser.map((user) => (
                  <UserCard user={user} onOpenModal={handleOpenModal} />
                ))}
              </>
            )}
          </>
        )}
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

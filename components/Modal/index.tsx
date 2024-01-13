'use client'
import { editUser, createUser } from '@/lib/users/services'
import { IUserForm } from '@/lib/users/types'
import React, { useEffect, useState } from 'react'
interface ModalProps {
  open: boolean
  content?: string
  onClose: () => void
  user: IUserForm | null
}
const Modal = (props: ModalProps) => {
  const { open, content = '', onClose, user } = props

  const [formValue, setFormValue] = useState<IUserForm | null>({
    name: '',
    email: '',
    gender: '',
    status: '',
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [view, setView] = useState<string>('alert')
  useEffect(() => {
    if (content === 'edit') {
      setFormValue(user)
    }
    if (content === 'add') {
      setFormValue({ name: '', email: '', gender: '', status: '' })
    }
  }, [open])

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    let updatedFormValue: IUserForm | null =
      formValue !== null
        ? formValue
        : { name: '', email: '', gender: '', status: '' }
    const field = e.target.name

    updatedFormValue[field] = e.target.value
    setFormValue({ ...updatedFormValue })
  }

  const handleCloseModal = async () => {
    setFormValue({ name: '', email: '', gender: '', status: '' })
    onClose()
  }
  const disabledButton =
    formValue?.name === '' ||
    formValue?.email === '' ||
    formValue?.gender === '' ||
    formValue?.status === ''

  const handleRequest = async () => {
    if (disabledButton) {
      alert('Form can not be empty')
    } else {
      setLoading(true)
      const res: any = await createUser(formValue)
      if (res.status === 201) {
        alert('Create User Success!')
      } else {
        const msg = `${res.response.data[0].field} ${res.response.data[0].message}`
        alert(msg)
      }
      setLoading(false)
      onClose()
    }
  }
  const handleRequestEdit = async () => {
    if (disabledButton) {
      alert('Form can not be empty')
    } else {
      setLoading(true)
      const id = user?.id || 0
      const res: any = await editUser(formValue, id)
      if (res.status === 200) {
        alert('Edit User Success!')
      } else {
        const msg = `${res.response.data[0].field} ${res.response.data[0].message}`
        alert(msg)
      }
      setLoading(false)
      onClose()
    }
  }

  return (
    <div>
      {open ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[500px] my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold capitalize">
                    {content} User
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => handleCloseModal()}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-2  flex-auto ">
                  <form className="p-4 md:p-5">
                    <div className="flex flex-col gap-5">
                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formValue !== null ? formValue.name : ''}
                          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          placeholder="Type name"
                          onChange={(e) => handleChangeForm(e)}
                        />
                      </div>

                      <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="name"
                          value={formValue !== null ? formValue.email : ''}
                          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                          onChange={(e) => handleChangeForm(e)}
                          placeholder="Type email"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Gender
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          onChange={(e) => handleChangeForm(e)}
                          value={formValue !== null ? formValue.gender : ''}
                          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                        >
                          <option>Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Status
                        </label>
                        <select
                          id="status"
                          name="status"
                          onChange={(e) => handleChangeForm(e)}
                          value={formValue !== null ? formValue.status : ''}
                          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                        >
                          <option>Select status</option>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </div>
                      <div className="col-span-2"></div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleCloseModal()}
                  >
                    Close
                  </button>
                  <button
                    className="blue_btn"
                    type="button"
                    onClick={() =>
                      content === 'add' ? handleRequest() : handleRequestEdit()
                    }
                    // disabled={disabledButton}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}

export default Modal

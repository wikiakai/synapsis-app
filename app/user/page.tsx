import UserList from '@/lib/users/view/UserList'
import React from 'react'

function page() {
  return (
    <main>
      <div className="flex-center flex flex-col">
        <p className="subhead_text">List Users</p>

        <UserList />
      </div>
    </main>
  )
}

export default page

'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const router = useRouter()
  const handleRedirect = (link: string) => {
    setShowNav(!showNav)
    router.push(link)
  }
  return (
    <nav className="flex-between w-full mb-8 pt-3 h-10">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/next.svg"
          width={80}
          alt="logo"
          height={80}
          className="object-contain"
        />
      </Link>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 "
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={() => setShowNav(!showNav)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      {/* desktop navigation */}
      <div className="md:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/post" className="blue_btn">
            Post
          </Link>
          <Link href="/user" className="blue_btn">
            Users
          </Link>
        </div>
      </div>
      {showNav && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setShowNav(!showNav)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 flex flex-col">
                  <button
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:bg-transparent"
                    onClick={() => handleRedirect('/post')}
                  >
                    Post
                  </button>
                  <button onClick={() => handleRedirect('/user')}>User</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

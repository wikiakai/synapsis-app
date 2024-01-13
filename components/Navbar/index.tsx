'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
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

      {/* desktop navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/post" className="blue_btn">
            Post
          </Link>
          <Link href="/user" className="blue_btn">
            Users
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

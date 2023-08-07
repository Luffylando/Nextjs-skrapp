import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="h-[60px] flex flex-row justify-center items-center border-b-2">
      <Link href="/" className="text-md mx-2 cursor-pointer hover:underline">Home</Link>
      <Link href="/users" className="text-md mx-2 cursor-pointer hover:underline">Users</Link>
      <Link href="/posts" className="text-md mx-2 cursor-pointer hover:underline">Posts</Link>
    </header>
  )
}

export default Header
import React from 'react'
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className='relative text-gray-700'>
        <nav className='mb-5 border-b border-b-gray-300'>
            <div className=''>
                <Image width={70} height={50} src="/logo.jpeg" />
            </div>
            <div className='right-5 mb-5'>
                <Link href='/'><a className='mr-3'>Home</a></Link>
                <Link href='/about'><a className='mr-3'>About</a></Link>
                <Link href='/ninjas'><a className='mr-3'>Ninja Listing</a></Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
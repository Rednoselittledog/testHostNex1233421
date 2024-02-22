'use client'
import Link from 'next/link'
import React from 'react'
const button = () => {
  return (
    <div className='absolute right-[5%] top-[5%]'>
        <Link href="/login">
        <div className='bg-white flex flex-col justify-center items-center rounded-3xl py-2 px-5'>
            <h1 className='text-black'>Login</h1>
        </div>
        </Link>
    </div>
  )
}

export default button
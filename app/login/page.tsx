import React from 'react'
import Image from 'next/image'
import { submitForm } from './action'

const page = () => {
  return (
    <div className="flex">  
        <Image src="/img/bg.png" alt="Background image" fill/>
        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] translate-y-[-50%]">
            <form action={submitForm} className='flex flex-col items-center justify-between'>
                <p className=' text-white font-bold text-2xl'>Enter Your Name</p>
                <input type="text" className="rounded-lg border-2 border-neutral-400 p-3 shadow-xl my-2 flex text-black" name = "name"/>
                <button className='border-gray-900 border-2 bg-blue-700 rounded-lg py-2 w-full text-white font-bold'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default page
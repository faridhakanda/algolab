import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const w = '24'
const Navbar = () => {
  return (
    <div className="fixed bg-air flex justify-around w-full h-14 top-0 items-center sm:p-2">
      <div className="text-3xl text-violet sm:text-2xl">
        <Link className="border rounded bg-blue" href="/">FA</Link>
      </div>
      <div className="flex space-x-20 sm:space-x-1 md:space-x-5 lg:space-x-20">
          <Link className="items-center" href="/">
              <Image className="sm:w-6" src="/home1.png" alt="home" width={w} height={w}/>
              <span className="text-base sm:text-xs">Home</span>
          </Link>
          <Link className="sm:w-6" href="/blog">
            <Image src="/blog.png" alt="blog" width={w} height={w}/>
            <span className="text-base sm:text-xs">Blog</span>
          </Link>
          
        <Link href="/contact">
          <Image src="/contact.png" alt="contact" width={w} height={w}/>
          <span className="text-base sm:text-xs">Contact</span>
        </Link>
        <Link href="/about">
          <Image src="/about.png" alt="about" width={w} height={w}/>
          <span className="text-base sm:text-xs">About</span>
        </Link>
      </div>
        
    </div>
  )
}

export default Navbar
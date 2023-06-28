import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const w = '32'
const Navbar = () => {
  return (
    <div className="fixed bg-air flex justify-around w-full h-12 top-0 items-center sm:p-2">
      <div className="text-3xl text-violet sm:text-2xl">
        <Link href="/">FaridLabs</Link>
      </div>
      <div className="flex space-x-20 sm:space-x-2 md:space-x-5 lg:space-x-20">
          <Link className="items-center" href="/">
              <Image className="" src="/home1.png" alt="home" width={w} height={w}/>
          </Link>
          <Link className="items-center" href="/blog">
            <Image src="/blog.png" alt="blog" width={w} height={w}/>
            
          </Link>
        
        <Link href="/contact">
          <Image src="/contact.png" alt="contact" width={w} height={w}/>
          
        </Link>
        <Link href="/about">
          <Image src="/about.png" alt="about" width={w} height={w}/>
        </Link>
      </div>
        
    </div>
  )
}

export default Navbar
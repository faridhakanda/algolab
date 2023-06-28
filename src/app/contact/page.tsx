import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className="text-center mt-32">
      <h1>Contact Page</h1>
      <Image className="m-auto rounded-xl bg-air" src="/vscode.svg" alt="vercel" width="200" height="200"/>
    </div>
  )
}

export default Contact

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className="text-center items-center mt-16">
      <div className="bg-blue border-1 justify-start shadow-xl rounded mb-1 px-4 py-4 sm:bg-lime  max-w-md mx-auto sm:mx-1 sm:px-1 sm:rounded sm:max-w-xl md:bg-violet md:mx-auto md:px-3 md:py-3 md:border-1 md:rounded lg:bg-orange lg:mx-auto lg:px-3 lg:py-3 lg:border-1 lg:rounded xl:bg-lime xl:mx-auto xl:py-3 xl:px-3 xl:border-1 xl:rounded">

        <h1 className="mt-6 text-2xl font-bold text-violet md:text-lime">
          You are welcome to our community<span className="text-green"> to work with us!</span>
          </h1>
        <Image className="sm:h-48 rounded-xl sm:w-48 md:h-64 md:w-64 h-80 w-80 xl:h-96 xl:w-96 items-center m-auto mt-6 shadow-xl sm:mt-8" src="/vscode.svg" alt="vercel" sizes="100vw" width="0" height="0"/>
        <p className="mt-2 text-zinc sm:mt-4 sm:text-violet">
          We are always sincere to work with our team member and client. We also try provide best solution for every work of our client project.
        </p>
      </div>
      <div className="bg-blue border-1 shadow-xl rounded mb-1 px-4 py-4 sm:bg-lime  max-w-md mx-auto sm:mx-1 sm:px-1 sm:rounded sm:max-w-xl md:bg-violet md:mx-auto md:px-3 md:py-3 md:border-1 md:rounded lg:bg-orange lg:mx-auto lg:px-3 lg:py-3 lg:border-1 lg:rounded xl:bg-lime xl:mx-auto xl:py-3 xl:px-3 xl:border-1 xl:rounded">

        <h1 className="mt-6 text-2xl font-bold text-violet md:text-lime">
          You are welcome to our community<span className="text-green"> to work with us!</span>
          </h1>
        <Image className="sm:h-48 rounded-xl sm:w-48 md:h-64 md:w-64 h-80 w-80 xl:h-96 xl:w-96 items-center m-auto mt-6 shadow-xl sm:mt-8" src="/ubuntu.svg" alt="vercel" sizes="100vw" width="0" height="0"/>
        <p className="mt-2 text-lime sm:mt-4 sm:text-violet">
          We are always sincere to work with our team member and client. We also try provide best solution for every work of our client project.
        </p>
      </div>
      <div className="bg-blue border-1 shadow-xl rounded mb-1 px-4 py-4 sm:bg-lime  max-w-md mx-auto sm:mx-1 sm:px-1 sm:rounded sm:max-w-xl md:bg-violet md:mx-auto md:px-3 md:py-3 md:border-1 md:rounded lg:bg-orange lg:mx-auto lg:px-3 lg:py-3 lg:border-1 lg:rounded xl:bg-lime xl:mx-auto xl:py-3 xl:px-3 xl:border-1 xl:rounded">

        <h1 className="mt-6 text-2xl font-bold text-violet md:text-lime">
          You are welcome to our community<span className="text-green"> to work with us!</span>
          </h1>
        <Image className="sm:h-48 rounded-xl sm:w-48 md:h-64 md:w-64 h-80 w-80 xl:h-96 xl:w-96 items-center m-auto mt-6 shadow-xl sm:mt-8" src="/mint.svg" alt="vercel" sizes="100vw" width="0" height="0"/>
        <p className="mt-2 text-zinc sm:mt-4 sm:text-violet">
          We are always sincere to work with our team member and client. We also try provide best solution for every work of our client project.
        </p>
      </div>
    </div>
  )
}

export default Contact

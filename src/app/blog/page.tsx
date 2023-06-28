import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className="items-center justify-center mt-14">
        
        <div className="text-center flex justify-center items-center max-w mx-auto">
            <div className="w-64 h-fit p-4 m-1 rounded-lg bg-blue sm:invisible md:invisible">
                Left Part
            </div>
            <div className="m-1 md:rounded-lg w-auto bg-lime sm:max-w-md md:w-full">
                <h1 className="m-1 ">MacBook Pro 15`` is my favorite laptop for software engineering</h1>
                <Image className="w-full h-full" sizes="50vw" src="/mint.svg" alt="mint" width="0" height="0"/>
            </div>
            <div className="w-64 h-fit p-4 m-1 rounded-lg bg-blue sm:invisible md:invisible">
                Right Part
            </div>
        </div>
        
    </div>
  )
}

export default page

/**
 
<div className="text-center flex justify-center items-center max-w mx-auto">
            <div className="w-64 h-fit p-4 m-1 rounded-lg bg-blue sm:invisible md:invisible">
                Left Part
            </div>
            <div className="w-full h-fit p-4 m-1 rounded-lg bg-lime sm:w-full md:w-full">
                <h1 className="m-1 ">MacBook Pro 15`` is my favorite laptop for software engineering</h1>
                <Image className="w-full h-full" sizes="50vw" src="/mint.svg" alt="mint" width="0" height="0"/>
            </div>
            <div className="w-64 h-fit p-4 m-1 rounded-lg bg-blue sm:invisible md:invisible">
                Right Part
            </div>
        </div>

 */
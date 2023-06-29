import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className="items-center justify-items-center text-center mt-14">
        <div className="flex flex-row justify-items-center">
    
            <div className="flex flex-col">
                <div className="box-border border-1 bg-blue h-64 w-48 rounded  m-1 mb-3 p-3 sm:invisible md:invisible">
                    Left Content2
                </div>
                <div className="fixed box-border border-1 bg-blue h-64 w-48 rounded   m-1 mt-64 p-3 sm:invisible md:invisible">
                    Left Content24
                </div>

            </div>
            <div className="box-border border-1 bg-lime  w-4/5 rounded m-1 p-3 mx-auto max-w-md sm:max-w-xl sm:mx-50% sm:basis-full md:basis-full">
                <h1 className="text-lg m-1">MacBook Pro for my computer programming journey</h1>
                <Image className="w-full h-full" src="/python.svg" sizes="100vw" alt="python" width="0" height="0"/>
            </div>
            <div className="flex flex-col">
                <div className="box-border border-1 bg-blue h-64 w-48 rounded m-1 p-3 sm:invisible md:invisible">
                    Right Content2
                </div>
                <div className="fixed box-border border-1 bg-blue h-64 w-48 rounded m-1 p-3 sm:invisible md:invisible">
                    Right Content24
                </div>

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
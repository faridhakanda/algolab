import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className="text-center items-center flex flex-col mt-14 m-auto w-60 md:w-96 lg:w-fit h-fit">
      
      <div className="bg-violet rounded-xl m-2 flex-col items-center ">
        <h1>Python is one of the simple syntax programming language</h1>
        <Image className="m-auto w-full h-full bg-air" sizes="50vw" src="/python.svg" alt="vercel" width="0" height="0"/>
        <p>If anyone interested to learn programming than python is to be the first choose for this. Because is has a big community and huge of free tools and resources.</p>
      </div>
      <div className="bg-violet rounded-xl m-2 flex-col items-center">
        <h1>Javascript is one of the best programming language for making client side application</h1>
        <Image className="m-auto w-full h-full bg-air" sizes="50vw" src="/js.svg" alt="vercel" width="0" height="0"/>
        <p>If anyone interested to learn programming than javascript to be best choose for making client side application and also server side. Because is has a big community and huge of free tools and resources.</p>
      </div>
      <div className="bg-violet rounded-xl m-2 flex-col items-center">
        <h1>C++ is the core level programming language for making kernel and between hardware and software intermidiate level application</h1>
        <Image className="m-auto w-full h-full bg-air" sizes="50vw" src="/cpp.svg" alt="vercel" width="0" height="0"/>
        <p>If anyone interested to learn programming in the core level than C++ is to be the first choose for this. Because is has a big community and huge of free tools and resources.</p>
      </div>
      

    </div>
  )
}

export default About

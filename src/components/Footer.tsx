import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className="bg-violet p-6 w-full max-h-fit items-center text-center">
        <div className="sm:grid md:grid flex justify-around sm:pl-2">
            <div className="w-64 text-start text-air">
                <h1 className="text-4xl">FSoft</h1>
                Farid Soft is a multinational software company in Bangladesh. We are providing different kind software solution in real life.
            </div>
            <div className="text-start text-air">
                <h1 className="text-2xl">Our Services</h1>
                <ul>
                    <li>Software Design</li>
                    <li>Software Development</li>
                    <li>Software Architect</li>
                    <li>Web Development</li>
                    <li>Machine Learning</li>
                    <li>Data Analysis</li>
                    <li>Data Mining</li>
                    <li>Artificial Intelligence</li>
                    <li>Web Design</li>
                    <li>Game Development</li>
                    <li>iOS Development</li>
                    <li>Android Development</li>
                </ul>
            </div>
            <div className="text-start text-air">
                <h1 className="text-2xl">Company</h1>
                <ul>
                    <li>Career</li>
                    <li>Helpline</li>
                    <li>Blog</li>
                    <li>Roles and Terms</li>
                </ul>
            </div>
            
        </div>
        <div className="flex flex-col justify-center">
            <div className="flex justify-evenly  p-4"><Image className="sm:w-6 sm:h-6" src="/facebook.png" alt="facebook" width="48" height="48"/>
                <Image className="sm:w-6 sm:h-6" src="/twitter.png" alt="twitter" width="48" height="48"/>
                <Image className="sm:w-6 sm:h-6" src="/linkedin.png" alt="linkedin" width="48" height="48"/>
                <Image className="sm:w-6 sm:h-6" src="/instagram.png" alt="instagram" width="48" height="48"/>
                <Image className="sm:w-6 sm:h-6" src="/messenger.png" alt="messenger" width="48" height="48"/>
                <Image className="sm:w-6 sm:h-6" src="/reddit1.png" alt="instagram" width="48" height="48"/>
                <Image className="sm:w-6 sm:h-6" src="/pinterest.png" alt="messenger" width="48" height="48"/>
                <Image className="sm:w-6 sm:h-6" src="/stackoverflow.png" alt="stackoverflow" width="48" height="48"/>
            </div>
            <h1 className="text-air">&copy;2023-All Right Reserved.</h1>
        </div>
    </div>
  )
}

export default Footer

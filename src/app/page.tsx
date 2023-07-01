import Image from 'next/image'
import { ImageResponse } from 'next/server';
import Link from 'next/link'
import Hello from './hello';

const blogs = [
  {
    'id': 7,
    'avatar': '/linux.svg',
    'name': 'Farid Akanda',
    'occupation': 'Computer Programmer',
    'header': 'Artificial Intelligence is future most demanding jobs over the world tech industries',
    'image': '/vscode.svg',
    'description': 'Artifical Intelligence is most demanding and useful technology in the software engineering world.'
  },
  {
    'id': 6,
    'avatar': '/linux.svg',
    'name': 'Farid Akanda',
    'occupation': 'Computer Programmer',
    'header': 'Artificial Intelligence is future most demanding jobs over the world tech industries',
    'image': '/java.svg',
    'description': 'Artifical Intelligence is most demanding and useful technology in the software engineering world.'
  },
  {
    'id': 5,
    'avatar': '/linux.svg',
    'name': 'Farid Akanda',
    'occupation': 'Computer Programmer',
    'header': 'Artificial Intelligence is future most demanding jobs over the world tech industries',
    'image': '/cpp.svg',
    'description': 'Artifical Intelligence is most demanding and useful technology in the software engineering world.'
  },
  {
    'id': 4,
    'avatar': '/linux.svg',
    'name': 'Farid Akanda',
    'occupation': 'Computer Programmer',
    'header': 'Artificial Intelligence is future most demanding jobs over the world tech industries',
    'image': '/js.svg',
    'description': 'Artifical Intelligence is most demanding and useful technology in the software engineering world.'
  },
  {
    'id': 3,
    'avatar': '/linux.svg',
    'name': 'Farid Akanda',
    'occupation': 'Computer Programmer',
    'header': 'Artificial Intelligence is future most demanding jobs over the world tech industries',
    'image': '/ubuntu.svg',
    'description': 'Artifical Intelligence is most demanding and useful technology in the software engineering world.'
  },
  {
    'id': 2,
    'avatar': '/linux.svg',
    'name': 'Farid Akanda',
    'occupation': 'Computer Programmer',
    'header': 'Artificial Intelligence is future most demanding jobs over the world tech industries',
    'image': '/linux.svg',
    'description': 'Artifical Intelligence is most demanding and useful technology in the software engineering world.'
  },
  {
    'id': 1,
    'avatar': '/linux.svg',
    'name': 'Farid Akanda',
    'occupation': 'Computer Programmer',
    'header': 'Python is simple programming language to learn',
    'image': '/python.svg',
    'description': 'Artifical Intelligence is most demanding and useful technology in the software engineering world.'
  }

]

 
export default function Home() {
  return (
    <div className="flex flex-col mt-16 items-center">
      
      
      <div className="bg-air w-1/2 sm:w-full sm:rounded-none md:w-5/6 sm:h-fit flex flex-col border rounded-lg m-1 divide-y">
        <div className="flex flex-row justify-between p-3">
          <div className="flex flex-row justify-around items-start text-start">
            <Image className="w-12 h-12" src="/linux.svg" alt="avatar" width="0" height="0"/>
            <span className="p-1">
              <h1 className="text-sm">Farid Akanda</h1>
              <p className="text-xs pb-1">Computer Programmer</p>
            </span>
          </div>
          <div className="">
            <Image className="w-8 h-8" src="/verticaldot.png" alt="verticaldot" width="20" height="20"/>
          </div>
        </div>
        <div className="bg-lime grow w-full">
          <div className="m-2 text-xl">
            <h1>Linux distribution is the best for open source operating system kernel. There huge of different varient of linux distro as like ubuntu, centos, popos and fedora etc</h1>
            <Image className="w-full h-full shadow-md rounded-lg" src="/mint.svg" alt="mint" width="0" height="0"/>
            <p>My favorite linux distro is ubuntu. Ubuntu has a big community</p>
          </div>
        </div>
        <div className="justify-around flex p-3">
          <div>
           <Image className="w-8 h-8" src="/like.png" alt="like" width="0" height="0"/>
            <span>Like</span>
          </div>
          <div>
            <Image className="w-8 h-8" src="/comment.png" alt="comment" width="0" height="0"/>
            <span>Comment</span>
          </div>
          <div>
            <Image className="w-8 h-8" src="/share.png" alt="comment" width="0" height="0"/>
            <span>Share</span>
          </div>
        </div>
      </div>


      {
        blogs.map(blog => (
          <div className="bg-air w-1/2 sm:w-full sm:rounded-none md:w-5/6 sm:h-fit flex flex-col border rounded-lg m-1 divide-y" key={blog.id}>
            <div className="flex flex-row justify-between p-3">
              <div className="flex flex-row justify-around items-start text-start">
                <Image className="w-12 h-12" src={blog.avatar} alt="avatar" width="0" height="0"/>
                <span className="p-1">
                  <h1 className="text-sm">{blog.name}</h1>
                  <p className="text-xs pb-1">{blog.occupation}</p>
                </span>
              </div>
              <div className="">
                <Image className="w-8 h-8" src="/verticaldot.png" alt="verticaldot" width="20" height="20"/>
              </div>
            </div>
            <div className="bg-lime">
              <div className="m-2 text-xl">
                <h1>{blog.header}</h1>
                <Image className="w-full h-full shadow-md rounded-lg" src={blog.image} alt="mint" width="0" height="0"/>
                <p>{blog.description}</p>
              </div>
            </div>
            <div className="justify-around flex p-3">
              <div>
              <Image className="w-8 h-8" src="/like.png" alt="like" width="0" height="0"/>
                <span>Like</span>
              </div>
              <div>
                <Image className="w-8 h-8" src="/comment.png" alt="comment" width="0" height="0"/>
                <span>Comment</span>
              </div>
              <div>
                <Image className="w-8 h-8" src="/share.png" alt="comment" width="0" height="0"/>
                <span>Share</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

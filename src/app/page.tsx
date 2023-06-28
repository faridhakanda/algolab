import Image from 'next/image'
import { ImageResponse } from 'next/server';
import Link from 'next/link'
import Hello from './hello';
 
export default function Home() {
  return (
    <div className="flex flex-col mt-16 items-center">
      <div className="bg-red rounded-xl m-auto sm:m-1 w-60 md:w-fil md:h-fit lg:w-1/2 lg:h-fit xl:w-3/4 xl:h-fit 2xl:w-3/4 2xl:h-fit">
        <h1 className="m-2 p-1 text-xl">MacBook Pro 15`` is best laptop on the year....</h1>
        <Image className="w-full h-full" sizes="50vw" src="/ubuntu.svg" alt="imac" width="0" height="0"/>
        <p className="justify-start m-2 p-1">
          MacBook Pro is best laptop of the year 2023. There is huge of people are interest to buy this amazing laptop for they are daily activities. 
          But this laptop is most of the people comfort zone and there are not able to buy this easily.
        </p>
        <p className="p-2">
          এখন আমি একটি ওয়েব সাইট বানাও জেনো সেটি খুব ভাল হয়।
        </p>
      </div>
      
    </div>
  )
}

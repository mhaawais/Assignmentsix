import React from 'react'
import next from 'next'
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
<div className="main w-[100%] h-[800px] bg-[#FFFFFF]  flex justify-center items-center">
  
    <div className="bg-[#FFFFFF]">
    <section className='w-[640px] h-[300px] pr-[60px] pl-[80px]'>
     <h1 className='w-[500px] h-[134px] font-[Roboto] font-bold text-[56px] leading-[67.2px] text-[#000000] m-3'>
        Learn new skills online with ease
        </h1>
        <p className='w-[450px] h-[54px] font-[Roboto] font-medium text-[20px] leading-[27px] text-[#000000] p-3'>
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
            </p>
     </section> 
     <section className='flex w-[358px] gap-4 justify-start items-center -mt-12 pl-[90px] pr-[60px]'>
        <Button className='w-[178px] h-[48px] border rounded-[5px] top-[12px] pr-[24px] pl-[24px] font-[Roboto] text-[16px] hover:bg-red-400'>
            Start learning now
            </Button>
        <Button className='bg-[#FFFFFF] text-[#000000] w-[164px] h-[48px] border border-[#000000] rounded-[5px] top-[12px] pr-[24px] pl-[24px] font-[Roboto] text-[16px] hover:bg-red-400'>
            Explore Courses
            </Button>
     </section>     
    </div>
    <div className='w-[640px] h-[800px] relative'>
        <Image src={"/Image.png"}
         alt='image'
        layout='fill'
        objectFit='cover'  />
    </div>
    </div>

  )
}

export default Hero

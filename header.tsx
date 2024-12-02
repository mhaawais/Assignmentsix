import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='h-[72px] mt-1 border flex items-center justify-center bg-[#F7F7F7]'>
      <div className='w-[1152px] h-[44px] border flex items-center justify-between'>
        
        <section className='flex items-center space-x-2'>
          <Image src="/Frame 1.png" alt="logo" width={32.58} height={30.38} />
          <p className='font-[Inter] font-bold text-[25.07px]'>Ddsgnr</p>
        </section>
        
    <section className='flex items-center gap-[10px] w-[687] h-[44px] pl-[108px]'>
    <section className='hidden lg:block '>
          <button className='w-[64px] h-[44px]'>Home</button>
          <button className='w-[79px] h-[44px]'>Courses</button>
          <button className='w-[81px] h-[44px]'>Services</button>
          <button className='w-[113px] h-[44px]'>Achievement</button>
          <button className='w-[86px] h-[44px]'>About Us</button>
          <button className='w-[104px] h-[44px]'>Testimonial</button>
          </section>
          <section className='hidden lg:block'>
          <button className='w-[80px] h-[40px] border border-[#000000] rounded-[5px] mr-4'>Login</button>
          <button className='w-[95px] h-[40px] border border-[#000000] rounded-[5px] bg-[#000000] text-white'>Sign Up</button>
        </section>
      </section>
      </div>
    </div>
  )
}

export default Header

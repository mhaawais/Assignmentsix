import React from 'react'
import next from 'next'
import Image from 'next/image'

const Navbar = () => {
  return (                                  
    <div className='w-[100%] h-[54px] bg-[#F7F7F7] p-5  hidden lg:block'>
        <div className='container flex items-start justify-start mx-auto gap-8 pl-[62px]'>
       <span className='text-[14px] font-[Roboto] text-[#000000]'>
        Phone Number: 956 742 455 678
        </span>  
       <img src="/Line 3.png" alt="divider" className='h-6'/> 
       <span className='text-[14px] font-[Roboto] text-[#000000]'>
        Email:info@ddsgnr.com
        </span>

        <span className='gap-4 w-[736px] h-[24px]'>
         <span className='w-[132px] h-[24px] '>
            <span className='flex items-end justify-end gap-3'>
                <img src='/Vector.png'  alt='facebook icon' />
                <img src='/second.png' alt='instagram icon' />
                <img src='/Twitter.png' alt='twitter icon' />
                <img src='/LinkedIn.png' alt='linkedin icon' />
            </span>        
        </span>        
        </span>
    </div>
    </div>
  )
}

export default Navbar

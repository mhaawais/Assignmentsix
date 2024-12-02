import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
//  full div  remaining
<div className='h-[1170px] w-[100%] bg-[#FFFFFF] pt-[150px]'>

{/*  all data full div  ----------- h-684 exact      */}
<div className='h-[684px] p-[80px] gap-[80px]'>

{/*  all data some small size div   ------- h-524 exact  */}
<div className='h-[524px] w-[1120px] gap-[90px]'>

{/*    1st component subscribe (full) ------  h-82px exact          */}
<div className='h-[82px] w-[1120px] flex'>

{/*   only subscribe and p component div  ----- h-51px exact   */}
<div className='w-[500px] h-[51px]'>
<h3 className='font-semibold text-[20px]'>
    Subscribe to our newsletter
</h3>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
</div>

<div className='h-[82px] w-[400px] gap-[16px] pl-[220px]'>
  <section className='w-[400px] h-[48px] gap-[16px] flex'>
<section className='w-[265px] h-[48px] border rounded-[5px] gap-[8px] p-[12px]'>
  <button className='text-[16px]'>
  Enter your email
  </button>
</section>
<section className='w-[119px] h-[48px] border rounded-[5px] gap-[8px] p-[12px]'>
  <button className='text-[16px]'>Subscribe</button>
</section>
</section>

<section className='w-[400px] h-[18px] pt-[16px]'>
  <p className='text-[12px]'>
  By subscribing you agree to with our <span className='underline'>Privacy Policy</span>
  </p>
</section>

</div>
</div>



<div className='h-[225px] w-[1120px] gap-[40px] mt-[80px] flex '>


  <div className='w-[250px] h-[40px]'>
  <section className='flex items-center space-x-2'>
          <Image src="/Frame 1.png" alt="logo" width={32.58} height={30.38} />
          <p className='font-[Inter] font-bold text-[25.07px]'>Ddsgnr</p>
        </section>
  </div>


  <div className='w-[250px] h-[225px] gap-[16px]'>
    <ul className='h-[24px] w-[250px] font-semibold text-[16px]'>Courses
      <section className='pt-5'>
      <li className='h-[37px] text-[14px] font-normal'>
      Business
      </li>
      <li className='h-[37px] text-[14px] font-normal'>
      Development
      </li>
      <li className='h-[37px] text-[14px] font-normal'>
      Technology
      </li>
      <li className='h-[37px] text-[14px] font-normal'>
      Design
      </li>
     <li className='h-[37px] text-[14px] font-normal'>
     Programming
     </li>
     </section>
    </ul>
  </div>

  <div className='w-[250px] h-[225px] gap-[16px]'>
    <ul className='h-[24px] w-[250px] font-semibold text-[16px]'>Resources
      <section className='pt-5'>
      <li className=' h-[37px] text-[14px] font-normal'>
      Career
      </li>
      <li className='h-[37px] text-[14px] font-normal'>
      Resume
      </li>
      <li className='h-[37px] text-[14px] font-normal'>
      Learning
      </li>
      <li className='h-[37px] text-[14px] font-normal'>
      Interview Preparation
      </li>
     <li className='h-[37px] text-[14px] font-normal'>
     Jobs
     </li>
     </section>
    </ul>
  </div>

  <div className='w-[250px] h-[225px] gap-[16px]'>
    <ul className='h-[24px] w-[250px] font-semibold text-[16px]'>About Us
      <section className='pt-5'>
      <li className='h-[37px] text-[14px] font-normal'>
      Contact
      </li>
      <li className='h-[37px] text-[14px] font-normal'>
      Help/Support
      </li>
      <li className='h-[37px] text-[14px] font-normal'>
      FAQ
      </li>
      <li className='h-[37px] text-[14px] font-normal'>
      Terms and Conditions
      </li>
     <li className='h-[37px] text-[14px] font-normal'>
     Partners
     </li>
     </section>
    </ul>
  </div>

</div>

<div className='pt-[80px] border-b'></div>

<div className='pt-[60px]'></div>


<div className='w-[1120px] h-[24px] flex justify-between'>

<div className='w-[[564px] h-[21px]'>
  <section className='flex gap-[24px]'>
  <section className='text-[14px]'>
    2023 Ddsgnr. All right reserved.</section>
  <section className='underline text-[14px]'>
    Privacy Policy</section>
  <section className='underline text-[14px]'>
    Terms of Service</section>
  <section className='underline text-[14px]'>
    Cookies Settings</section>
  </section>
</div>

<div className='w-[132px] h-[24px]'>
        
    <section className='h-[18px] flex gap-4'> 
        <img src='/Vector.png'  alt='facebook icon' />
        <img src='/second.png' alt='instagram icon' />
        <img src='/Twitter.png' alt='twitter icon' />
        <img src='/LinkedIn.png' alt='linkedin icon' />
     </section>        
        
</div>
</div>


</div>
</div>
</div>
  )
}

export default Footer


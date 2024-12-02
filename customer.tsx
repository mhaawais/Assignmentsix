import React from 'react'
import Image from 'next/image'

const Customer = () => {
    return (
//  main full div   //        
<div className='h-[830px] gap-[80px] bg-[#F7F7F7] pl-[64px] pr-[64px]'>

{/*    header div         */}
<div className='w-[560px] h-[109px] gap-[24px] pt-[110px]'>
<h2 className='font-[Roboto] font-bold text-[48px]'>
Customer testimonials
</h2>
<p className='font-[Roboto] text-[19px]'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>

</div>

{/*     full div with down component     */}
<div className='w-[100%] h-[390px] gap-[48px] pt-[190px]'>

{/*      row div         */}    
<div className=' h-[294x] gap-[32px] flex'>

{/*      first section                   */}
<div className='w-[375px] h-[294px] gap-[24px] p-[24px] border border-[#000000]'>

<section className='gap-1 pt-[5px]'>
<Image src='/Stars.png' alt='stars' width={116} height={18.89}  />   
</section>   

<section className='w-[352px] h-[188px] gap-[24px] pt-[24px]'>
<p className='w-[352px] h-[108px] fon-[Roboto] text-[20px]'>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
</p>
</section>

<section className='-mt-4'>
<section className='w-[254] h-[56px] gap-[20px] flex items-center'>
<img src='/Avatar Image.png' alt='avatar' />
<section className='w-[178px] h-[48px]'>
<h3 className='font-semibold'>James Nduku</h3>
<p>Software Developer</p>
</section>
</section>
</section>

</div>

{/*  second section     */}
<div className='w-[375px] h-[294px] gap-[24px] p-[24px] border border-[#000000]'>

<section className='gap-1 pt-[5px]'>
<Image src='/Stars.png' alt='stars' width={116} height={18.89}  />   
</section>   

<section className='w-[352px] h-[188px] gap-[24px] pt-[24px]'>
<p className='w-[352px] h-[108px] fon-[Roboto] text-[20px]'>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
</p>
</section>

<section className='-mt-4'>
<section className='w-[254] h-[56px] gap-[20px] flex items-center'>
<img src='/Avatar Image (2).png' alt='avatar' />
<section className='w-[178px] h-[48px]'>
<h3 className='font-semibold'>Erick Kipkemboi</h3>
<p>Scrum Master</p>
</section>
</section>
</section>

</div>

{/*   third section     */}
<div className='w-[375px] h-[294px] gap-[24px] p-[24px] border border-[#000000]'>

<section className='gap-1 pt-[5px]'>
<Image src='/Stars.png' alt='stars' width={116} height={18.89}  />   
</section>   

<section className='w-[352px] h-[188px] gap-[24px] pt-[24px]'>
<p className='w-[352px] h-[108px] fon-[Roboto] text-[20px]'>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
</p>
</section>

<section className='-mt-4'>
<section className='w-[254] h-[56px] gap-[20px] flex items-center'>
<img src='/Avatar Image (3).png' alt='avatar' />
<section className='w-[178px] h-[48px]'>
<h3 className='font-semibold'>Stephen Kerubo</h3>
<p>UI/UX Designer</p>
</section>
</section>
</section>

      </div>
</div>
          <div className='pt-[70px]'>
               <img src='/Content.png' alt='dots'/>
          </div>

</div>
</div>
  )
}

export default Customer

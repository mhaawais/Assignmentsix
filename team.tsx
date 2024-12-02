import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
/*         main div (1)       */
<div className='main w-[100%] h-[895px] gap-[80px] bg-[#F7F7F7]'>


<div className='flex justify-center'>    
<div className='w-[768px] h-[109px] text-center pt-20'>
    <h2 className='h-[58px] font-[Roboto] font-bold text-[48px]'>
              Our team
    </h2>
    <p className='h-[27px] font-[Roboto] text-[18px] text-center pt-6'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    </p>
</div>
</div>

{/*     full-------------2nd main div                         */}
<div className='h-[610px] gap-24 pt-36'>
{/*     first row-------------3rd main div                    */}
<div className='h-[273px] gap-[24px] flex justify-center'>

{/*     first section or part 1-------------4th main div       */}
<div className='w-[394px] h-[273px] gap-[24px]  '>

<section className='flex justify-center items-start'>
<Image src='/Image (8).png' alt='pic' width={80} height={80}/>
</section>   

<section className='w-[394px] h-[57px] flex flex-col justify-center items-center pt-10'>
<h3 className='h-[30px] font-semibold font-[Roboto] text-[20px]'>
James Nduku
</h3>
<p className='h-[27px] font-normal font-[Roboto] text-[16px]'>
Marketing Coordinator
</p>
</section>


<section className='flex justify-center pt-[113px]'>
<h1 className='flex gap-[14px] '>
<Image src='/LinkedIn.png' alt='linkedin icon' width={18} height={18} />
<Image src='/Twitter.png' alt='twitter icon' width={18} height={18} />
<Image src='/Vector (3).png'  alt='icon'  width={18} height={18} />
</h1>
</section>

</div>


{/*     second section or part 2-------------5th main div       */}
<div className='w-[394px] h-[273px] gap-[24px] '>

<section className='flex justify-center items-start'>
<Image src='/Image (9).png' alt='pic' width={80} height={80}/>
</section>   

<section className='w-[394px] h-[57px] flex flex-col justify-center items-center pt-10'>
<h3 className='h-[30px] font-semibold font-[Roboto] text-[20px]'>
Joseph Munyambu
</h3>
<p className='h-[27px] font-normal font-[Roboto] text-[16px]'>
Nursing Assistant
</p>
</section>


<section className='flex justify-center pt-[113px]'>
<h1 className='flex gap-[14px] '>
<Image src='/LinkedIn.png' alt='linkedin icon' width={18} height={18} />
<Image src='/Twitter.png' alt='twitter icon' width={18} height={18} />
<Image src='/Vector (3).png'  alt='icon'  width={18} height={18} />
</h1>
</section>

</div>



{/*     third section or part 3-------------div       */}
<div className='w-[394px] h-[273px] gap-[24px]  '>

<section className='flex justify-center items-start'>
<Image src='/Image (10).png' alt='pic' width={80} height={80}/>
</section>   

<section className='w-[394px] h-[57px] flex flex-col justify-center items-center pt-10'>
<h3 className='h-[30px] font-semibold font-[Roboto] text-[20px]'>
Joseph Ngumbau
</h3>
<p className='h-[27px] font-normal font-[Roboto] text-[16px]'>
Medical Assistant
</p>
</section>

<section className='flex justify-center pt-[113px]'>
<h1 className='flex gap-[14px] '>
<Image src='/LinkedIn.png' alt='linkedin icon' width={18} height={18} />
<Image src='/Twitter.png' alt='twitter icon' width={18} height={18} />
<Image src='/Vector (3).png'  alt='icon'  width={18} height={18} />
</h1>
</section>

      </div>
</div>



{/*     second row------------- div                    */}
<div className='h-[273px] gap-[24px] flex justify-center pt-[48px]'>


{/*     first section of 2------------- div       */}
<div className='w-[394px] h-[273px] gap-[24px]'>

<section className='flex justify-center items-start'>
<Image src='/Image (11).png' alt='pic' width={80} height={80}/>
</section>   

<section className='w-[394px] h-[57px] flex flex-col justify-center items-center pt-10'>
<h3 className='h-[30px] font-semibold font-[Roboto] text-[20px]'>
Erick Kipkemboi
</h3>
<p className='h-[27px] font-normal font-[Roboto] text-[16px]'>
Web Designer
</p>
</section>

</div>

{/*     second section of 2-------------div       */}
<div className='w-[394px] h-[273px] gap-[24px] '>

<section className='flex justify-center items-start'>
<Image src='/Image (12).png' alt='pic' width={80} height={80}/>
</section>   

<section className='w-[394px] h-[57px] flex flex-col justify-center items-center pt-10'>
<h3 className='h-[30px] font-semibold font-[Roboto] text-[20px]'>
Stephen Kerubo
</h3>
<p className='h-[27px] font-normal font-[Roboto] text-[16px]'>
President of Sales
</p>
</section>

</div>

{/*     third section of 2-------------div       */}
<div className='w-[394px] h-[273px] gap-[24px] '>

<section className='flex justify-center items-start'>
<Image src='/Image (13).png' alt='pic' width={80} height={80}/>
</section>   

<section className='w-[394px] h-[57px] flex flex-col justify-center items-center pt-10'>
<h3 className='h-[30px] font-semibold font-[Roboto] text-[20px]'>
John Leboo
</h3>
<p className='h-[27px] font-normal font-[Roboto] text-[16px]'>
Dog Trainer
</p>
</section>
     </div>
</div>

{/*closes at last  -------  main div closes*/}
</div>
</div>
  )
}

export default Team

import React from "react"
import { Button } from "./ui/button"
import Image from "next/image"

const Courses = () => {
    return (
      <div className='h-[1742px] gap-[60px] bg-[#FFFFFF]'>
        <div className='h-[118px] gap-[16px] text-center flex flex-col items-center pt-[60px]'>
          <h1 className='w-[768px] font-[Roboto] font-bold text-[56px] text-[#000000]'>
            Courses
          </h1>

        <p className='font-[Roboto] text-[18px] mt-[8px]'>
            Your Ultimate Guide to Learning
          </p>
    
  
        <div className='gap-[64px] flex flex-col items-center mt-[37px]'>
          <div className='w-[336px] h-[40px] flex justify-between'>
            <button className='w-[87px] border border-[#676767] font-[Roboto] text-[16px]'>
              Popular
            </button>
            <button className='w-[140px] font-[Roboto] text-[16px]'>
              Recommended
            </button>
            <button className='w-[109px] font-[Roboto] text-[16px]'>
              Best Price
            </button>
          </div>
            

           {/*main container-------sir i have done this by different widths because my screen is small i want to fit it in my screen */}

          <div className="w-[100%] h-[534px] gap-8 flex justify-start">
                      
                      
                      {/*   first    */}
          <div className='h-[534px] w-[400px] bg-[#F7F7F7] rounded-[5px] gap-6'>
               <div className="h-[300px]">            
              <Image src='/Image (2).png' alt='pic' width={400} height={300} />
               </div>
              <div className='w-[400px] h-[210px] gap-6 pt-8'>
                <div className="w-[382px] h-[24px] gap-2 flex justify-center items-center">
                <section className='w-[326px] h-[21px] text-start'>
                  <p className='font-[Roboto] font-semibold text-[14px]'>
                    Design
                  </p>
                  </section>
                  <section className=' w-[48px] h-[24px] gap-[4px] flex justify-center items-end'>
                    <Image src='/Star 1.png' alt='star1' width={24} height={24}/>
                    <p className='w-[20px] h-[24px] font-semibold font-[Roboto] text-[15px]'>
                      5.0
                    </p>
                </section>
               </div>
                <div className="w-[382px] h-[34px] pt-2 text-start">
                  <h5 className="font-[Roboto] font-bold text-[24px] text-[#000000]">
                    UX/UI Design 201
                  </h5>
                </div>
                <div className="w-[382px] h-[48px] pt-2 text-start">
                    <p className="font-normal font-[Roboto] text-[18px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                     </p> 
                </div>
                <div className="w-[382px] h-[40px] pt-9 flex">
                  <button className="w-[117px] h-[40px] border rounded-[5px] border-[#000000] pr-[20px] pl-[20px]">
                    <p className="w-[77px] h-[24px] font-normal font-[Roboto] text-[16px]">Enroll Now</p>
                    </button>
                    <section className="pl-[22px]">
                    <p className="w-[77px] h-[40px] gap-2 font-medium flex justify-center items-center">
                    $400
                    </p>
                    </section>

</div>
</div>
</div>

        {/*   second    */}

<div className='h-[534px] w-[400px] bg-[#F7F7F7] rounded-[5px] gap-6'>
               <div className="h-[300px]">            
              <Image src='/Image (3).png' alt='pic' width={400} height={300} />
               </div>
              <div className='w-[400px] h-[210px] gap-6 pt-8'>
                <div className="w-[382px] h-[24px] gap-2 flex justify-center items-center">
                <section className='w-[326px] h-[21px] text-start'>
                  <p className='font-[Roboto] font-semibold text-[14px]'>
                  Programmimg
                  </p>
                  </section>
                  <section className=' w-[48px] h-[24px] gap-[4px] flex justify-center items-end'>
                    <Image src='/Star 1.png' alt='star1' width={24} height={24}/>
                    <p className='w-[20px] h-[24px] font-semibold font-[Roboto] text-[15px]'>
                      5.0
                    </p>
                </section>
               </div>
                <div className="w-[382px] h-[34px] pt-2 text-start">
                  <h5 className="font-[Roboto] font-bold text-[24px] text-[#000000]">
                  Introduction to Python
                  </h5>
                </div>
                <div className="w-[382px] h-[48px] pt-2 text-start">
                    <p className="font-normal font-[Roboto] text-[18px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                     </p> 
                </div>
                <div className="w-[382px] h-[40px] pt-9 flex">
                  <button className="w-[117px] h-[40px] border rounded-[5px] border-[#000000] pr-[20px] pl-[20px]">
                    <p className="w-[77px] h-[24px] font-normal font-[Roboto] text-[16px]">Enroll Now</p>
                    </button>
                    <section className="pl-[22px]">
                    <p className="w-[77px] h-[40px] gap-2 font-medium flex justify-center items-center">
                    $400
                    </p>
                    </section>
</div>
</div>
</div>

        {/*   third 3   */}

<div className='h-[534px] w-[400px] bg-[#F7F7F7] rounded-[5px] gap-6'>
               <div className="h-[300px]">            
              <Image src='/Image (4).png' alt='pic' width={400} height={300} />
               </div>
              <div className='w-[400px] h-[210px] gap-6 pt-8'>
                <div className="w-[382px] h-[24px] gap-2 flex justify-center items-center">
                <section className='w-[326px] h-[21px] text-start'>
                  <p className='font-[Roboto] font-semibold text-[14px]'>
                  Business
                  </p>
                  </section>
                  <section className=' w-[48px] h-[24px] gap-[4px] flex justify-center items-end'>
                    <Image src='/Star 1.png' alt='star1' width={24} height={24}/>
                    <p className='w-[20px] h-[24px] font-semibold font-[Roboto] text-[15px]'>
                      5.0
                    </p>
                </section>
               </div>
                <div className="w-[382px] h-[34px] pt-2 text-start">
                  <h5 className="font-[Roboto] font-bold text-[24px] text-[#000000]">
                  Data Analysis for Beginners
                  </h5>
                </div>
                <div className="w-[382px] h-[48px] pt-2 text-start">
                    <p className="font-normal font-[Roboto] text-[18px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                     </p> 
                </div>
                <div className="w-[382px] h-[40px] pt-9 flex">
                  <button className="w-[117px] h-[40px] border rounded-[5px] border-[#000000] pr-[20px] pl-[20px]">
                    <p className="w-[77px] h-[24px] font-normal font-[Roboto] text-[16px]">Enroll Now</p>
                    </button>
                    <section className="pl-[22px]">
                    <p className="w-[77px] h-[40px] gap-2 font-medium flex justify-center items-center">
                    $400
                    </p>
                    </section>
</div>
</div>
</div>
</div>



{/* 2nd main  or container*/}
 <div className="w-[100%] h-[534px] gap-8 flex justify-start">       


   {/*   first (2)  */}        
<div className='h-[534px] w-[400px] bg-[#F7F7F7] rounded-[5px] gap-6'>
               <div className="h-[300px]">            
              <Image src='/Image (5).png' alt='pic' width={400} height={300} />
               </div>
              <div className='w-[400px] h-[210px] gap-6 pt-8'>
                <div className="w-[382px] h-[24px] gap-2 flex justify-center items-center">
                <section className='w-[326px] h-[21px] text-start'>
                  <p className='font-[Roboto] font-semibold text-[14px]'>
                  Art
                  </p>
                  </section>
                  <section className=' w-[48px] h-[24px] gap-[4px] flex justify-center items-end'>
                    <Image src='/Star 1.png' alt='star1' width={24} height={24}/>
                    <p className='w-[20px] h-[24px] font-semibold font-[Roboto] text-[15px]'>
                      5.0
                    </p>
                </section>
               </div>
                <div className="w-[382px] h-[34px] pt-2 text-start">
                  <h5 className="font-[Roboto] font-bold text-[24px] text-[#000000]">
                  Art Specialization
                  </h5>
                </div>
                <div className="w-[382px] h-[48px] pt-2 text-start">
                    <p className="font-normal font-[Roboto] text-[18px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                     </p> 
                </div>
                <div className="w-[382px] h-[40px] pt-9 flex">
                  <button className="w-[117px] h-[40px] border rounded-[5px] border-[#000000] pr-[20px] pl-[20px]">
                    <p className="w-[77px] h-[24px] font-normal font-[Roboto] text-[16px]">Enroll Now</p>
                    </button>
                    <section className="pl-[22px]">
                    <p className="w-[77px] h-[40px] gap-2 font-medium flex justify-center items-center">
                    $400
                    </p>
                    </section>
</div>
</div>
</div>


{/*    second(2nd)    */}
<div className='h-[534px] w-[400px] bg-[#F7F7F7] rounded-[5px] gap-6'>
               <div className="h-[300px]">            
              <Image src='/Image (6).png' alt='pic' width={400} height={300} />
               </div>
              <div className='w-[400px] h-[210px] gap-6 pt-8'>
                <div className="w-[382px] h-[24px] gap-2 flex justify-center items-center">
                <section className='w-[326px] h-[21px] text-start'>
                  <p className='font-[Roboto] font-semibold text-[14px]'>
                  Law
                  </p>
                  </section>
                  <section className=' w-[48px] h-[24px] gap-[4px] flex justify-center items-end'>
                    <Image src='/Star 1.png' alt='star1' width={24} height={24}/>
                    <p className='w-[20px] h-[24px] font-semibold font-[Roboto] text-[15px]'>
                      5.0
                    </p>
                </section>
               </div>
                <div className="w-[382px] h-[34px] pt-2 text-start">
                  <h5 className="font-[Roboto] font-bold text-[24px] text-[#000000]">
                  Rule of Law
                  </h5>
                </div>
                <div className="w-[382px] h-[48px] pt-2 text-start">
                    <p className="font-normal font-[Roboto] text-[18px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                     </p> 
                </div>
                <div className="w-[382px] h-[40px] pt-9 flex">
                  <button className="w-[117px] h-[40px] border rounded-[5px] border-[#000000] pr-[20px] pl-[20px]">
                    <p className="w-[77px] h-[24px] font-normal font-[Roboto] text-[16px]">Enroll Now</p>
                    </button>
                    <section className="pl-[22px]">
                    <p className="w-[77px] h-[40px] gap-2 font-medium flex justify-center items-center">
                    $400
                    </p>
                    </section>
</div>
</div>
</div>


{/*          third(2)        */}
<div className='h-[534px] w-[400px] bg-[#F7F7F7] rounded-[5px] gap-6'>
               <div className="h-[300px]">            
              <Image src='/Image (7).png' alt='pic' width={400} height={300} />
               </div>
              <div className='w-[400px] h-[210px] gap-6 pt-8'>
                <div className="w-[382px] h-[24px] gap-2 flex justify-center items-center">
                <section className='w-[326px] h-[21px] text-start'>
                  <p className='font-[Roboto] font-semibold text-[14px]'>
                  Tech
                  </p>
                  </section>
                  <section className=' w-[48px] h-[24px] gap-[4px] flex justify-center items-end'>
                    <Image src='/Star 1.png' alt='star1' width={24} height={24}/>
                    <p className='w-[20px] h-[24px] font-semibold font-[Roboto] text-[15px]'>
                      5.0
                    </p>
                </section>
               </div>
                <div className="w-[382px] h-[34px] pt-2 text-start">
                  <h5 className="font-[Roboto] font-bold text-[24px] text-[#000000]">
                  Introduction to webflow
                  </h5>
                </div>
                <div className="w-[382px] h-[48px] pt-2 text-start">
                    <p className="font-normal font-[Roboto] text-[18px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                     </p> 
                </div>
                <div className="w-[382px] h-[40px] pt-9 flex">
                  <button className="w-[117px] h-[40px] border rounded-[5px] border-[#000000] pr-[20px] pl-[20px]">
                    <p className="w-[77px] h-[24px] font-normal font-[Roboto] text-[16px]">Enroll Now</p>
                    </button>
                    <section className="pl-[22px]">
                    <p className="w-[77px] h-[40px] gap-2 font-medium flex justify-center items-center">
                    $400
                    </p>
                    </section>
</div>
</div>
</div>
</div>

                  <div className="w-[152px] h-[40px] border rounded-[5px] border-[#000000] gap-2 hover:bg-red-400">
                    <button className="font-[Roboto] pt-2 text-center">
                      View All Courses
                    </button>
                  </div>

</div>
</div>
</div>
    )
}
export default Courses;

import React from 'react';
import Image from 'next/image';

const Trusted = () => {
  return (
    <div className='bg-[#F7F7F7] h-[228px] flex justify-between items-center p-1 '>
      <h5 className='font-[Roboto] font-bold text-[24px] text-[#000000]'>
        Trusted by 2000+ companies worldwide.<span className='lg:hidden'> [social proof to build credibility]</span>
      </h5>

      
      <div className='flex gap-[19.12px] pl-[65px]'>
        <Image src={"/Airbnb Logo.png"} alt='first' width={123.8} height={38.52} />
        <Image src={"/Airbnb Logo (2).png"} alt='second' width={123.8} height={38.52} />
        <Image src={"/Airbnb Logo (3).png"} alt='third' width={123.8} height={38.52} />
        <Image src={"/Airbnb Logo (4).png"} alt='fourth' width={123.8} height={38.52} />
        <Image src={"/Airbnb Logo (5).png"} alt='fifth' width={123.8} height={38.52} />
        <Image src={"/Airbnb Logo (6).png"} alt='sixth' width={123.8} height={38.52} />
      </div>
    </div>
  );
};

export default Trusted;

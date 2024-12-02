import React from "react";
import next from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Trusted from "@/components/trusted";
import Explore from "@/components/explore";
import Achievements from "@/components/achievements";
import Courses from "@/components/courses";
import Team from "@/components/team";
import Customer from "@/components/customer";
import Footer from "@/components/footer";

export default function Home () {
  return(
    // sir ya resposive nhi ho rhi bht koshish ki h, ab practise krta hu phr inshallah next assignment tk ya seekh lu ga ma,
      
    <div className="w-[100%] h-[7678px] bg-[#444444]">   
      <div>
        <header>
        <Navbar />
        <Header />
        </header>

        <Hero />
        <Trusted />
        <Explore />
        <Achievements />
        <Courses />
        <Team />
        <Customer />



        <Footer />

      </div>
    </div>  
  )
};


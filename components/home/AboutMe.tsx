import React from "react";
import SkillSection from "./SkillSection";
import Image from "next/image";
import HeroImg from "@/public/code.png";


function AboutMe() {
  return (
    <section className='alignment py-8 md:py-14'>
      <div className='px-8 md:px-12 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-y-6 gap-x-8'>
        <div className='md:col-span-5 lg:col-span-4'>
          <h1 className='text-4xl md:text-5xl lg:text-[3.6rem] tracking-normal'>
            Ashish Makwana
          </h1>
          <h3 className='text-secondary md:text-[1.4rem] mt-2 normal-case'>
            Next.js & MERN Full Stack Developer
          </h3>
          <p className='text-secondary text-base lg:text-[1.2rem] mt-4 md:mt-8'>
           Web developer with 10+ years of experience creating pixel-perfect websites. My interest in web development started back in 2014. Fast-forward to today, I have had the privilege of working with clients across the world covering more than 120 completed projects.
          </p>
          <p className='text-secondary text-base lg:text-[1.2rem] mt-2 mb-4 md:mt-4 md:mb-8'>
            My tech stack includes:{" "}
          </p>
          <SkillSection />
        </div>
        <div className='hidden lg:col-span-2 lg:flex lg:justify-center lg:items-center'>
          <Image
            src={HeroImg}
            alt='coding'
            className='w-[60%] h-auto object-cover'
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

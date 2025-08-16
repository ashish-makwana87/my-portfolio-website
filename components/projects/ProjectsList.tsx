'use client';
import { projectsData } from '@/utils/data'; 
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { useState } from 'react';
import Pagination from './Pagination';


function ProjectsList() {   
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  //calculating index and filtering projects data
  const startIndex = (currentPage - 1) * 7;
  const endIndex = currentPage * 7; 
  
  const newProjectsData = projectsData.slice(startIndex, endIndex);
  const totalProjects = projectsData.length;
  
  return (
    <section id='portfolio' className='alignment py-8 md:py-14'>
      {/* projects container */}
      <div className='px-0 md:px-12'>

      {/* projects header */}
      <div className='py-4 border-b-1 border-gray-700 '>
      <div className='grid grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-6 justify-center items-center'>
        <h4 className='hidden lg:block lg:col-span-2 font-semibold '>
          Project
        </h4>
        <h4 className='col-span-3 md:col-span-2 lg:col-span-2 font-semibold '>
          Title
        </h4>
        <h4 className='hidden md:block md:col-span-4 lg:col-span-6 font-semibold '>
          Built With
        </h4>
        <h4 className='col-span-1 md:col-span-1 lg:col-span-2 font-semibold'>
          URL
        </h4>
      </div>
      </div>

      {/* projects list */}
      <div className='py-4'>
        {newProjectsData.map((item) => {
          return (
            <div
              key={item.id}
              className='grid grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-6 py-4 border-b-1 border-gray-700'
            >
              <div className='hidden relative w-32 h-18 lg:block lg:col-span-2'>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className='object-cover rounded'
                />
              </div> 
              <h6 className='col-span-3 md:col-span-2 lg:col-span-2 font-semibold'>
                {item.title}
              </h6>
              <div className='hidden md:col-span-4 lg:col-span-6 md:flex md:flex-wrap md:items-center md:gap-x-2 gap-y-2 pr-2'>
                {item.skills.map((skill, index) => {
                  return (
                    <span
                      key={index}
                      className='text-primary font-semibold normal-case bg-primary/10 py-2 px-3 rounded-full text-[0.75rem]'
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
              <div className="className='col-span-1 md:col-span-1 lg:col-span-2 flex justify-start flex-wrap gap-x-3">
              {item.github && <Link
                href={item.github}
                target='_blank'
              >
                <FaGithub className='w-5 h-5 text-sm hover:text-primary' />
              </Link>}
              <Link
                href={item.url}
                target='_blank'
              >
                <FiExternalLink className='w-5 h-5 text-sm hover:text-primary' />
              </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination totalProjects={totalProjects} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </section>
  )
}

export default ProjectsList;
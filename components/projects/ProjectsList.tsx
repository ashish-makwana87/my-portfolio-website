'use client';
import { projectsData } from '@/utils/data'; 
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { useState } from 'react';
import Pagination from './Pagination';

function ProjectsList() {
   
  const [pageIndex, setPageIndex] = useState(1)

  const totalProjects = projectsData.length
  
  
  return (
    <section className='alignment py-8 md:py-14 h-96'>
      <div className='px-8 md:px-12'>

      <Pagination totalProjects={totalProjects} pageIndex={pageIndex} setPageIndex={setPageIndex} />
      </div>
    </section>
  )
}

export default ProjectsList;
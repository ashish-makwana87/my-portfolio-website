import { log } from 'node:console'
import React from 'react'
import { Button } from '../ui/button'

type PaginationProps = {
 totalProjects: number,
 pageIndex: number, 
 setPageIndex: React.Dispatch<React.SetStateAction<number>>
}


function Pagination({totalProjects, pageIndex, setPageIndex}: PaginationProps) {
  
  const totalPages = Math.ceil(43 / 10)
  
  const paginationArray = Array.from({length: totalPages}, (_, index) => index + 1)
  
  console.log(paginationArray);
  

  return (
    <div className='flex gap-x-2'>
     {paginationArray.map((pageNumber, index) => {

      return <Button key={index} type='button' variant='outline' size='lg' className={pageIndex === pageNumber ? 'px-4 py-2 border-foreground bg-foreground text-background font-medium hover:bg-foreground hover:cursor-pointer' : 'px-4 py-2 border-foreground text-foreground font-medium hover:bg-foreground hover:cursor-pointer'} onClick={() => setPageIndex(pageNumber) }>{pageNumber}</Button>
     })}
    </div>
  )
}

export default Pagination
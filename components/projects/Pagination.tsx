import React from 'react'


type PaginationProps = {
 totalProjects: number,
 pageIndex: number, 
 setPageIndex: React.Dispatch<React.SetStateAction<number>>
}


function Pagination({totalProjects, pageIndex, setPageIndex}: PaginationProps) {
  
  const totalPages = Math.ceil(81 / 10)
  
  const paginationArray = Array.from({length: totalPages}, (_, index) => index + 1)
  
 const addPageButton = ({pageNumber, activeClass}: {pageNumber: number, activeClass: boolean}) => {

  return <button key={pageNumber} type='button' className={`projectPage ${activeClass && 'activePage'} `} onClick={() => setPageIndex(pageNumber) }>{pageNumber}</button>
 }

 const renderPageButtons = () => {
  
  const pageButtons: React.ReactNode[]  = []; 
  
  pageButtons.push(addPageButton({pageNumber: 1, activeClass: pageIndex === 1}));
  pageButtons.push(addPageButton({pageNumber: totalPages, activeClass: pageIndex === totalPages}))

 return pageButtons; 

 }

  return (
    <div className='flex'>
      <div className='ml-auto flex gap-x-2 flex-wrap'>
      {renderPageButtons()}
      </div>
    </div>
  )
}

export default Pagination;

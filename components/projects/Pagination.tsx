import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type PaginationProps = {
 totalProjects: number,
 currentPage: number, 
 setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}


function Pagination({totalProjects, currentPage, setCurrentPage}: PaginationProps) {
  
  const totalPages = Math.ceil(49 / 7)
 
  // previous and next page handlers
  const prevPage = () => {
    let newPage = currentPage - 1; 

   if(newPage < 1) {
    newPage = totalPages;
    setCurrentPage(newPage)
   }

   setCurrentPage(newPage)
  }
 
 const nextPage = () => {
    let newPage = currentPage + 1; 

   if(newPage > totalPages) {
    newPage = 1;
    setCurrentPage(newPage)
   }
   
   setCurrentPage(newPage)
  }

// add page button function
 const addPageButton = ({pageNumber, activeClass}: {pageNumber: number, activeClass: boolean}) => {

  return <button key={pageNumber} type='button' className={`projectPage ${activeClass && 'activePage'} `} onClick={() => setCurrentPage(pageNumber) }>{pageNumber}</button>
 }

// displaying page buttons based on conditions
 const renderPageButtons = () => {
  
  const pageButtons: React.ReactNode[]  = []; 
  
 //if total pages are more than 4 
  if (totalPages > 4) {
   
  // displaying first three buttons 
  pageButtons.push(addPageButton({pageNumber: 1, activeClass: currentPage === 1}));
  pageButtons.push(addPageButton({pageNumber: 2, activeClass: currentPage === 2}));
  pageButtons.push(<span className='projectPage' key='dots-1'>...</span>);
 
  
  // 4th button on condition 
  if(currentPage !== 1 && currentPage !== 2 && currentPage !== totalPages - 1 
    && currentPage !== totalPages) {
  pageButtons.push(addPageButton({pageNumber: currentPage, activeClass: true}));
  }
  
  //5th button on condition 
  if(pageButtons.length > 3) {
  pageButtons.push(<span className='projectPage' key='dots-2'>...</span>);
  }

  // last two buttons 
  pageButtons.push(addPageButton({pageNumber: totalPages - 1, activeClass: currentPage === totalPages - 1}));
  pageButtons.push(addPageButton({pageNumber: totalPages, activeClass: currentPage === totalPages}))

  } else {
     //if total pages are less than 4 
    pageButtons.push(addPageButton({pageNumber: 1, activeClass: currentPage === 1}));
  pageButtons.push(addPageButton({pageNumber: 2, activeClass: currentPage === 2}));
  pageButtons.push(addPageButton({pageNumber: 3, activeClass: currentPage === 3}));
  pageButtons.push(addPageButton({pageNumber: 4, activeClass: currentPage === 4}));
  }

 return pageButtons; 
 }

  return (
    <div className='flex mt-4 md:mt-6'>
      <div className='ml-auto flex gap-x-2 flex-wrap'>
      {totalPages > 4 && <button type='button' className='projectPage' onClick={prevPage}><FaChevronLeft /></button>}
      {renderPageButtons()}
      {totalPages > 4 && <button type='button' className='projectPage' onClick={nextPage}><FaChevronRight /></button>}
      </div>
    </div>
  )
}

export default Pagination;

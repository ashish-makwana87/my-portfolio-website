import { IoCaretForward } from "react-icons/io5";


type ExperienceProps ={
 title: string,
 duration: string,
 description?: string[]
}

function ExperienceDetails({title, duration, description}: ExperienceProps) {

 console.log(description);
 
  return (
   <div className="mb-6 md:mb-10">
       <h4>{title}</h4>
       <h6 className='mt-2 mb-4 md:mb-6 text-secondary'>{duration}</h6>
       {description && description.map((item, index) => {
   
       return <div key={index} className='px-0 mb-3 md:mb-4 md:px-6 flex gap-3 lg:max-w-4xl'>
        <span className='p-1 text-primary'><IoCaretForward /></span><p>{item}</p>
       </div>
       })}
      </div>
  )
}

export default ExperienceDetails
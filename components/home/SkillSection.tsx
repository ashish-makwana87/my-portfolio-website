import { skills } from "@/utils/data"

export default function SkillSection() {


  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3">
     {skills.map((skill, index) => {
      
     return <p key={index} className='text-primary text-sm font-semibold bg-primary/10 py-2 px-4 rounded-full capitalize inline-block'>{skill}</p>

     })}
     
    </div>
  )
}

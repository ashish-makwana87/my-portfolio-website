import { skills } from "@/utils/data"

export default function SkillSection() {


  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3">
     {skills.map((skill, index) => {
      
     return <p key={index} className='text-primary normal-case text-sm font-medium tracking-wide bg-primary/10 py-2 px-4 rounded-full inline-block'>{skill}</p>
     })}
     
    </div>
  )
}

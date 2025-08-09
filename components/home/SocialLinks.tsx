import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  return (
    <section className='fixed bottom-4 md:bottom-8 left-5 md:left-8'>
      <div className="flex flex-col gap-4">
      <p>
      </p>
      <Link href='https://github.com/ashish-makwana87' target="_blank" className=' hover:text-primary cursor-pointer'><FaGithub className="w-6 h-6 lg:w-7 lg:h-7" /></Link>
     <Link href='https://www.linkedin.com/in/ashish-makwana' target="_blank" className=' hover:text-primary cursor-pointer'><FaLinkedin className="w-6 h-6 lg:w-7 lg:h-7" /></Link>
      </div>
    </section>
  )
}

export default SocialLinks
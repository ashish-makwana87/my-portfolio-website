import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import SectionTitle from '../about/SectionTitle'
import Link from "next/link";

function ContactMe() {
  
  return (
    <footer id='contact' className='alignment pt-8 pb-6 md:pt-14 md:pb-8' >
     <section className='px-0 md:px-12'>
     <SectionTitle title='get in touch' />
     <div className='flex items-center mt-6 md:mt-10'>
      <Link href="mailto:ashish.mak88@gmail.com" target="_blank" className="flex items-center gap-3 md:gap-4">
      <span className="text-primary text-xl"><TfiEmail className="w-5 h-5"/></span>
      <h6>ashish.mak88@gmail.com</h6>
      </Link>
     </div>
     <div className='mt-4 flex items-center'>
      <Link href="tel:+919317337484" target="_blank" className="flex items-center gap-3 md:gap-4">
      <span className="text-primary text-xl"><FiPhone className="w-5 h-5"/></span>
      <h6>+91 9317337484</h6>
      </Link>
     </div>
    <div className='mt-4 flex items-center md:hidden'>
     <Link href="https://github.com/ashish-makwana87" target="_blank" className="flex items-center gap-3">
       <span className="text-primary text-xl"><FaGithub className="w-5 h-5" /></span>
       <h6>GitHub</h6>
     </Link>
    </div>
    <div className='mt-4 flex items-center md:hidden'>
      <Link href="https://www.linkedin.com/in/ashish-makwana" target="_blank" className="flex items-center gap-3">
       <span className="text-primary text-xl"><FaLinkedin className="w-5 h-5" /></span>
       <h6>LinkedIn</h6>
     </Link>
     </div>
     <p className="mt-6 text-xs md:mt-10">Built with Next.js and Tailwind CSS. Deployed on Vercel.</p>
     </section>
    </footer>
  )
}

export default ContactMe
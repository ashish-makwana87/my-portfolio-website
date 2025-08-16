import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import SectionTitle from '../about/SectionTitle'
import Link from "next/link";

function ContactMe() {
  
  return (
    <section id='contact' className='alignment pt-8 pb-4 md:pt-14 md:pb-8' >
     <div className='px-0 md:px-12'>
     <SectionTitle title='get in touch' />
     <div className='flex items-center gap-3 md:gap-4'>
      <span className="text-primary text-xl"><TfiEmail /></span>
      <Link href="mailto:ashish.mak88@gmail.com"><h6>ashish.mak88@gmail.com</h6></Link>
     </div>
     <div className='mt-4 flex items-center gap-2 md:gap-4'>
      <span className="text-primary text-xl"><FiPhone /></span>
      <a href="tel:+919317337484"><h6>+91 9317337484</h6></a>
     </div>
     <p className="mt-8 text-xs md:mt-12">Built with Next.js and Tailwind CSS. Deployed on Vercel.</p>
     </div>
    </section>
  )
}

export default ContactMe
import SectionTitle from '../about/SectionTitle'
import ExperienceDetails from './ExperienceDetails'


function Experience() {

  return (
    <section id='experience' className='alignment py-8 md:py-14 scroll-mt-20'>
     <div className='px-0 md:px-12'>
      <SectionTitle title='Experience' />
      <ExperienceDetails title='Full Stack Developer | Self Employed' duration='May 2025 – Present' description={['Currently working on a Next.js photography portfolio web application using Framer motion, TypeScript and Tailwind CSS. ']} />
      <ExperienceDetails title='Web Developer | Self Employed' duration='October 2014 – Present' link='https://www.upwork.com/freelancers/~01057701529ce83b24?s=1044578476142100494' linkText='Upwork Profile Link' description={['Completed 120+ website development projects on WordPress and Wix platform (both design and development).', 'Worked with 55+ clients from diverse industries (both as an independent web developer and a freelance web developer at Upwork).', 'Collaborated with cross-functional teams of 2-5 to understand requirements and build responsive websites within project timeline.', 'At Upwork, achieved 100% Job Success Score and "Top Rated" status. Calculated based on client ratings and reviews.']} />
      <ExperienceDetails title='Deputy Manager | HDFC Bank, New Delhi' duration='May 2012 - Aug 2013' />
     </div>
    </section>
  )
}

export default Experience
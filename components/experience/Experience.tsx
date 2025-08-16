import SectionTitle from '../about/SectionTitle'
import ExperienceDetails from './ExperienceDetails'


function Experience() {

  return (
    <section id='experience' className='alignment py-8 md:py-14'>
     <div className='px-0 md:px-12'>
      <SectionTitle title='Experience' />
      <ExperienceDetails title='Web Developer | Upwork' duration='October 2014 – Present' description={['Designed, developed and maintained websites for a diverse array of clients - from consulting agencies and large corporations to start-ups.', 'Collaborated with business owners, managers and other team members to understand requirements and transform them into responsive, interactive websites.', 'Worked on more than 120 projects - including new website development and redesigning existing website using WordPress and Wix platform.', 'Achieved "Top Rated" status (among top 1% of Upwork freelancers) and 100% Job Success Score. ']} />
      <ExperienceDetails title='Deputy Manager | HDFC Bank, New Delhi' duration='May 2012 - Aug 2013' />
     </div>
    </section>
  )
}

export default Experience
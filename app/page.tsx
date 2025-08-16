import AboutMe from "@/components/about/AboutMe";
import SocialLinks from "@/components/about/SocialLinks";
import ContactMe from "@/components/contact/ContactMe";
import Experience from "@/components/experience/Experience";
import ProjectsList from "@/components/projects/ProjectsList";



export default function Home() {

  return (
    <div>
      <AboutMe />
      <ProjectsList />
      <Experience />
      <ContactMe />
      <SocialLinks />
    </div>
  );
}

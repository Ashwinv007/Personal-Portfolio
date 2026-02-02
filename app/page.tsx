import Hero from "@/components/hero/Hero"
import Skills from "@/components/skills/Skills"
import ProjectsSection from "@/components/projects/ProjectsSection"
import ContactSection from "@/components/contact/ContactSection"
import AboutSection from "@/components/about/AboutSection"
import Footer from "@/components/footer/Footer"

export default function HomePage() {
  return (
    <main>
      
      <Hero />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <ContactSection />
      <Footer />

    </main>
  )
}

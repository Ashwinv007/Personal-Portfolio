import { getProjects } from "@/use-cases/get-projects"
import ProjectsFilter from "./ProjectsFilter"

export default async function ProjectsSection() {
  const projects = await getProjects()

  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center mb-14 leading-tight">
          <span className="block text-sm tracking-widest text-[#00FF88] mb-2">
            PORTFOLIO
          </span>
          <span className="text-4xl font-medium">
            My Recent <span className="text-[#00FF88]">Projects</span>
          </span>
        </h2>

        <ProjectsFilter projects={projects} />
      </div>
    </section>
  )
}

import ProjectCard from "./ProjectCard"
import { getProjects } from "@/use-cases/get-projects"

export default async function ProjectsSection() {
  const projects = await getProjects()

  return (
    <section className="relative py-20 p-15">
      <div className="container mx-auto">
        <h2 className="text-center mb-14">
  <span className="block text-sm tracking-widest text-emerald-400 mb-2">
    PORTFOLIO
  </span>
  <span className="text-4xl font-medium">
    My Recent <span className="text-emerald-400">Projects</span>
  </span>
</h2>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              description={project.description}
              imageUrl={project.image_url}
              tech={project.tech ?? []}
              demoUrl={project.demo_url}
              sourceUrl={project.source_url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
 
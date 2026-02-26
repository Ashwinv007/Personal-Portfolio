import { getProjects } from "@/use-cases/get-projects"
import { getCategories } from "@/use-cases/get-categories"
import ProjectsFilter from "./ProjectsFilter"

export default async function ProjectsSection() {
  const [projects, categories] = await Promise.all([getProjects(), getCategories()])

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center mb-14 leading-tight">
          <span className="block text-sm tracking-widest text-[#00FF88] mb-2">
            PORTFOLIO
          </span>
          <span className="text-4xl font-medium">
            My Recent <span className="text-[#00FF88]">Projects</span>
          </span>
        </h2>

        <ProjectsFilter projects={projects} categories={categories} />
      </div>
    </section>
  )
}

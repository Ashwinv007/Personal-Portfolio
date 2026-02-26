import { getProjects } from "@/use-cases/get-projects"
import { getCategories } from "@/use-cases/get-categories"
import ProjectsFilter from "./ProjectsFilter"

export default async function ProjectsSection() {
  const [projects, categories] = await Promise.all([getProjects(), getCategories()])

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

        <ProjectsFilter projects={projects} categories={categories} />
      </div>
    </section>
  )
}

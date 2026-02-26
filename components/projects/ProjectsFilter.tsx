"use client"

import { useState } from "react"
import ProjectCard from "./ProjectCard"

type Project = {
  id: number
  name: string
  description: string
  image_url?: string
  demo_url?: string
  source_url?: string
  tech: string[]
  category_id?: number
}

type Category = {
  id: number
  name: string
}

type Props = {
  projects: Project[]
  categories: Category[]
}

export default function ProjectsFilter({ projects, categories }: Props) {
  const [active, setActive] = useState<number | null>(null)

  const filtered = active === null
    ? projects
    : projects.filter((p) => p.category_id === active)

  return (
    <>
      {/* Filter tabs */}
      <div className="flex gap-3 mb-10 justify-center flex-wrap">
        <button
          onClick={() => setActive(null)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            active === null
              ? "bg-green-400 text-black"
              : "border border-neutral-700 text-neutral-400 hover:border-green-400 hover:text-green-400"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              active === cat.id
                ? "bg-green-400 text-black"
                : "border border-neutral-700 text-neutral-400 hover:border-green-400 hover:text-green-400"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
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
    </>
  )
}

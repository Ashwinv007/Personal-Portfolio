"use client"

import { useState } from "react"
import ProjectCard from "./ProjectCard"

const FILTER_TECHS = ["React", "Next.js", "CSS", "Node.js", "TypeScript", "Clean Architecture"]

type Project = {
  id: number
  name: string
  description: string
  image_url?: string
  demo_url?: string
  source_url?: string
  tech: string[]
}

type Props = {
  projects: Project[]
}

export default function ProjectsFilter({ projects }: Props) {
  const [active, setActive] = useState<string | null>(null)

  const filtered = active === null
    ? projects
    : projects.filter((p) => p.tech.includes(active))

  return (
    <>
      {/* Filter tabs */}
      <div className="flex gap-3 mb-10 justify-center flex-wrap">
        <button
          onClick={() => setActive(null)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            active === null
              ? "bg-[#00FF88] text-black"
              : "border border-neutral-700 text-neutral-400 hover:border-[#00FF88] hover:text-[#00FF88]"
          }`}
        >
          All
        </button>
        {FILTER_TECHS.map((tech) => (
          <button
            key={tech}
            onClick={() => setActive(tech)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              active === tech
                ? "bg-[#00FF88] text-black"
                : "border border-neutral-700 text-neutral-400 hover:border-[#00FF88] hover:text-[#00FF88]"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

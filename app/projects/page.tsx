import { Project } from "@/domain/project"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js",
    tech: ["Next.js", "TypeScript"]
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "Full-stack e-commerce platform",
    tech: ["Node.js", "PostgreSQL"]
  }
]
export default function ProjectsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p>{project.description}</p>

              <p className="text-sm opacity-80 mt-2">
                {project.tech.join(", ")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

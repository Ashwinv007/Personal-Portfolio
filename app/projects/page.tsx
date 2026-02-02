import { getProjects } from "@/use-cases/get-projects"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { getCategories } from "@/use-cases/get-categories"
import { Button } from "@/components/ui/button"

export default async function ProjectsPage() {
  const projects = await getProjects()
  const categories = await getCategories()
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Recent Projects</h1>
<div className="flex gap-3 mb-6">
  <Button variant="secondary">All</Button>

  {categories.map((cat) => (
    <Button key={cat.id} variant="outline">
      {cat.name}
    </Button>
  ))}
</div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech?.map((t: string) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded bg-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.demo_url && (
                  <Button asChild>
                    <a href={project.demo_url} target="_blank">
                      Demo
                    </a>
                  </Button>
                )}

                {project.source_url && (
                  <Button variant="outline" asChild>
                    <a href={project.source_url} target="_blank">
                      Source
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

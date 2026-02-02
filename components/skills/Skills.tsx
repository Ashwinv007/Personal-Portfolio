import { getSkills } from "@/use-cases/get-skills"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

export default async function Skills() {
  const skills = await getSkills()

  return (
<section className="relative py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My Skills
        </h2>

       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-15">
  {skills.map((skill) => (
    <Card
      key={skill.id}
      className="
        relative
        rounded-2xl
        bg-white/[0.03]
        border border-white/[0.06]
        p-2
        shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
        transition-all duration-300
        hover:border-emerald-400/60
        hover:shadow-[0_0_40px_rgba(0,255,136,0.15)]
      "
    >
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-3 text-lg font-semibold">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
            🧩
          </span>
          {skill.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {skill.description}
        </p>
      </CardContent>
    </Card>
  ))}
</div>

      </div>
    </section>
  )
}

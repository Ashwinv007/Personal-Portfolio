import { getSkills } from "@/use-cases/get-skills"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import {
  Globe,
  Palette,
  ShoppingCart,
  Smartphone,
  Search,
  Code2,
  Server,
  Database,
  Layout,
  Zap,
  type LucideIcon,
} from "lucide-react"

const svgToIcon: Record<string, LucideIcon> = {
  "code.svg": Code2,
  "code2.svg": Code2,
  "design.svg": Palette,
  "palette.svg": Palette,
  "web.svg": Globe,
  "globe.svg": Globe,
  "mobile.svg": Smartphone,
  "smartphone.svg": Smartphone,
  "cart.svg": ShoppingCart,
  "ecommerce.svg": ShoppingCart,
  "shop.svg": ShoppingCart,
  "search.svg": Search,
  "seo.svg": Search,
  "server.svg": Server,
  "database.svg": Database,
  "layout.svg": Layout,
  "zap.svg": Zap,
}

function getSkillIcon(icon: string | null): LucideIcon {
  if (!icon) return Globe
  return svgToIcon[icon.toLowerCase()] ?? Globe
}

export default async function Skills() {
  const skills = await getSkills()

  return (
    <section className="relative py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#00FFCE]">
          Skills
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-15">
          {skills.map((skill) => {
            const IconComponent = getSkillIcon(skill.icon)
            return (
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
                  hover:border-[#00FFCE]/40
                  hover:shadow-[0_0_40px_rgba(0,255,206,0.12)]
                "
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg font-semibold">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00FFCE]/10 text-[#00FFCE]">
                      <IconComponent className="h-5 w-5" />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

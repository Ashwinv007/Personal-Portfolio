import { getSkills } from "@/use-cases/get-skills"
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
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <p className="text-center text-sm tracking-widest text-[#00FFCE] mb-2">
          SKILLS
        </p>
        <div className="mx-auto mb-6 h-[2px] w-12 bg-[#00FFCE]" />
        <h2 className="text-center text-4xl font-medium leading-tight mb-16">
          My{" "}
          <span className="bg-gradient-to-r from-[#00FF88] to-[#00FFCE] bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const IconComponent = getSkillIcon(skill.icon)
            return (
              <div
                key={skill.id}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-neutral-800
                  bg-neutral-900/60 backdrop-blur
                  p-6
                  transition-all duration-300
                  hover:border-[#00FFCE]/40
                  hover:shadow-[0_0_40px_rgba(0,255,206,0.12)]
                "
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-8 bottom-8 w-[2px] rounded-full bg-[#00FFCE]/0 group-hover:bg-[#00FFCE]/60 transition-all duration-300" />

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00FFCE]/10 text-[#00FFCE] group-hover:bg-[#00FFCE]/20 transition-colors duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mt-4 mb-2 text-lg font-semibold text-white">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

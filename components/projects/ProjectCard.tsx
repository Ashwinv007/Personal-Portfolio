import { Button } from "@/components/ui/button"

type ProjectCardProps = {
  title: string
  description: string
  imageUrl?: string
  tech: string[]
  demoUrl?: string
  sourceUrl?: string
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tech,
  demoUrl,
  sourceUrl,
}: ProjectCardProps) {
  return (
<div className="
  group relative overflow-hidden rounded-2xl
  border border-neutral-800
  bg-neutral-900/70
  backdrop-blur
  transition-all duration-300
  hover:border-[#00FF88]/60
  hover:shadow-[0_0_50px_rgba(0,255,136,0.18)]
">
      {/* Image */}
      <div className="relative h-[260px] overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-neutral-800 flex items-center justify-center text-muted-foreground">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 pb-24 sm:p-6 sm:pb-28">
      <h3 className="text-xl font-medium text-white mb-3">
          {title}
        </h3>

      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
          {description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full
    bg-[#00FF88]/10
    px-3 py-1
    text-xs
    text-[#00FF88]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="absolute bottom-5 left-4 right-4 sm:bottom-7 sm:left-6 sm:right-6 flex gap-3">
        {demoUrl && (
          <Button asChild className="flex-1
    bg-transparent
    border border-[#00FF88]/60
    text-[#00FF88]
    hover:bg-[#00FF88]
    hover:text-black
    hover:shadow-[0_0_25px_rgba(0,255,136,0.45)]
    transition-all">
            <a href={demoUrl} target="_blank">
              Demo
            </a>
          </Button>
        )}

        {sourceUrl && (
<Button
  asChild
  className="
    flex-1
    bg-transparent
    border border-[#00FF88]/60
    text-[#00FF88]
    hover:bg-[#00FF88]
    hover:text-black
    hover:shadow-[0_0_25px_rgba(0,255,136,0.45)]
    transition-all
  "
>
            <a href={sourceUrl} target="_blank">
              Source
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

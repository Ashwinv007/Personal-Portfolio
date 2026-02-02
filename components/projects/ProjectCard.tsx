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
  hover:border-green-400/60
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
      <div className="p-6 pb-28">
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
    bg-green-400/10
    px-3 py-1
    text-xs
    text-green-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="absolute bottom-7 left-6 right-6 flex gap-3">
        {demoUrl && (
          <Button asChild className="flex-1
    bg-transparent
    border border-green-400/60
    text-green-400
    hover:bg-green-400
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
    border border-green-400/60
    text-green-400
    hover:bg-green-400
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

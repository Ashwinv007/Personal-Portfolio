import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="relative bg-background pt-10 py-24">
        {/* Subtle section continuation glow */}
<div className="pointer-events-none absolute inset-0 -z-10">
  <div className="absolute left-1/2 top-0 h-[400px] w-[600px]
    -translate-x-1/2
    rounded-full bg-[#00FF88]/10 blur-[200px]" />
</div>

      <div className="container mx-auto max-w-4xl px-4 text-center">
        {/* Section header */}
        <p className="mb-3 text-sm tracking-widest uppercase text-green-400">
          About
        </p>

        <div className="mx-auto mb-8 h-1 w-24 rounded bg-gradient-to-r from-green-400 to-cyan-400" />

        <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">
          About{" "}
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        {/* Content */}
        <div className="space-y-6 text-left">
          <h3 className="text-2xl font-semibold text-white md:text-3xl">
            I’m a Passionate{" "}
            <span className="text-green-400">Web Developer</span>
          </h3>

          <div className="space-y-4 text-muted-foreground">
            <p>
              With hands-on experience in web development, I specialize in
              building modern, responsive, and user-friendly applications.
              I enjoy working across the full stack to deliver complete
              solutions.
            </p>

            <p>
              I care deeply about clean code, elegant design, and crafting
              digital experiences that solve real-world problems. From complex
              web apps to simple landing pages, I bring focus and precision to
              every project.
            </p>

            <p>
              Outside of coding, I enjoy exploring new technologies, contributing
              to open-source, and continuously improving my skills. I strongly
              believe in learning by building.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <Button size="lg" className="gap-2 bg-green-400 text-black hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] transition-all">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

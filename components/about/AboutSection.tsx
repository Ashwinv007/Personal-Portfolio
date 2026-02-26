import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="relative bg-background py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-12 text-4xl font-bold text-[#00FFCE] md:text-5xl">
          About Me
        </h2>

        {/* Content */}
        <div className="space-y-6 text-left">
          <h3 className="text-2xl font-semibold text-white md:text-3xl">
            I&apos;m a Passionate{" "}
            <span className="text-[#00FF88]">Web Developer</span>
          </h3>

          <div className="space-y-4 text-muted-foreground">
            <p>
              With over 5 years of experience in web development, I specialize
              in creating modern, responsive, and user-friendly websites. My
              expertise spans across front-end and back-end technologies,
              enabling me to deliver complete web solutions.
            </p>

            <p>
              I&apos;m passionate about clean code, elegant design, and crafting
              digital experiences that make a difference. Whether it&apos;s a
              complex web application or a simple landing page, I bring
              creativity and technical excellence to every project.
            </p>

            <p>
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or mentoring
              aspiring developers. I believe in continuous learning and staying
              updated with the latest industry trends.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <Button
              size="lg"
              className="gap-2 bg-[#00FF88] text-black font-semibold shadow-[0_0_20px_rgba(0,255,136,0.35)] hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] transition-all"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

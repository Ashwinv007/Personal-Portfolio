import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-background py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-12 text-4xl font-bold md:text-5xl">
          About{" "}
          <span className="bg-gradient-to-r from-[#00FF88] to-[#00FFCE] bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        {/* Content */}
        <div className="space-y-6 text-left">
          <h3 className="text-2xl font-semibold text-white md:text-3xl">
            {/* I&apos;m a Passionate{" "} */}
            Engineering
            <span className="text-[#00FF88]"> Real Applications </span>
          </h3>

          <div className="space-y-4 text-muted-foreground">
            <p>
              I am a full stack developer who focuses more on how system works
              behind the screen than just how it looks. For me backend logic, database 
              structure and scalability matters equally as frontend design. I work mainly
              with Node.js, Express and MongoDB, and I try to build applications in a way
              that they can handle real users and real business problems.
            </p>

            <p>
              I did not come from a traditional computer science background. I learned by building, breaking and fixing things. Most
              of my understanding comes from practical implementation, real use cases
              and solving actual problems. I prefer working on complete flows like 
              authentication, payments, role management, APIs and database architecture
              rather than just static pages.
            </p>

            <p>
              My goal is to build products that can scale. I am interested in startup
              environments where execution speed and clear thinking matters. I keep
              learning by building projects, improving system design 
              thinking and understanding how real world applications operate internally.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-[#00FF88] text-black font-semibold shadow-[0_0_20px_rgba(0,255,136,0.35)] hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] transition-all"
            >
              <a href="/cv.pdf" download="Ashwin_V_CV.pdf">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

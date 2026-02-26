import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background flex items-center p-5">

      {/* Background glow — single teal circle behind image card */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[60%] top-[40%] h-[700px] w-[700px]
          -translate-y-1/2
          rounded-full bg-[#00FFCE]/22 blur-[220px]" />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 py-20">
        {/* LEFT */}
        <div className="space-y-6">
          {/* Availability */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FF88] opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00FF88]" />
            </span>
            Available for work
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#00FF88] to-[#00FFCE] bg-clip-text text-transparent">
              Ashwin V
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white font-medium">
            Full stack MERN Developer
          </p>

          <p className="max-w-xl text-muted-foreground">
            I craft beautiful, functional web experiences that solve real
            problems. Specialized in modern web technologies and creating
            seamless user interfaces.
          </p>

          {/* CTA */}
          <div className="flex gap-4 pt-4">
            <Button
              size="lg"
              className="bg-[#00FF88] text-black font-semibold shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:shadow-[0_0_40px_rgba(0,255,136,0.65)] transition-all"
            >
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88] hover:text-black transition-all"
            >
              View Projects
            </Button>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 pt-2">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900/60 hover:border-[#00FF88] transition-colors"
            >
              <Github className="h-4 w-4 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900/60 hover:border-[#00FF88] transition-colors"
            >
              <Linkedin className="h-4 w-4 text-white" />
            </a>
            <a
              href="mailto:ashwinv7527@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900/60 hover:border-[#00FF88] transition-colors"
            >
              <Mail className="h-4 w-4 text-white" />
            </a>
          </div>

          {/* Tech Stack */}
          <div className="pt-8">
            <p className="mb-3 text-sm text-muted-foreground">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "HTML", emoji: "🌐" },
                { name: "CSS", emoji: "🎨" },
                { name: "JavaScript", emoji: "⚡" },
                { name: "React", emoji: "⚛️" },
                { name: "Node.js", emoji: "🟢" },
                { name: "Next.js", emoji: "▲" },
              ].map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900/60 px-3 py-2 text-sm"
                >
                  <span>{t.emoji}</span>
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-[420px] h-[420px]">

            {/* Strong teal glow behind card */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px]
                -translate-x-1/2 -translate-y-1/2
                rounded-full bg-[#00FFCE]/25 blur-[250px]" />
            </div>

            {/* Image card */}
            <div className="relative rounded-3xl bg-white p-4
              shadow-[0_0_80px_rgba(0,0,0,0.7)]">

              {/* Floating code icon */}
              <div className="absolute -top-4 -right-4 z-20 flex h-14 w-14
                items-center justify-center rounded-2xl
                bg-[#00FF88] text-black font-bold text-sm
                shadow-[0_0_35px_rgba(0,255,136,0.8)]">
                &lt;/&gt;
              </div>

              {/* Floating palette icon */}
              <div className="absolute -bottom-5 -left-5 z-20 flex h-14 w-14
                items-center justify-center rounded-2xl
                bg-[#00FFCE] text-black text-xl
                shadow-[0_0_35px_rgba(0,255,206,0.8)]">
                🎨
              </div>

              {/* Image */}
              <img
                src="/hero.png"
                alt="Code Preview"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

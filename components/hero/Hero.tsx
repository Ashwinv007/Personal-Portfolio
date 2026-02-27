import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section
      className="relative isolate min-h-screen flex items-center px-5 md:px-10 bg-background overflow-hidden"
    >
      {/* Glow orbs — screen blend mode matches Figma's additive glow rendering on dark backgrounds */}
      {/* Left green glow: SVG filter1 — circle at (230,244) r=180 blur=50 opacity=0.1 */}
      <div className="pointer-events-none absolute left-[2%] top-[6%] w-[260px] h-[260px] rounded-full bg-[#00FF88]/10 blur-[40px] [mix-blend-mode:screen]" />
      {/* Right teal glow: SVG filter0 — circle at (1615,609) r=240 blur=60 opacity=0.1 */}
      <div className="pointer-events-none absolute right-[2%] top-[38%] w-[340px] h-[340px] rounded-full bg-[#00FFFF]/10 blur-[50px] [mix-blend-mode:screen]" />

      <div className="relative container mx-auto grid lg:grid-cols-2 gap-12 py-20 md:py-28">
        {/* LEFT */}
        <div className="space-y-6">
          {/* Availability */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FF88] opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00FF88] shadow-[0_0_8px_3px_rgba(0,255,136,0.8)]" />
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
            I build real world web applications using MERN stack <br />
            with proper backend logic, database design and clean <br />
            frontend structure. Focusing more on how the system  <br />
            works internally, scalability, and practical implementation.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#00FF88] text-black font-semibold shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:shadow-[0_0_40px_rgba(0,255,136,0.65)] transition-all"
            >
              <Link href="/#contact">Hire Me</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88] hover:text-black transition-all"
            >
              <Link href="/#projects">View Projects</Link>
            </Button>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 pt-2">
            <a
              href="https://github.com/Ashwinv007"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900/60 hover:border-[#00FF88] transition-colors"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/ashwinv07"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900/60 hover:border-[#00FF88] transition-colors"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            <a
              href="mailto:ashwinv7527@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900/60 hover:border-[#00FF88] transition-colors"
            >
              <Mail className="h-5 w-5 text-white" />
            </a>
          </div>

          {/* Tech Stack */}
          <div className="pt-5 sm:pt-8">
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

            {/* Card gradient glow — SVG filter2: rounded rect filled with green→teal/20% gradient, blur=32px */}
            <div className="absolute -inset-10 rounded-3xl bg-gradient-to-br from-[#00FF88]/20 to-[#00FFFF]/20 blur-[32px]" />

            {/* Image card */}
            <div className="relative z-10 rounded-3xl bg-white p-4
              shadow-[0_0_60px_rgba(0,0,0,0.6)]">

              {/* Floating code icon — SVG filter3: green glow shadow, blur=15, rgba(0,255,136,0.5) */}
              <div className="absolute -top-6 -right-3 z-20 flex h-[66px] w-[66px]
                items-center justify-center rounded-2xl
                bg-[#00FF88] text-black font-bold text-sm
                shadow-[0_0_15px_rgba(0,255,136,0.5)]">
                &lt;/&gt;
              </div>

              {/* Floating palette icon — SVG filter4: teal glow shadow, blur=15, rgba(0,255,255,0.5) */}
              <div className="absolute -bottom-5 -left-5 z-20 flex h-[66px] w-[66px]
                items-center justify-center rounded-2xl
                bg-[#00FFCE] text-black text-xl
                shadow-[0_0_15px_rgba(0,255,255,0.5)]">
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

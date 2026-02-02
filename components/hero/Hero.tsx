import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background flex items-center p-5">
      
      {/* Background glow */}
<div className="absolute inset-0 -z-10 overflow-hidden">
  {/* Green glow */}
  <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-green-400/20 blur-[140px]" />

  {/* Cyan glow */}
  <div className="absolute right-[-200px] top-1/3 h-[600px] w-[600px] rounded-full bg-cyan-400/20 blur-[160px]" />
</div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 py-20">
        {/* LEFT */}
        <div className="space-y-6">
          {/* Availability */}
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
            </span>
            Available for work
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Ashwin V
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground">
            Full Stack Web Developer
          </p>

          <p className="max-w-xl text-muted-foreground">
            I craft beautiful, functional web experiences that solve real
            problems using modern web technologies.
          </p>

          {/* CTA */}
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="bg-green-400 text-black hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] transition-all" >Hire Me</Button>
            <Button size="lg" variant="outline"     className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white transition-all">
              View Projects
            </Button>
          </div>

          {/* Tech Stack (TEMP STATIC — DB LATER) */}
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
                  className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm"
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
  {/* 👇 ANCHOR CONTAINER — THIS IS THE ONE YOU ASKED ABOUT */}
  <div className="relative w-[420px] h-[420px]">

    {/* Background glow */}
    <div className="absolute inset-0 -z-20">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-[#00FF88]/20 blur-[180px]" />
    </div>

    {/* Image card (icons live INSIDE this) */}
    <div className="relative rounded-3xl bg-white p-4
      shadow-[0_0_60px_rgba(0,0,0,0.6)]">

      {/* Floating code icon */}
      <div className="absolute -top-4 -right-4 z-20 flex h-14 w-14
        items-center justify-center rounded-2xl
        bg-[#00FF88] text-black
        shadow-[0_0_35px_rgba(0,255,136,0.7)]">
        &lt;/&gt;
      </div>

      {/* Floating palette icon */}
      <div className="absolute -bottom-5 -left-5 z-20 flex h-14 w-14
        items-center justify-center rounded-2xl
        bg-[#00FFFF] text-black
        shadow-[0_0_35px_rgba(0,255,255,0.7)]">
        🎨
      </div>

      {/* Image */}
      <img
        src="/hero.png"
        alt="Code Preview"
        className="rounded-2xl object-cover w-full h-full"
      />
    </div>

  </div> {/* 👈 CLOSES: relative w-[420px] h-[420px] */}
</div>


      </div>
    </section>
  )
}

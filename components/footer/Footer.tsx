import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-800 bg-black">
      <div className="container mx-auto px-4">
        {/* Top */}
        <div className="py-12 space-y-6">
          <h4 className="text-xl font-semibold text-white">
            Ashwin V
          </h4>

          <div className="max-w-md text-muted-foreground">
            <p>
              Creating beautiful, functional web experiences that make a
              difference.
            </p>
            <p>
              Let’s build something amazing together.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 hover:border-green-400 transition-colors"
            >
              <Github className="h-5 w-5 text-white" />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 hover:border-green-400 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>

            <a
              href="mailto:your@email.com"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 hover:border-green-400 transition-colors"
            >
              <Mail className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 py-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            © 2026 Ashwin V. All rights reserved.
          </p>
          <p>
            Made with Next.js, TypeScript & PostgreSQL
          </p>
        </div>
      </div>
    </footer>
  )
}

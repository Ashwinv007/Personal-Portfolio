import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-800 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top */}
        <div className="py-12 grid sm:grid-cols-2 gap-8 sm:gap-12">
          {/* Left */}
          <div className="space-y-6">
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
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 hover:border-[#00FF88] transition-colors"
              >
                <Github className="h-5 w-5 text-white" />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 hover:border-[#00FF88] transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>

              <a
                href="mailto:your@email.com"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 hover:border-[#00FF88] transition-colors"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Right — Quick Links */}
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/#about" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-[#00FF88] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
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

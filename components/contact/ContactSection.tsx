import { createMessage } from "@/use-cases/create-message"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  return (
  <section id="contact" className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <p className="text-center text-sm tracking-widest text-[#00FF88] mb-2">
          CONTACT
        </p>
<div className="mx-auto mb-6 h-[2px] w-12 bg-[#00FF88]" />

        <h2 className="text-center text-4xl font-medium leading-tight mb-16">
  Get In <span className="text-[#00FF88]">Touch</span>
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left info */}
<div className="space-y-6 text-neutral-400">
            <h3 className="text-2xl font-medium text-white">
              Let's Work Together
            </h3>

            <p>
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Feel free to reach
              out through the contact form or connect with me directly.
            </p>

            <div className="space-y-4">
  {[
    { label: "Email", value: "ashwinv7527@gmail.com", icon: Mail },
    { label: "Phone", value: "+91 8078514587", icon: Phone },
    { label: "Location", value: "Trivandrum, Kerala, India", icon: MapPin },
  ].map((item) => (
    <div
      key={item.label}
      className="
        flex items-center gap-4
        rounded-xl
        border border-neutral-800
        bg-neutral-900/60
        px-4 py-3 sm:px-5 sm:py-4
      "
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00FF88]/20 text-[#00FF88]">
        <item.icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs text-neutral-500">
          {item.label}
        </p>
        <p className="text-sm text-white">
          {item.value}
        </p>
      </div>
    </div>
  ))}
</div>

          </div>

          {/* Form */}
          <form
            action={createMessage}
            className="space-y-5
    rounded-2xl
    border border-neutral-800
    bg-neutral-900/70
    backdrop-blur
    p-5 sm:p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Send Me a Message</h3>

            <div className="space-y-1">
              <label className="text-sm text-neutral-400">Your Name</label>
              <Input
                name="name"
                placeholder="Your Name"
                required
                className="bg-neutral-800/60 border-neutral-700 focus:border-[#00FF88]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-neutral-400">Email Address</label>
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="bg-neutral-800/60 border-neutral-700 focus:border-[#00FF88]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-neutral-400">Your Message</label>
              <Textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="bg-neutral-800/60 border-neutral-700 focus:border-[#00FF88]"
              />
            </div>

            <Button type="submit" className="w-full gap-2
    bg-[#00FF88]
    text-black
    hover:shadow-[0_0_40px_rgba(0,255,136,0.5)]
    transition-all">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

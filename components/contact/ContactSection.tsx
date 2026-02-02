import { createMessage } from "@/use-cases/create-message"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
  <section className="relative py-28 p-8">
      <div className="container mx-auto">
        <p className="text-center text-sm tracking-widest text-green-400 mb-2">
          CONTACT
        </p>
<div className="mx-auto mb-6 h-[2px] w-12 bg-green-400" />

        <h2 className="text-center text-4xl font-medium mb-16">
  Get In <span className="text-green-400">Touch</span>
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left info */}
<div className="space-y-6 text-neutral-400">
            <h3 className="text-2xl font-medium text-white">
              Let’s Work Together
            </h3>

            <p>
              I’m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
  {[
    { label: "Email", value: "ashwinv7527@gmail.com" },
    { label: "Phone", value: "+91 8078514587" },
    { label: "Location", value: "Trivandrum, Kerala, India" },
  ].map((item) => (
    <div
      key={item.label}
      className="
        flex items-center gap-4
        rounded-xl
        border border-neutral-800
        bg-neutral-900/60
        px-5 py-4
      "
    >
      <div className="h-10 w-10 rounded-lg bg-green-400/20" />
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
    p-8"
          >
            <Input
              name="name"
              placeholder="Your Name"
              required
              className="bg-neutral-800/60 border-neutral-700 focus:border-green-400"

            />

            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="bg-neutral-800/60 border-neutral-700 focus:border-green-400"

            />

            <Textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              required
              className="bg-neutral-800/60 border-neutral-700 focus:border-green-400"

            />

            <Button type="submit" className="w-full
    bg-green-400
    text-black
    hover:shadow-[0_0_40px_rgba(0,255,136,0.5)]
    transition-all">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

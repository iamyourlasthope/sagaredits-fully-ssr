import { Mail, Instagram, Youtube, Linkedin } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center py-3 sm:py-16 px-4 sm:px-10 md:px-0 pb-2 sm:pb-16 overflow-hidden bg-gradient-to-br from-[#0a232e] to-[#08222b]" id="contact">
      <div className="absolute inset-0 bg-[#0a223a] -z-10" />
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center relative z-10 md:px-0 md:mx-auto">
        {/* Heading and Subtitle */}
        <h2 className="text-xl sm:text-5xl font-extrabold mb-1 text-center tracking-tight whitespace-nowrap mt-2 sm:mt-0">
          <span className="text-white">Let&apos;s </span>
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-base sm:text-lg text-blue-300 mb-4 max-w-2xl text-center font-medium">
          Reach out for collaborations, business inquiries, or just to say hi!
        </p>
        {/* Two-column layout */}
        <div className="w-full flex flex-col-reverse md:flex-row gap-3 sm:gap-10 md:gap-8 items-start justify-center">
          {/* Left: Contact Form */}
          <div className="flex-1 w-full max-w-lg">
            <h3 className="text-base sm:text-2xl font-extrabold mb-4 sm:mb-6 text-white text-center sm:text-left">
              Send Me a Message
            </h3>
            <ContactForm />
          </div>
          {/* Right: Get in touch and social links */}
          <div className="flex-1 w-full flex flex-col gap-1 md:gap-2 mt-8 sm:mt-12 md:mt-0 max-w-lg">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3 sm:mb-4 text-center sm:text-left">
                Get in Touch
              </h3>
              <a
                href="mailto:contactsagaredits@gmail.com"
                className="w-full bg-white/5 border border-blue-900/30 rounded-2xl px-4 py-2.5 flex items-center gap-4 mb-6 shadow-sm hover:bg-blue-900/20 transition-colors"
                aria-label="Email contactsagaredits@gmail.com"
              >
                <Mail className="w-7 h-7 text-blue-400" />
                <div>
                  <div className="text-sm text-white mb-1">Email</div>
                  <div className="text-blue-200 text-sm">contactsagaredits@gmail.com</div>
                </div>
              </a>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3 sm:mb-4 text-center sm:text-left">
                Follow Me
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://instagram.com/sagar.edits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/5 border border-blue-900/30 rounded-2xl px-4 py-2.5 flex items-center gap-4 shadow-sm hover:bg-blue-900/20 transition-colors"
                  aria-label="Instagram @sagar.edits"
                >
                  <Instagram className="w-7 h-7 text-blue-400" />
                  <div>
                    <div className="text-sm text-white mb-1">Instagram</div>
                    <div className="text-blue-200 text-sm">@sagar.edits</div>
                  </div>
                </a>
                <a
                  href="https://youtube.com/SagarEditsofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/5 border border-blue-900/30 rounded-2xl px-4 py-2.5 flex items-center gap-4 shadow-sm hover:bg-blue-900/20 transition-colors"
                  aria-label="YouTube SagarEditsofficial"
                >
                  <Youtube className="w-7 h-7 text-blue-400" />
                  <div>
                    <div className="text-sm text-white mb-1">YouTube</div>
                    <div className="text-blue-200 text-sm">SagarEditsofficial</div>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/sagarsingh12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/5 border border-blue-900/30 rounded-2xl px-4 py-2.5 flex items-center gap-4 shadow-sm hover:bg-blue-900/20 transition-colors"
                  aria-label="LinkedIn sagarsingh12"
                >
                  <Linkedin className="w-7 h-7 text-blue-400" />
                  <div>
                    <div className="text-sm text-white mb-1">LinkedIn</div>
                    <div className="text-blue-200 text-sm">sagarsingh12</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Notification (bottom right) */}
    </section>
  );
} 
export const metadata = {
  title: "Contact Sagar Edits",
  description: "Get in touch with Sagar Edits, Meme Marketer & Digital Creator for collaborations and inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-primary text-text p-4">
      <div className="w-full max-w-lg bg-white/80 dark:bg-[#101828]/90 rounded-3xl shadow-2xl p-8 sm:p-10 border border-blue-100/40 dark:border-blue-900/40 transition-all duration-300">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-blue-600 dark:text-blue-400 tracking-tight text-center">Contact Me</h1>
        <form className="space-y-6" autoComplete="off">
          <div>
            <label className="block font-semibold mb-1 text-blue-900 dark:text-blue-100" htmlFor="name">Name <span className="text-red-500">*</span></label>
            <input type="text" id="name" name="name" required placeholder="Your full name" className="w-full px-4 py-2 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-blue-950/60 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm" />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-blue-900 dark:text-blue-100" htmlFor="email">Email <span className="text-red-500">*</span></label>
            <input type="email" id="email" name="email" required placeholder="your@email.com" className="w-full px-4 py-2 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-blue-950/60 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm" />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-blue-900 dark:text-blue-100" htmlFor="message">Message <span className="text-red-500">*</span></label>
            <textarea id="message" name="message" required placeholder="Type your message here..." className="w-full px-4 py-2 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-blue-950/60 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm min-h-[100px]" />
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
} 
"use client";
import { useRef, useEffect, useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status && status.type === 'success' && notificationRef.current) {
      notificationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await emailjs.send(
        'service_vs8acf1',
        'template_p2m3w3q',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'AzPSYZyGpuQPCEpjd'
      );
      setStatus({ type: 'success', message: "Message sent! I’ll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({ type: 'error', message: "Error sending message. Please try again or contact me directly." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="flex flex-col gap-4 sm:gap-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-transparent border border-blue-900/40 text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-transparent border border-blue-900/40 text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-transparent border border-blue-900/40 text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base min-h-[80px] sm:min-h-[120px]"
          required
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-2 sm:py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 mt-1 sm:mt-2"
          disabled={loading}
        >
          <Send className="w-5 h-5" /> {loading ? "Sending..." : "Send Message"}
        </button>
        {status && status.type === 'error' && (
          <div className="mt-2 text-center font-semibold text-red-400">{status.message}</div>
        )}
      </form>
      {status && status.type === 'success' && (
        <div ref={notificationRef} className="mt-3 mx-auto rounded px-2 py-2 font-semibold shadow border flex flex-row items-center gap-2 transition-all duration-300 bg-[#101a2b] text-blue-100 border-blue-700" style={{width: 'fit-content', minWidth: 0}}>
          <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4 -4" /><circle cx="12" cy="12" r="10" /></svg>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold">Message sent successfully!</span>
            <span className="text-sm font-normal text-blue-200">Thank you for reaching out. I’ll get back to you as soon as possible.</span>
          </div>
        </div>
      )}
    </>
  );
} 
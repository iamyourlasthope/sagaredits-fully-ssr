"use client";

import { TrendingUp, Users, Target, ChevronDown, Clock, ArrowLeft, XCircle } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

interface CampaignFormProps {
  onSuccess?: () => void;
}

export default function CampaignForm({ onSuccess }: CampaignFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    campaignType: "",
    description: "",
    platform: ""
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status && notificationRef.current) {
      // Scroll to the notification if it's not in view
      notificationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        'template_axt6eki',
        {
          user_name: formData.name,
          user_email: formData.email,
          company_name: formData.company,
          campaign_type: formData.campaignType,
          campaign_description: formData.description,
          platform: formData.platform
        },
        'AzPSYZyGpuQPCEpjd'
      );
      setStatus({ type: 'success', message: "Campaign request sent! I’ll get back to you within 24 hours to discuss your campaign." });
      setFormData({ name: "", email: "", company: "", campaignType: "", description: "", platform: "" });
      if (onSuccess) onSuccess();
    } catch {
      setStatus({ type: 'error', message: "Error sending request. Please try again or contact me directly." });
    } finally {
      setLoading(false);
    }
  };

  // Go back handler with fallback (integrated from GoBackButton)
  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="relative w-full max-w-3xl bg-white/90 dark:bg-[#101828]/95 rounded-3xl shadow-2xl p-8 sm:p-12 transition-all duration-300 overflow-visible">
      {/* Cross icon button with go back logic */}
      <div className="group absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
        <button
          type="button"
          aria-label="Go back"
          onClick={handleGoBack}
          className="text-3xl text-gray-400 bg-[#101828]/80 rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center hover:text-red-400 transition-colors"
        >
          &times;
        </button>
      </div>
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 text-blue-600 dark:text-blue-400 tracking-tight">Start Your Campaign</h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-blue-100 font-medium max-w-md mx-auto">Ready to grow your brand? Fill out the form below, and let&apos;s create something amazing together!</p>
      </div>
      {/* Icon cards row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div
          className={`flex flex-col items-center p-4 text-center rounded-2xl border min-h-[110px] min-w-0 cursor-pointer transition-all duration-200 ${formData.campaignType === "Video Editing" ? "border-blue-500 bg-blue-100/20 shadow-lg" : "border-blue-900/30 bg-[#101828]"}`}
          onClick={() => setFormData(prev => ({ ...prev, campaignType: "Video Editing" }))}
        >
          <TrendingUp className="w-7 h-7 text-blue-500 mb-2" />
          <div className="font-bold text-white text-base mb-1">Video Editing</div>
          <div className="text-blue-200 text-xs">Professional video services</div>
        </div>
        <div
          className={`flex flex-col items-center p-4 text-center rounded-2xl border min-h-[110px] min-w-0 cursor-pointer transition-all duration-200 ${formData.campaignType === "Brand Collaboration" ? "border-blue-500 bg-blue-100/20 shadow-lg" : "border-blue-900/30 bg-[#101828]"}`}
          onClick={() => setFormData(prev => ({ ...prev, campaignType: "Brand Collaboration" }))}
        >
          <Users className="w-7 h-7 text-blue-500 mb-2" />
          <div className="font-bold text-white text-base mb-1">Brand Collaboration</div>
          <div className="text-blue-200 text-xs">Sponsored content</div>
        </div>
        <div
          className={`flex flex-col items-center p-4 text-center rounded-2xl border min-h-[110px] min-w-0 cursor-pointer transition-all duration-200 ${formData.campaignType === "Product Promotion" ? "border-blue-500 bg-blue-100/20 shadow-lg" : "border-blue-900/30 bg-[#101828]"}`}
          onClick={() => setFormData(prev => ({ ...prev, campaignType: "Product Promotion" }))}
        >
          <Target className="w-7 h-7 text-blue-500 mb-2" />
          <div className="font-bold text-white text-base mb-1">Product Promotion</div>
          <div className="text-blue-200 text-xs">Targeted campaigns</div>
        </div>
        <div
          className={`flex flex-col items-center p-4 text-center rounded-2xl border min-h-[110px] min-w-0 cursor-pointer transition-all duration-200 ${formData.campaignType === "Other" ? "border-blue-500 bg-blue-100/20 shadow-lg" : "border-blue-900/30 bg-[#101828]"}`}
          onClick={() => setFormData(prev => ({ ...prev, campaignType: "Other" }))}
        >
          <TrendingUp className="w-7 h-7 text-blue-500 mb-2" />
          <div className="font-bold text-white text-base mb-1">Other</div>
          <div className="text-blue-200 text-xs">Custom campaign type</div>
        </div>
      </div>
      <form className="space-y-7" autoComplete="off" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-2 text-blue-900 dark:text-blue-100" htmlFor="name">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your full name"
              className="w-full px-5 py-3 rounded-xl border-[1.5px] border-[#ccc] dark:border-white/20 bg-white/70 dark:bg-blue-950/40 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm text-base hover:border-blue-300 focus:shadow-lg"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-blue-900 dark:text-blue-100" htmlFor="email">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your@email.com"
              autoComplete="email"
              className="w-full px-5 py-3 rounded-xl border-[1.5px] border-[#ccc] dark:border-white/20 bg-white/70 dark:bg-blue-950/40 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm text-base hover:border-blue-300 focus:shadow-lg"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative">
            <label className="block font-semibold mb-2 text-blue-900 dark:text-blue-100" htmlFor="platform">Platform <span className="text-red-500">*</span></label>
            <div className="relative">
              <select
                id="platform"
                name="platform"
                required
                className="w-full px-5 py-3 pr-10 rounded-xl border-[1.5px] border-[#ccc] dark:border-white/20 bg-white/70 dark:bg-blue-950/40 text-black dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm text-base cursor-pointer hover:border-blue-300 focus:shadow-lg"
                value={formData.platform}
                onChange={handleChange}
              >
                <option value="" disabled hidden>Select platform</option>
                <option value="Instagram">Instagram</option>
                <option value="YouTube">YouTube</option>
                <option value="Facebook">Facebook</option>
                <option value="Other">Other</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-2 text-blue-900 dark:text-blue-100" htmlFor="company">Company/Brand</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Your company name"
              className="w-full px-5 py-3 rounded-xl border-[1.5px] border-[#ccc] dark:border-white/20 bg-white/70 dark:bg-blue-950/40 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm text-base hover:border-blue-300 focus:shadow-lg"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-2 text-blue-900 dark:text-blue-100" htmlFor="campaignType">Campaign Type <span className="text-red-500">*</span></label>
          <div className="relative">
            <select
              id="campaignType"
              name="campaignType"
              required
              className="w-full px-5 py-3 pr-10 rounded-xl border-[1.5px] border-[#ccc] dark:border-white/20 bg-white/70 dark:bg-blue-950/40 text-black dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm text-base cursor-pointer hover:border-blue-300 focus:shadow-lg"
              value={formData.campaignType}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Select campaign type</option>
              <option value="Brand Collaboration">Brand Collaboration</option>
              <option value="Product Promotion">Product Promotion</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Other">Other</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-2 text-blue-900 dark:text-blue-100" htmlFor="description">Campaign Description <span className="text-red-500">*</span></label>
          <textarea
            id="description"
            name="description"
            required
            placeholder="Tell me about your campaign goals, target audience, and any specific requirements."
            className="w-full px-5 py-3 rounded-xl border-[1.5px] border-[#ccc] dark:border-white/20 bg-white/70 dark:bg-blue-950/40 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm min-h-[120px] text-base hover:border-blue-300 focus:shadow-lg"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit Your Request"}
        </button>
        {status && (
          <div
            ref={notificationRef}
            className={`mt-6 mx-auto max-w-md rounded-xl px-4 py-2 text-center font-semibold shadow border flex items-center gap-2 justify-center transition-all duration-300
              text-sm sm:text-base
              ${status.type === 'success'
                ? 'bg-[#101a2b] text-blue-100 border-blue-700'
                : 'bg-gradient-to-r from-red-400/90 to-pink-400/90 text-white border-red-300/60'}
            `}
            style={{ letterSpacing: '0.01em' }}
          >
            {status.type === 'success' ? (
              <Clock className="w-6 h-6 text-blue-200/70 drop-shadow-sm" style={{ background: 'transparent' }} />
            ) : (
              <XCircle className="w-6 h-6 text-red-100 drop-shadow-sm" style={{ background: 'linear-gradient(90deg, #f87171 0%, #f472b6 100%)', borderRadius: '50%' }} />
            )}
            {status.message}
          </div>
        )}
      </form>
      <div className="flex justify-center mt-6">
        <button
          type="button"
          onClick={handleGoBack}
          className="text-2xl text-gray-400 bg-[#131d35] border border-[#ccc] dark:border-white/20 rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
} 
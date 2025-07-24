export default function PopupCampaignButton() {
  return (
    <>
      {/* Hidden checkbox for modal toggle */}
      <input type="checkbox" id="popup-campaign-toggle" className="peer/popup hidden" />
      {/* Trigger button */}
      <label
        htmlFor="popup-campaign-toggle"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 cursor-pointer"
        tabIndex={0}
      >
        Start Your Campaign
      </label>
      {/* Modal overlay and content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none peer-checked/popup:opacity-100 peer-checked/popup:pointer-events-auto transition-all duration-300">
        <div className="bg-white dark:bg-[#101828] rounded-2xl shadow-2xl p-8 w-full max-w-lg relative animate-fade-in">
          {/* Close button */}
          <label
            htmlFor="popup-campaign-toggle"
            className="absolute top-4 right-4 text-gray-400 hover:text-blue-500 text-2xl font-bold focus:outline-none cursor-pointer"
            aria-label="Close"
            tabIndex={0}
          >
            &times;
          </label>
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 text-center">Start Your Campaign</h2>
          <form className="space-y-5" autoComplete="off">
            <div>
              <label className="block font-semibold mb-1 text-blue-900 dark:text-blue-100" htmlFor="name">Name <span className="text-red-500">*</span></label>
              <input type="text" id="name" name="name" required placeholder="Your full name" className="w-full px-4 py-2 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-blue-950/60 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm" disabled />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-blue-900 dark:text-blue-100" htmlFor="email">Email <span className="text-red-500">*</span></label>
              <input type="email" id="email" name="email" required placeholder="your@email.com" className="w-full px-4 py-2 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-blue-950/60 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm" disabled />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-blue-900 dark:text-blue-100" htmlFor="platform">Platform <span className="text-red-500">*</span></label>
              <select id="platform" name="platform" required className="w-full px-4 py-2 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-blue-950/60 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm" disabled>
                <option value="">Select platform</option>
                <option value="Instagram">Instagram</option>
                <option value="YouTube">YouTube</option>
                <option value="Twitter">Twitter</option>
                <option value="Facebook">Facebook</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-blue-900 dark:text-blue-100" htmlFor="company">Company/Brand</label>
              <input type="text" id="company" name="company" placeholder="Your company name" className="w-full px-4 py-2 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-blue-950/60 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm" disabled />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-blue-900 dark:text-blue-100" htmlFor="campaignType">Campaign Type <span className="text-red-500">*</span></label>
              <select id="campaignType" name="campaignType" required className="w-full px-4 py-2 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-blue-950/60 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm" disabled>
                <option value="">Select campaign type</option>
                <option value="Brand Awareness">Brand Awareness</option>
                <option value="Product Launch">Product Launch</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-blue-900 dark:text-blue-100" htmlFor="description">Campaign Description <span className="text-red-500">*</span></label>
              <textarea id="description" name="description" required placeholder="Tell me about your campaign goals, target audience, and any specific requirements..." className="w-full px-4 py-2 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-blue-950/60 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 shadow-sm min-h-[100px]" disabled />
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" disabled>
              Submit Your Request
            </button>
          </form>
        </div>
      </div>
    </>
  );
} 
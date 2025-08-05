import AboutSection from "../components/sections/AboutSection";

export const metadata = {
  title: "About Sagar Edits – Viral Content Creator & Video Editor",
  description: "Learn about Sagar Singh, the viral content creator and video editor behind Sagar Edits. Discover his journey in digital content creation.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-[#0a232e] to-[#08222b]">
      {/* Blurred gradient overlay */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-blue-900 opacity-80 backdrop-blur-xl" aria-hidden="true" />
      {/* Page content */}
      <div className="relative z-10 w-full flex flex-col pt-15">
        <AboutSection />
      </div>
    </div>
  );
} 
import ArticlesSection from "../components/sections/ArticlesSection";

export const metadata = {
  title: "Articles & Blog – Sagar Edits",
  description: "Read insightful articles about content creation, video editing, and social media strategy from Sagar Edits.",
};

export default function ArticlesPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-[#0a232e] to-[#08222b]">
      {/* Blurred gradient overlay */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-blue-900 opacity-80 backdrop-blur-xl" aria-hidden="true" />
      {/* Page content */}
      <div className="relative z-10 w-full flex flex-col pt-15">
        <ArticlesSection />
      </div>
    </div>
  );
} 
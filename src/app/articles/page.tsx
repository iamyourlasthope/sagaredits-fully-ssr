import { articles } from "../components/sections/ArticlesSection";
import Link from "next/link";
import thumbnailData from "../../data/thumbnails.json";

export const metadata = {
  title: "Articles & Blog – Sagar Edits",
  description: "Read insightful articles about content creation, video editing, and social media strategy from Sagar Edits.",
};

export default function ArticlesPage() {
  // merge thumbnails for grid
  const articlesWithThumbnails = articles.map((article, index) => {
    const thumbnailInfo = (thumbnailData as { index: number; url: string; success: boolean }[]).find((t) => t.index === index);
    return {
      ...article,
      thumbnail: thumbnailInfo?.success ? thumbnailInfo.url : undefined,
    };
  });

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-[#0a232e] to-[#08222b]">
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-blue-900 opacity-80 backdrop-blur-xl" aria-hidden="true" />
      <div className="relative z-10 w-full flex flex-col pt-15">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight text-center text-white">Articles & Features</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-300 mb-10 max-w-3xl text-center font-medium mx-auto">
            Browse all the features, mentions, and articles about our viral content and projects.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesWithThumbnails.map((article, idx) => (
              <Link key={idx} href={`/articles/${idx}`} className="group rounded-2xl overflow-hidden border border-blue-900/40 bg-[#101828] hover:border-blue-600/60 transition-colors">
                <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-600">
                  {article.thumbnail && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={article.thumbnail} alt={article.title} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors">{article.title}</h3>
                  <p className="text-white/70 text-sm mt-2">{article.description}</p>
                  <span className="mt-4 inline-flex text-blue-400 text-sm">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// Define the structure for article data
interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  thumbnail?: string;
}

// Mock articles data - replace with your actual data source
const articles: Article[] = [
  {
    slug: 'meme-marketing-strategy',
    title: 'The Ultimate Guide to Meme Marketing',
    description: 'Learn how to leverage memes for effective digital marketing campaigns.',
    content: `
      <h2>Introduction to Meme Marketing</h2>
      <p>Meme marketing has become one of the most effective ways to connect with audiences in the digital age. This comprehensive guide will show you how to create viral content that resonates with your target audience.</p>
      
      <h2>Why Memes Work</h2>
      <p>Memes work because they create an instant connection with your audience. They're relatable, shareable, and memorable.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Know your audience</li>
        <li>Stay current with trends</li>
        <li>Keep it authentic</li>
        <li>Time your posts strategically</li>
      </ul>
    `,
    date: '2024-01-15',
    author: 'Sagar Edits',
    thumbnail: '/images/thumbnails/article-1.webp'
  },
  {
    slug: 'viral-content-creation',
    title: 'How to Create Viral Content That Gets Shared',
    description: 'Discover the secrets behind creating content that spreads like wildfire across social media.',
    content: `
      <h2>Understanding Viral Content</h2>
      <p>Viral content doesn't happen by accident. There are specific elements that make content shareable and engaging.</p>
      
      <h2>Key Elements of Viral Content</h2>
      <ul>
        <li>Emotional connection</li>
        <li>Timing and relevance</li>
        <li>Visual appeal</li>
        <li>Easy to understand and share</li>
      </ul>
    `,
    date: '2024-01-10',
    author: 'Sagar Edits',
    thumbnail: '/images/thumbnails/article-2.webp'
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | Sagar Edits',
      description: 'The requested article could not be found.'
    };
  }

  return {
    title: `${article.title} | Sagar Edits`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: article.thumbnail ? [article.thumbnail] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: article.thumbnail ? [article.thumbnail] : [],
    }
  };
}

// Generate static params for static generation
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Main page component
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-blue-200 mb-6">
            {article.description}
          </p>
          <div className="flex items-center gap-4 text-blue-300">
            <span>By {article.author}</span>
            <span>•</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        {/* Article Thumbnail */}
        {article.thumbnail && (
          <div className="mb-8">
            <Image
              src={article.thumbnail}
              alt={article.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <div
            className="text-white leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* Back to Articles */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to All Articles
          </Link>
        </div>
      </div>
    </main>
  );
}

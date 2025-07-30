"use client";

import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface Article {
  title: string;
  description: string;
  url: string;
  source: string;
  thumbnail?: string;
}

interface ArticlesCarouselProps {
  articles: Article[];
}

export default function ArticlesCarousel({ articles }: ArticlesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Calculate visible cards count based on screen size
  const calculateVisibleCards = () => {
    if (typeof window === 'undefined') return 3;
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) return 2; // Mobile: show 2 cards max
    if (screenWidth < 1024) return 3; // Tablet: show 3 cards max
    return 4; // Desktop: show 4 cards max
  };

  // Update visible cards count on window resize
  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCardsCount(calculateVisibleCards());
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const totalDots = Math.max(1, articles.length - visibleCardsCount + 1);
  const maxIndex = Math.max(0, articles.length - visibleCardsCount);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 300 + 32; // card width + gap
      const scrollPosition = index * cardWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const scrollNext = () => {
    const nextIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(nextIndex);
  };

  const scrollPrev = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(prevIndex);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      scrollToIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex, articles.length]);

  // Update current index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const cardWidth = 300 + 32;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(Math.max(0, Math.min(newIndex, maxIndex)));
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [maxIndex]);

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div ref={carouselRef} className="articles-carousel">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            {/* Article Image */}
            {article.thumbnail ? (
              <Image
                src={article.thumbnail}
                alt={article.title}
                width={300}
                height={200}
                className="w-full h-auto"
              />
            ) : (
              <div className="w-full h-[200px] bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Article {index + 1}</span>
              </div>
            )}

            {/* Article Meta Information */}
            <div className="article-meta">
              <h3 className="article-title">
                {article.title}
              </h3>
              <p className="article-desc">
                {article.description}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="article-link"
              >
                <ExternalLink className="w-4 h-4" />
                Read Full Article
              </a>
            </div>

            {/* Source Badge */}
            <div className="article-source">
              {article.source}
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="carousel-controls">
        <button
          onClick={scrollPrev}
          disabled={currentIndex === 0}
          className="carousel-btn"
          aria-label="Previous article"
          title="Previous article"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        {/* Carousel Navigation Dots */}
        <div className="carousel-nav" role="tablist" aria-label="Article navigation">
          {Array.from({ length: totalDots }, (_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to article group ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
              title={`Article group ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={scrollNext}
          disabled={currentIndex >= maxIndex}
          className="carousel-btn"
          aria-label="Next article"
          title="Next article"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
} 
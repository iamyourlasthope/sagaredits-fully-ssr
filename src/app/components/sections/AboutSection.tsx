import Image from "next/image";
import { CheckCircle } from "lucide-react";

const skills = [
  "Video Editing (Adobe Premiere Pro, After Effects)",
  "Meme Marketing",
  "Brand Integration with Humor", 
  "Trend Research & Business Insights",
  "Social Media Marketing"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-12 xl:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10" role="region" aria-labelledby="about-heading">
      <div className="container mx-auto">
        <header className="text-center mb-6 sm:mb-12 lg:mb-16">
          <h2 id="about-heading" className="text-xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-2 whitespace-nowrap mt-4 sm:mt-0">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="max-w-4xl mx-auto px-2 sm:px-0">
            <h2 className="text-base sm:text-lg lg:text-xl text-blue-200 leading-relaxed">
              Experienced digital content creator with over <span className="text-blue-400 font-semibold">5 years of expertise</span> in video editing and social media management. Successfully grew Instagram and YouTube to <span className="text-blue-400 font-semibold">100K+ each</span>, and collaborated on promo campaigns for <span className="text-blue-400 font-semibold">Amazon Prime, Mini TV</span>, and more.
            </h2>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-10 lg:gap-12 items-center">
          {/* Animated Image - Mobile First */}
          <div className="flex justify-center order-1">
            <div className="relative">
              <Image
                src="/images/about.webp"
                alt="Sagar Singh - Digital Content Creator artwork representing creative skills and expertise"
                className="rounded-xl shadow-lg animate-bounce-smooth relative z-10 object-contain"
                width={320}
                height={320}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                style={{ transform: 'rotate(3deg)' }}
              />
            </div>
          </div>

          {/* Skills - Mobile Optimized */}
          <div className="space-y-3 sm:space-y-8 order-2 lg:order-2 px-2 sm:px-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">Skills & Expertise</h2>
            <ul className="space-y-3 sm:space-y-4" role="list">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start space-x-3 touch-manipulation">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <h3 className="text-sm sm:text-base lg:text-lg leading-relaxed">{skill}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

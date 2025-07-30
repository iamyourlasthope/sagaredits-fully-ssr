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
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10" role="region" aria-labelledby="about-heading">
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
                style={{ transform: 'rotate(3deg)' }}
              />
              {/* Modern floating elements - Responsive */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-blue-500/70 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 lg:-bottom-4 lg:-left-4 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-blue-400 rounded-full animate-pulse delay-1000 shadow-lg"></div>
              <div className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 bg-blue-500/50 rounded-full animate-pulse delay-500 shadow-lg"></div>
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

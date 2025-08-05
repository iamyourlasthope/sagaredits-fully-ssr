import Image from "next/image";
import { CheckCircle } from "lucide-react";

const skills = [
  "Video Editing (Adobe Premiere Pro, After Effects)",
  "Meme Marketing & Relatable Content",
  "Brand Integration with Humor",
  "Trend Research & Viral Strategy",
  "Social Media Growth (Instagram, YouTube)",
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-8 sm:py-12 md:py-16 lg:py-12 xl:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10"
      role="region"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto">
        <header className="text-center mb-6 sm:mb-12 lg:mb-16">
          <h2
            id="about-heading"
            className="text-xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-2 whitespace-nowrap mt-4 sm:mt-0"
          >
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="max-w-4xl mx-auto px-2 sm:px-0">
            {/* Intro: text left, profile image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <p className="text-base sm:text-lg lg:text-xl text-blue-200 leading-relaxed">
                I’m <span className="text-blue-400 font-semibold">Sagar Singh</span> — a viral content creator, expert video editor, and social media strategist behind the brand{" "}
                <span className="text-blue-400 font-semibold">Sagar Edits</span>. With over{" "}
                <span className="text-blue-400 font-semibold">5 years of experience</span>, I’ve built a community of{" "}
                <span className="text-blue-400 font-semibold">100K+ followers</span> on both Instagram and YouTube, and
                worked on brand campaigns for{" "}
                <span className="text-blue-400 font-semibold">Amazon Prime Video, Mini TV</span>, and more. I help brands
                grow organically with humorous, relatable, and viral content that captures attention and drives
                engagement.
              </p>

              <div className="flex justify-center">
                <Image
                  src="/images/Sagar_Singh.webp"
                  alt="Sagar Singh - Profile Image"
                  className="rounded-xl shadow-lg object-cover"
                  width={320}
                  height={320}
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        {/* Skills & Silver Play Button */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-10 lg:gap-12 items-center">
          {/* Silver Play Button on the left */}
          <div className="flex justify-center order-1">
            <div className="text-center">
              <Image
                src="/images/Silver_Play_Button.webp"
                alt="YouTube Silver Play Button Award"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="sr-only">YouTube Silver Creator Award – 100K+ Subscribers</p>
            </div>
          </div>

          {/* Skills list on the right */}
          <div className="space-y-3 sm:space-y-8 order-2 px-2 sm:px-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">Skills & Expertise</h2>
            <ul className="space-y-3 sm:space-y-4" role="list">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start space-x-3">
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

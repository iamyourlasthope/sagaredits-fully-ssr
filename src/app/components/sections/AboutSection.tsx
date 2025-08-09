import Image from "next/image";
import { CheckCircle } from "lucide-react";

const skills = [
  "Video Editing (Adobe Premiere Pro, After Effects)",
  "Meme Marketing & Relatable Content",
  "Brand Integration with Humor",
  "Trend Research & Viral Strategy",
  "Social Media Growth (Instagram, YouTube)",
];

interface TimelineItem {
  title: string;
  description: string;
  year: string;
  url?: string;
}

const timelineMilestones: TimelineItem[] = [
  {
    title: "2019 – 2021 • The warm-up round 🎯",
    description:
      "Launched my first page AlwaysLikeSagar. What started as just posting for fun blew up into a 20K+ community. This was my training ground — learning how to make content people actually stop and watch.",
    year: "2019–2021",
  },
  {
    title: "2021 • Go Time 🚀",
    description:
      "Enter Sagar Edits — my official Instagram and YouTube. Still a full-time Computer Engineering student, but now editing between lectures, shooting between assignments, and chasing deadlines both in class and on camera.",
    year: "2021",
  },
  {
    title: "August 2021 • 10K on Instagram",
    description:
      "First month in — 10K Instagram followers. I was doing transitions in my hostel room and editing on a laptop that definitely needed an upgrade.",
    year: "Aug 2021",
  },
  {
    title: "September 18, 2022 • First big brand deal",
    description:
      "Amazon Mini TV. Still remember the exact date. Still remember the excitement.",
    year: "Sep 18, 2022",
    url: "https://www.instagram.com/p/CipXndPp7mf/",
  },
  {
    title: "2022 • YouTube Breakthrough 📈",
    description:
      "Crossed 10K subscribers. Might sound small, but to me, it was the green light — keep going, you’re onto something.",
    year: "2022",
  },
  {
    title: "2024 • The Graduation Glow-up 🎓",
    description:
      "Finally became a Computer Engineering graduate — while growing my audience and shooting campaigns on the side. My tech brain now fuels my creative hustle.",
    year: "2024",
  },
  {
    title: "2025 • The Big Win 🏆",
    description:
      "The numbers turned into milestones — 100K+ followers on Instagram and YouTube. June 11, 2025 — unboxed my YouTube Silver Play Button. That plaque isn’t just an award… it’s proof that late-night edits, zero sleep, and pure passion pay off.",
    year: "2025",
  },
  {
    title: "And This is Just the Beginning…",
    description: "📽 Picture abhi baaki hai mere dost.",
    year: "",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-8 sm:py-12 md:py-16 lg:py-12 xl:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 overflow-hidden"
      role="region"
      aria-labelledby="about-heading"
    >
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hidden sm:block absolute -top-16 -right-10 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />
        <div className="hidden sm:block absolute bottom-0 -left-10 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto">
        <header className="text-center mb-6 sm:mb-12 lg:mb-16">
          <h2
            id="about-heading"
            className="text-xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-6 sm:mb-8 mt-4 sm:mt-0"
          >
            Who <span className="text-blue-500">Am I?</span>
          </h2>
          <div className="max-w-4xl mx-auto px-2 sm:px-0">
            {/* Intro: text left, profile image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-base sm:text-lg lg:text-xl text-blue-200 leading-relaxed text-left">
                  I’m <span className="text-blue-400 font-semibold">Sagar Singh</span> — a viral content creator, expert video editor, and social media strategist behind
                  <span className="text-blue-400 font-semibold"> Sagar Edits</span>. With over <span className="text-blue-400 font-semibold">5 years of experience</span>, I’ve built a community of
                  <span className="text-blue-400 font-semibold"> 100K+ followers</span> on Instagram and YouTube, and worked on brand campaigns for
                  <span className="text-blue-400 font-semibold"> Amazon Prime Video, Mini TV</span>, and more. I help brands grow organically with humorous, relatable, and
                  viral content that captures attention and drives engagement.
                </p>
              </div>

              <div className="flex justify-center order-1 lg:order-2">
                <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105">
                  <Image
                    src="/images/Sagar_Singh.webp"
                    alt="Sagar Singh - Profile Image"
                    className="object-cover"
                    width={320}
                    height={320}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Quick Stats */}
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-2 sm:gap-6 mb-8 sm:mb-12">
          <div className="rounded-2xl bg-[#101828] border border-blue-900/40 px-2 py-3 sm:p-5 text-center transition-transform duration-200 hover:-translate-y-0.5">
            <div className="text-lg sm:text-3xl font-extrabold text-white leading-none">5+ yrs</div>
            <div className="text-blue-300 mt-1 text-[10px] sm:text-sm leading-none">Experience</div>
          </div>
          <div className="rounded-2xl bg-[#101828] border border-blue-900/40 px-2 py-3 sm:p-5 text-center transition-transform duration-200 hover:-translate-y-0.5">
            <div className="text-lg sm:text-3xl font-extrabold text-white leading-none">100K+</div>
            <div className="text-blue-300 mt-1 text-[10px] sm:text-sm leading-none">Followers</div>
          </div>
          <div className="rounded-2xl bg-[#101828] border border-blue-900/40 px-2 py-3 sm:p-5 text-center transition-transform duration-200 hover:-translate-y-0.5">
            <div className="text-lg sm:text-3xl font-extrabold text-white leading-none">Creator Award</div>
            <div className="text-blue-300 mt-1 text-[10px] sm:text-sm leading-none">YouTube Silver</div>
          </div>
        </div>

        {/* Skills & Silver Play Button in a box */}
        <div className="relative bg-gradient-to-br from-[#0a1a2f] to-[#0a1622] border border-blue-400/30 rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-blue-400/20 px-6 py-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Skills & Creator Award</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-10 lg:gap-12 items-center p-6 sm:p-8">
            {/* Silver Play Button on the left */}
            <div className="flex justify-center order-1">
              <div className="text-center md:text-left md:pl-6 lg:pl-8">
                <Image
                  src="/images/Silver_Play_Button.webp"
                  alt="YouTube Silver Play Button Award"
                  width={320}
                  height={240}
                  className="rounded-lg shadow-md"
                />
                <p className="sr-only">YouTube Silver Creator Award – 100K+ Subscribers</p>
              </div>
            </div>

            {/* Skills list on the right */}
            <div className="order-2 px-2 sm:px-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-[#0d1b2a] px-4 py-2 text-sm text-blue-100 hover:border-blue-400/70 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-400" aria-hidden="true" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-10 sm:mt-14 lg:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">The Sagar Edits Journey – Side Hustle to 100K 🎬✨</h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-blue-900/40" />
            <ul className="space-y-6 sm:space-y-8 relative">
              {timelineMilestones.map((item, idx) => (
                <li key={idx} className="relative pl-10 sm:pl-12">
                  <span className="absolute left-2.5 sm:left-3 top-1 w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow" />
                  <div className="rounded-2xl border border-blue-900/40 bg-[#101828] p-4 sm:p-5 transition-transform duration-200 hover:-translate-y-0.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold text-base sm:text-lg">{item.title}</h3>
                      <span className="text-blue-300 text-xs sm:text-sm">{item.year}</span>
                    </div>
                    <p className="text-white/70 text-sm sm:text-base mt-1">{item.description}</p>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Watch it here 📹
                      </a>
                    )}
                  </div>
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

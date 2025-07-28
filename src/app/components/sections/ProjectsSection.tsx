import { Instagram } from "lucide-react";

const projects = [
  {
    title: "Samsung Z Fold 6 Promo",
    embed: "https://www.instagram.com/p/C_ncuShy80p/embed/",
    description: "Creative meme content showcasing Samsung&apos;s latest foldable technology with viral appeal.",
    platform: "Instagram",
    type: "Brand Collaboration",
    link: "https://www.instagram.com/p/C_ncuShy80p/",
  },
  {
    title: "Hip Hop India on Amazon Mini TV",
    embed: "https://www.instagram.com/p/CvhADjnMVmZ/embed/",
    description: "Promotional content for Hip Hop India series on Amazon Mini TV platform.",
    platform: "Instagram",
    type: "Entertainment Marketing",
    link: "https://www.instagram.com/p/CvhADjnMVmZ/",
  },
  {
    title: "XYXX Underwear Promo",
    embed: "https://www.instagram.com/p/C8l4BZ-SqAu/embed/",
    description: "Featuring KL Rahul in humorous brand promotion for XYXX underwear leveraging meme culture.",
    platform: "Instagram",
    type: "Fashion Marketing",
    link: "https://www.instagram.com/p/C8l4BZ-SqAu/",
  },
  {
    title: "Leaked on Amazon Mini TV",
    embed: "https://www.instagram.com/p/Cww-tOHyYQl/embed/",
    description: "Promotional content for &apos;Leaked&apos; series on Amazon Mini TV platform.",
    platform: "Instagram",
    type: "Series Launch",
    link: "https://www.instagram.com/p/Cww-tOHyYQl/",
  },
  {
    title: "Kisi ka Bhai Kisi ki Jaan Promo",
    embed: "https://www.instagram.com/p/Crn9A3LOM7X/embed/",
    description: "Promotional content for the Bollywood movie featuring Salman Khan.",
    platform: "Instagram",
    type: "Entertainment",
    link: "https://www.instagram.com/p/Crn9A3LOM7X/",
  },
  {
    title: "Hip Hop Promo on Amazon Mini TV",
    embed: "https://www.instagram.com/p/CwnNDY0yaPv/embed/",
    description: "Follow-up promotional campaign for Hip Hop content on Amazon Mini TV.",
    platform: "Instagram",
    type: "Series Promotion",
    link: "https://www.instagram.com/p/CwnNDY0yaPv/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center py-6 sm:py-18 lg:py-18 px-10 sm:px-10 md:px-0 pb-6 sm:pb-16 overflow-hidden bg-gradient-to-br from-[#0a1a2f] to-[#0a1622] scroll-mt-20 sm:scroll-mt-0" id="projects">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-blue-900 opacity-90 -z-10" />
      <div className="absolute inset-0 pointer-events-none -z-10" style={{background: "radial-gradient(ellipse at top right, #3b82f6 0%, transparent 70%)"}} />
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center relative z-10">
        <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-center whitespace-nowrap mt-4 sm:mt-0">
          My Previous <span className="text-blue-500">Work</span>
        </h1>
        <h2 className="text-base sm:text-base md:text-xl text-blue-300 mb-12 max-w-3xl text-center font-medium">
          From viral memes to brand campaigns, here&apos;s how I&apos;ve helped brands connect with millions of users.
        </h2>
        {/* Pure CSS Show More Projects Toggle */}
        <input type="checkbox" id="show-more-projects" className="peer hidden" />
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {projects.slice(0, 3).map((project, idx) => (
            <div key={idx} className="bg-[#101828] rounded-2xl shadow-2xl p-6 flex flex-col h-full border border-blue-900/40">
              <div className="w-full aspect-[9/12] rounded-xl overflow-hidden mb-4 flex items-center justify-center bg-black">
                <iframe
                  src={project.embed}
                  width="100%"
                  height="420"
                  frameBorder="0"
                  scrolling="no"
                  className="w-full h-full rounded-xl"
                  title={project.title}
                  loading="lazy"
                  allow="autoplay; encrypted-media"
                />
              </div>
              <div className="w-full flex flex-col gap-2 flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-white/80 text-base mb-2">{project.description}</p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-white/70 mb-2 mt-2">
                  <div><span className="font-semibold text-white">Platform:</span> <span className="text-blue-400">{project.platform}</span></div>
                  <div><span className="font-semibold text-white">Type:</span> <span className="font-bold">{project.type}</span></div>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold text-center shadow flex items-center gap-2 justify-center transition-all">
                  <Instagram className="w-4 h-4" /> View on Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Hidden projects, shown when checkbox is checked */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-h-0 overflow-hidden opacity-0 transition-all duration-300 peer-checked:max-h-[4000px] peer-checked:opacity-100">
          {projects.slice(3, 6).map((project, idx) => (
            <div key={idx + 3} className="bg-[#101828] rounded-2xl shadow-2xl p-6 flex flex-col h-full border border-blue-900/40">
              <div className="w-full aspect-[9/12] rounded-xl overflow-hidden mb-4 flex items-center justify-center bg-black">
                <iframe
                  src={project.embed}
                  width="100%"
                  height="420"
                  frameBorder="0"
                  scrolling="no"
                  className="w-full h-full rounded-xl"
                  title={project.title}
                  loading="lazy"
                  allow="autoplay; encrypted-media"
                />
              </div>
              <div className="w-full flex flex-col gap-2 flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-white/80 text-base mb-2">{project.description}</p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-white/70 mb-2 mt-2">
                  <div><span className="font-semibold text-white">Platform:</span> <span className="text-blue-400">{project.platform}</span></div>
                  <div><span className="font-semibold text-white">Type:</span> <span className="font-bold">{project.type}</span></div>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold text-center shadow flex items-center gap-2 justify-center transition-all">
                  <Instagram className="w-4 h-4" /> View on Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Show More/Less Button as a sibling of the input */}
        <label
          htmlFor="show-more-projects"
          className="block mt-8 mx-auto cursor-pointer select-none px-4 py-2 sm:px-8 sm:py-3 rounded-full bg-blue-600 text-white font-semibold text-base sm:text-lg shadow transition-all duration-200 hover:bg-blue-700 active:bg-blue-800 text-center peer-checked:hidden"
          style={{ maxWidth: 300 }}
        >
          Show more projects
        </label>
        {/* Show less button, only visible when extra projects are shown */}
        <label
          htmlFor="show-more-projects"
          className="hidden peer-checked:block mt-8 mx-auto cursor-pointer select-none px-4 py-2 sm:px-8 sm:py-3 rounded-full bg-blue-600 text-white font-semibold text-base sm:text-lg shadow transition-all duration-200 hover:bg-blue-700 active:bg-blue-800 text-center"
          style={{ maxWidth: 300 }}
        >
          Show less
        </label>
      </div>
    </section>
  );
} 
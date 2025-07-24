import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

interface Project {
  title: string;
  postId: string;
  description: string;
  platform: string;
  type: string;
}

interface PortfolioSectionProps {
  showAll?: boolean; // set via SSR logic
}

const projects: Project[] = [
  {
    title: "Samsung Z Fold 6 Promo",
    postId: "C_ncuShy80p",
    description: "Creative meme content showcasing Samsung's latest foldable technology with viral appeal.",
    platform: "Instagram",
    type: "Brand Collaboration"
  },
  {
    title: "Hip Hop India on Amazon Mini TV",
    postId: "CvhADjnMVmZ",
    description: "Promotional content for Hip Hop India series on Amazon Mini TV platform.",
    platform: "Instagram", 
    type: "Entertainment Marketing"
  },
  {
    title: "XYXX Underwear Promo", 
    postId: "C8l4BZ-SqAu",
    description: "Humorous brand promotion for XYXX underwear leveraging meme culture.",
    platform: "Instagram",
    type: "Fashion Marketing"
  },
  {
    title: "Leaked on Amazon Mini TV",
    postId: "Cww-tOHyYQl", 
    description: "Promotional content for 'Leaked' series on Amazon Mini TV platform.",
    platform: "Instagram",
    type: "Series Launch"
  },
  {
    title: "Kisi ka Bhai Kisi ki Jaan Promo",
    postId: "Crn9A3LOM7X",
    description: "Promotional content for the Bollywood movie featuring Salman Khan.",
    platform: "Instagram",
    type: "Entertainment"
  },
  {
    title: "Hip Hop Promo on Amazon Mini TV",
    postId: "CwnNDY0yaPv",
    description: "Follow-up promotional campaign for Hip Hop content on Amazon Mini TV.",
    platform: "Instagram",
    type: "Series Promotion"
  }
];

const PortfolioSection = ({ showAll = false }: PortfolioSectionProps) => {
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-24 px-1 sm:px-6 lg:px-8 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Featured <span className="hero-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            From viral memes to brand campaigns, here&apos;s how I&apos;ve helped brands connect with millions of users.
          </p>
        </div>

        <div className={`grid gap-6 sm:grid-cols-2 xl:grid-cols-3`}>
          {displayedProjects.map((project, index) => (
            <div key={index} className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-6 flex flex-col hover:border-accent/30 transition-all shadow-lg">
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-muted/20 aspect-[4/5]">
                <iframe
                  src={`https://www.instagram.com/p/${project.postId}/embed/`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  title={project.title}
                  loading="lazy"
                  allow="autoplay; encrypted-media"
                  className="rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-accent/20 backdrop-blur-sm rounded-full p-3 border border-accent/30">
                  <Instagram className="w-5 h-5 text-accent" />
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                </div>

                <div className="border-t border-accent/20 pt-4 text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platform:</span>
                    <span className="text-accent font-semibold">{project.platform}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="text-foreground font-semibold">{project.type}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => window.open(`https://www.instagram.com/p/${project.postId}/`, '_blank')}
                  className="w-full mt-4 border-2 border-accent/50 text-accent hover:bg-accent hover:text-white rounded-xl"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on Instagram
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

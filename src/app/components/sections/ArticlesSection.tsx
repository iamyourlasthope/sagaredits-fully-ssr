import thumbnailData from "../../../data/thumbnails.json";
import ArticlesCarousel from "./ArticlesCarousel";
import Link from "next/link";

interface Article {
  title: string;
  description: string;
  url: string;
  source: string;
  thumbnail?: string;
}

export const articles: Article[] = [
  {
    title: "Hera Pheri's Dramatic Raju on Indian Idol Mashup Goes Viral - Netizens Say 'Neha Kakkar Be Like Chaalis Laat'",
    description: "A hilarious mashup combining Hera Pheri's iconic scene with Indian Idol has become the latest viral sensation.",
    url: "https://www.koimoi.com/bollywood-news/hera-pheris-dramatic-raju-on-indian-idol-mashup-goes-viral-netizens-say-neha-kakkar-be-like-chaalis-laat/",
    source: "Koimoi"
  },
  {
    title: "Madhuri Dixit and Aishwarya Rai Bachchan Dance on Megan Thee Stallion's 'Mamushi' - Internet is Loving the Viral Video",
    description: "A viral video featuring Bollywood stars dancing to Megan Thee Stallion's hit song has taken the internet by storm.",
    url: "https://www.thedailyjagran.com/viral/madhuri-dixit-and-aishwarya-rai-bachchan-dance-on-megan-thee-stallion-mamushi-internet-is-loving-the-viral-video-10175679",
    source: "The Daily Jagran"
  },
  {
    title: "Must Watch: Nine Cover Versions of Qala's 'Ghodey Pe Sawaar' Trending on Instagram",
    description: "Multiple artists are putting their own spin on this haunting melody, creating a wave of creative covers.",
    url: "https://www.telegraphindia.com/amp/my-kolkata/lifestyle/must-watch-nine-cover-versions-of-qalas-ghodey-pe-sawaar-trending-on-instagram/cid/1911294",
    source: "The Telegraph"
  },
  {
    title: "Taarak Mehta's Jethalal Grooving on 'Chhamiya' Item Song is the Trend We Didn't See Coming",
    description: "Dilip Joshi's iconic character dancing to a popular item song has created an unexpected viral moment.",
    url: "https://www.koimoi.com/television/taarak-mehta-ka-ooltah-chashmahs-jethalal-dilip-joshi-bapuji-amit-bhatt-grooving-on-chhamiya-item-song-is-the-trend-we-didnt-see-coming/amp/",
    source: "Koimoi"
  },
  {
    title: "Jethalal Goes 'I Love You O Meri Rani' for Babita Ji in This Hilarious Mashup",
    description: "A creative mashup featuring Taarak Mehta's beloved characters in a romantic musical moment.",
    url: "https://www.koimoi.com/television/taarak-mehta-ka-ooltah-chashmah-dilip-joshis-jethalal-goes-i-love-you-o-meri-rani-for-munmun-duttas-babita-ji-in-this-mashup-its-hilarious-af/amp/",
    source: "Koimoi"
  },
  {
    title: "Ashneer Grover Slamming Allu Arjun's Pushpa in Shark Tank India is the Most Hilarious Thing You'll See Today",
    description: "The Shark Tank judge's unexpected commentary on the South Indian blockbuster has everyone laughing.",
    url: "https://www.koimoi.com/south-indian-cinema/ashneer-grover-slamming-allu-arjuns-pushpa-in-shark-tank-india-as-he-sells-his-business-is-the-most-hilarious-thing-youll-see-today/",
    source: "Koimoi"
  },
  {
    title: "Pushpa 2 in Parallel Universe Shows PM Modi in Full Power - 'Modi Hai Toh Mumkin Hai'",
    description: "A creative reimagining of the Pushpa sequel featuring India's Prime Minister has gone viral.",
    url: "https://www.koimoi.com/south-indian-cinema/pushpa-2-in-parallel-universe-shows-prime-minister-narendra-modi-in-full-power-marking-the-end-of-allu-arjun-netizens-react-modi-hai-toh-mumkin-hai/",
    source: "Koimoi"
  }
];

// Merge articles with thumbnail data
const articlesWithThumbnails = articles.map((article, index) => {
  const thumbnailInfo = thumbnailData.find(t => t.index === index);
  return {
    ...article,
    thumbnail: thumbnailInfo?.success ? thumbnailInfo.url : undefined
  };
});

export default function ArticlesSection() {
  return (
    <section
      id="articles"
      className="section-articles w-full py-8 sm:py-12 md:py-16 lg:py-12 xl:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden"
      role="region"
      aria-label="Latest Articles on Our Work"
      style={{
        background: "radial-gradient(ellipse at 60% 40%, #0a0a0a 60%, #0a1a2f 100%)",
        backgroundColor: "#050a15"
      }}
    >
      <div className="container mx-auto max-w-7xl w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-tight text-center whitespace-nowrap mt-2 sm:mt-0 text-white">
            We&apos;re Making <span className="text-blue-400">Headlines</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-300 max-w-3xl mx-auto">
            Discover how our viral content is making waves across the internet and being featured in major publications
          </p>
        </div>

        {/* Container Box for Articles */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Main Container Box */}
          <div className="relative bg-gradient-to-br from-[#0a1a2f] to-[#0a1622] border border-blue-400/30 rounded-3xl shadow-2xl overflow-hidden">
            {/* Box Header */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-blue-400/20 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Latest Articles & Features
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
            
            {/* Carousel Container with Padding */}
            <div className="px-0 py-6 sm:py-8">
              <ArticlesCarousel articles={articlesWithThumbnails} />
              <div className="mt-6 flex justify-center">
                <Link href="/articles" className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                  View all articles
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
} 
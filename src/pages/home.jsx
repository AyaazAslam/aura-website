import HomeHero from "./HomeHero";
import HomeBrandSpotlight from "./HomeBrandSpotlight";
import HomeFashion from "./HomeFashion";
import HomeBeauty from "./HomeBeauty";
import HomeInandOut from "./HomeInandOut";
import HomeEdito from "./HomeEdito";
import HomeLatestGrid from "./HomeLatestGrid";
import HomeNewsLetter from "./HomeNewsLetter";

/**
 * Home page section order.
 * EDITO is intentionally first: it is the editor’s “message of the week”
 * and must be the first thing readers see on the main page.
 * All other sections keep their original relative flow (Hero → Spotlight →
 * Fashion → Beauty → In & Out → Latest → Newsletter). Article routes are untouched.
 */
const Home = () => {
  return (
    <main className="overflow-hidden">
      {/* Editor’s letter — always first on the main page */}
      <HomeEdito />
      <HomeHero />
      <HomeBrandSpotlight />
      <HomeFashion />
      <HomeBeauty />
      {/* In & Out kept as-is — already in resonance with the brand */}
      <HomeInandOut />
      <HomeLatestGrid />
      <HomeNewsLetter />
    </main>
  );
};

export default Home;

import HomeHero from "./HomeHero";
import HomeBrandSpotlight from "./HomeBrandSpotlight";
import HomeBeauty from "./HomeBeauty";
import HomeInandOut from "./HomeInandOut";
import HomeLatestGrid from "./HomeLatestGrid";
import HomeNewsLetter from "./HomeNewsLetter";

/**
 * Full magazine home (`/`).
 * Edito and In & Out stay on their own menu tabs (`/edito`, `/in-out`).
 */
const Home = () => {
  return (
    <main className="overflow-hidden">
      <HomeHero />
      <HomeBrandSpotlight />
      <HomeBeauty />
      <HomeInandOut />
      <HomeLatestGrid />
      <HomeNewsLetter />
    </main>
  );
};

export default Home;

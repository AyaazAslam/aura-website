import HomeHero from "./HomeHero";
import HomeBrandSpotlight from "./HomeBrandSpotlight";
import HomeBeauty from "./HomeBeauty";
import HomeInandOut from "./HomeInandOut";
import HomeLatestGrid from "./HomeLatestGrid";
import HomeNewsLetter from "./HomeNewsLetter";

/**
 * Home page section order.
 * Fashion section removed — not needed for this client build.
 * EDITO lives on `/edito` via the main menu.
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

import HomeHero from "./HomeHero";
import HomeBrandSpotlight from "./HomeBrandSpotlight";
import HomeFashion from "./HomeFashion";
import HomeBeauty from "./HomeBeauty";
import HomeInandOut from "./HomeInandOut";
import HomeEdito from "./HomeEdito";
import HomeLatestGrid from "./HomeLatestGrid";
import HomeNewsLetter from "./HomeNewsLetter";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <HomeHero />
      <HomeBrandSpotlight />
      <HomeFashion />
      <HomeBeauty />
      <HomeInandOut />
      <HomeEdito />
      <HomeLatestGrid />
      <HomeNewsLetter />
    </main>
  );
};

export default Home;

import Hero from "./sections/Hero";
import Initiatives from "./sections/Initiatives";
import Gallery from "./sections/Gallery";
import Team from "./sections/Team";

import TeamContextProvider from "/src/contexts/TeamContext";

function Home() {
  return (
    <>
      <Hero />
      <Initiatives />
      <Gallery />
      <TeamContextProvider>
        <Team />
      </TeamContextProvider>
    </>
  );
}

export default Home;

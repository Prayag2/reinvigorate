import Wrapper from "/src/components/Wrapper";
import Button from "/src/components/Button";

function Hero() {
  return (
    <main
      id="hero"
      className="scroll-mt-[10vh] w-full h-[90vh] bg-secondary relative"
    >
      <img
        className="w-full h-full object-cover z-0"
        src="/images/hero.jpg"
        alt=""
      />
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-gradientStart to-gradientEnd z-1"></div>
      <Wrapper className="text-center md:text-left absolute top-1/2 px-4 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center space-y-2 flex-col md:flex-row md:space-x-3 md:space-y-0 font-display text-background text-5xl md:text-6xl mb-2">
          <p>Aid</p>
          <span className="hidden md:inline">&bull;</span>
          <p className="text-accent">Heal</p>
          <span className="hidden md:inline">&bull;</span>
          <p>Empower</p>
        </div>
        <h2 className="text-lg md:w-[60%] md:text-lg lg:text-xl text-background w-full mb-8">
          Join us in on our mission to make the world a more just, equitable,
          and sustainable place
        </h2>
        <div className="flex gap-2 flex-wrap justify-center items-center md:justify-start">
          <Button to="/volunteer" text="Volunteer" />
          <Button text="Donate Now" secondary />
        </div>
      </Wrapper>
    </main>
  );
}

export default Hero;

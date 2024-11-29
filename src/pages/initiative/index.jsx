import Title from "/src/components/Title";
import Wrapper from "/src/components/Wrapper";
import Carousel from "/src/components/Carousel";
import { useEffect } from "react";

function Initiative({ initiative }) {
  initiative.timeline.sort((a, b) => {
    console.log(a.date, b.date);
    if (a.date == "") return -1;
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);
    return dateB < dateA ? -1 : 1;
  });

  return (
    <>
      <Carousel className="w-full h-[80vh]" images={initiative.images} />
      <Wrapper className="text-center py-10">
        <div className="p-5 bg-secondary mb-8">
          <p className="font-quote text-lg mx-auto w-4/5 md:w-1/2 mb-3">
            "{initiative.quote.quote}"
          </p>
          <p className="opacity-70">- {initiative.quote.author}</p>
        </div>
        <Title className="mb-8" text={initiative.name} fancy />
        {initiative.body.map((sec) => (
          <>
            {sec.title ? <Title className="mb-4" text={sec.title} /> : null}
            {sec.text.split("\n").map((txt) => (
              <p className="text-lg">{txt}</p>
            ))}
            {sec.links
              ? sec.links.map((link) => (
                  <a
                    target="_blank"
                    className="text-primary underline"
                    href={link}
                  >
                    {link}
                  </a>
                ))
              : null}
            <br className="mb-8" />
          </>
        ))}
        <Title className="mb-8" text="Our Work" fancy />
        <div className="w-full relative text-left pl-14">
          <span className="absolute top-0 left-3 h-full w-1 bg-primary rounded-full"></span>
          {initiative.timeline.map((event, i) => (
            <div className="mb-6" key={i}>
              <h2 className="font-display text-3xl text-primary relative">
                <span className="absolute rounded-full border-4 border-background top-0 left-[-3.5rem] w-7 aspect-square bg-primary"></span>
                {event.name}
              </h2>
              {/* {event.date ? (
                <h3 className="mb-2 font-display opacity-60 text-lg">
                  {event.date}
                </h3>
              ) : null} */}
              {event.desc
                ? event.desc
                    .split("\n")
                    .map((dsc) => (
                      <p className="text-text leading-relaxed">
                        {dsc || <br />}
                      </p>
                    ))
                : null}
              {event.links ? (
                <>
                  <p className="font-display text-lg opacity-70">
                    Checkout These Links
                  </p>
                  {event.links.map((link) => (
                    <a
                      target="_blank"
                      className="block text-primary underline"
                      href={link}
                    >
                      {link}
                    </a>
                  ))}
                </>
              ) : null}
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default Initiative;

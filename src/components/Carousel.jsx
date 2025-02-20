import { useState, useEffect, useRef } from "react";

function Carousel({ images, className }) {
  let [curIndex, setCurIndex] = useState(0);
  const delay = 10000;

  function nextImage() {
    setCurIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setCurIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  useEffect(() => {
    const imageWrapper = document.querySelector("#imageWrapper");
    const imageElements = imageWrapper.children;
    for (let i = 0; i < imageElements.length; i++) {
      imageElements[i].style.transform = `translateX(${(i - curIndex) * 100}%)`;
    }
  }, [curIndex]);

  useEffect(() => {
    setInterval(nextImage, delay);

    return clearInterval(nextImage);
  }, []);

  return (
    <div className={`w-full h-[30rem] overflow-hidden relative ${className}`}>
      <div className="bg-secondary w-full h-full" id="imageWrapper">
        {images.map((image, i) => (
          <img
            key={i}
            className="transition-[transform] duration-500 w-full h-full object-cover absolute top-0"
            src={image}
          />
        ))}
      </div>

      <div className="absolute hidden md:flex gap-2 bottom-5 left-1/2 translate-x-[-50%]">
        {images.map((img, i) => (
          <span
            key={i}
            onClick={() => setCurIndex(i)}
            className={`cursor-pointer w-3 aspect-square rounded-full bg-background ${
              i !== curIndex && "opacity-50"
            }`}
          ></span>
        ))}
      </div>

      {images.length > 1 ? (
        <>
          <button
            onClick={nextImage}
            className="p-2 rounded bg-secondary absolute right-5 top-1/2 translate-y-[-50%]"
          >
            <img className="w-6 h-6" alt="Next" src="/images/other/arrow.svg" />
          </button>
          <button
            onClick={prevImage}
            className="p-2 rounded bg-secondary absolute left-5 top-1/2 translate-y-[-50%]"
          >
            <img
              className="w-6 h-6 rotate-180"
              alt="Next"
              src="/images/other/arrow.svg"
            />
          </button>
        </>
      ) : null}
    </div>
  );
}

Carousel.defaultProps = {
  images: [],
  className: "",
};

export default Carousel;

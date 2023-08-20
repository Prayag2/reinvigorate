function Title({ text, fancy, className }) {
  return (
    <div
      className={`inline-block relative text-2xl lg:text-3xl font-bold font-display ${
        fancy ? "mt-4 mb-16" : ""
      } ${className}`}
    >
      {fancy && (
        <span className="z-[-1] w-[80%] h-full bg-accent absolute top-0 left-1/2 translate-x-[-50%] skew-y-[-5deg]"></span>
      )}
      <h1>{text}</h1>
    </div>
  );
}

Title.defaultProps = {
  text: "Title",
  fancy: false,
  className: "",
};

export default Title;

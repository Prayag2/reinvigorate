function Input({ name, type, placeholder, label, className, required }) {
  return (
    <div className={`flex flex-col text-left mb-3 ${className}`}>
      <label className="text-lg mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-6 py-2 bg-secondary rounded-md outline-none"
        required={required}
      />
    </div>
  );
}

Input.defaultProps = {
  name: "something",
  type: "text",
  placeholder: "Enter text here",
  label: "Something",
  required: false,
};

export default Input;

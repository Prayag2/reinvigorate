import React, { useState, useRef } from "react";

function MultiSelect({ label, choices, placeholder, name }) {
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const selectEl = useRef();

  function enableChoice(index) {
    selectEl.current[index].selected = true;
    setSelected([...selected, selectEl.current[index].value]);
  }
  function disableChoice(option) {
    selectEl.current[choices.indexOf(option)].selected = false;
    setSelected(selected.filter((item) => item !== option));
  }

  return (
    <div className="text-left">
      <select
        className="hidden"
        ref={selectEl}
        id={name}
        name={name}
        multiple
        required
      >
        {choices.map((choice, key) => (
          <option key={key} value={choice}>
            {choice}
          </option>
        ))}
      </select>
      <label className="text-lg mb-2 inline-block">{label}</label>
      <div
        onClick={() => setIsOpen((p) => !p)}
        className="mb-2 select-none cursor-pointer w-full px-4 py-2 bg-secondary text-left rounded-md relative"
      >
        <span className="absolute right-3 top-2">▼</span>
        <p>{placeholder}</p>
        <ul className={`mt-2 ${isOpen ? "" : "hidden"}`}>
          {choices.map((choice, key) => {
            if (!selected.includes(choice))
              return (
                <li
                  onClick={() => enableChoice(key)}
                  className="px-2 py-1 my-1 bg-secondary rounded hover:bg-primary"
                  key={`choice-${key}`}
                >
                  {choice}
                </li>
              );
          })}
        </ul>
      </div>
      {selected.map((option, key) => (
        <div
          key={`selected-${key}`}
          className="mb-2 relative px-4 py-2 bg-secondary rounded-md"
        >
          {option}
          <span
            onClick={() => disableChoice(option)}
            className="flex items-center justify-center absolute cursor-pointer right-2 top-1/2 translate-y-[-50%] w-5 h-5 rounded bg-accent text-background"
          >
            ⨯
          </span>
        </div>
      ))}
    </div>
  );
}

export default MultiSelect;

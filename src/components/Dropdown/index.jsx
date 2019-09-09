import React, { useState, useEffect } from "react";
import "./dropdown.scss";

const Dropdown = props => {
  const { values, inputName, label } = props;
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = index => {
    setValue(values[index]);

    setOpen(false);
  };

  const documentClick = e => {
    let el = document.getElementById(inputName);
    let target = e.target;
    if (el !== target && !el.contains(target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", documentClick);

    return () => {
      document.removeEventListener("click", documentClick);
    };
  });

  return (
    <div className="dropdown" id={inputName}>
      <div className="dropdown__input" onClick={() => setOpen(!open)}>
        {value ? (
          <span className="dropdown__selected">{value}</span>
        ) : (
          <span>{label}</span>
        )}
      </div>
      {open && (
        <ul className="dropdown__list">
          {values.map((val, index) => (
            <li className="dropdown__list-item" key={index}>
              <input
                type="radio"
                name={inputName}
                id={inputName + "-" + index}
                value={inputName + "-" + index}
                onChange={() => handleChange(index)}
              />
              <label htmlFor={inputName + "-" + index}>{val}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

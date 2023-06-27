import { useEffect, useState } from "react";
import dropdown from "../../assets/dropdownlogo.png";

const Dropdown = ({ placeholder, options }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeholder;
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };
  return (
    <div>
      <div
        onClick={handleInputClick}
        className="border border-black p-1 rounded flex justify-between"
      >
        <div>{getDisplay()}</div>
        <div>
          <img className="h-6" src={dropdown} alt="dropdownlogo" />
        </div>
      </div>
      {showMenu && (
        <div className="border border-black mt-2">
          {options.map((options) => (
            <div
              onClick={() => onItemClick(options)}
              className={`p-1 hover:bg-slate-200 cursor-pointer ${
                isSelected(options) && "selected"
              }`}
              key={options.value}
            >
              {options.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

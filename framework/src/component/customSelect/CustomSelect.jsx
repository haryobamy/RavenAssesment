import { useEffect, useState } from 'react';
import './customSelect.css';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

function CustomSelect({ options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(options?.[0]);

  useEffect(() => {
    setSelectedOption(options[0]);
  }, [options]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div className="custom-select__selected" onClick={handleToggle}>
        {selectedOption?.icon && (
          <span className="custom-select__icon">{selectedOption?.icon}</span>
        )}
        {selectedOption?.label}
        <span className="custom-select__arrow">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {isOpen && (
        <div className="custom-select__options">
          {options?.map((option) => (
            <div
              key={option.value}
              className="custom-select__option"
              onClick={() => handleSelect(option)}
            >
              {option?.icon && (
                <span className="custom-select__icon">{option.icon}</span>
              )}
              {option?.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      icon: PropTypes.element,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomSelect;

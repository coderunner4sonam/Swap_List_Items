import React, { useState } from "react";

const ButtonList = ({ LeftListButton, RightListButton }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const getButtonStyle = (button) => {
    if (hoveredButton === button) {
      return { ...buttonStyle, ...hoverStyle };
    }
    return buttonStyle;
  };

  return (
    <div style={{ margin: "20px" }}>
      <div>
        <button
          style={getButtonStyle("left")}
          onClick={LeftListButton}
          onMouseEnter={() => handleMouseEnter("left")}
          onMouseLeave={handleMouseLeave}
        >
          <span style={{ fontSize: "50px" }}>&gt;</span>
        </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button
          style={getButtonStyle("right")}
          onClick={RightListButton}
          onMouseEnter={() => handleMouseEnter("right")}
          onMouseLeave={handleMouseLeave}
        >
          <span style={{ fontSize: "50px" }}>&lt;</span>
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s', // Add a transition to smooth the hover effect
};

const hoverStyle = {
  backgroundColor: 'lightblue', // Change the background color on hover
};

export default ButtonList;

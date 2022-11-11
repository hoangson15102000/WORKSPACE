import React, { useState } from "react";
// import "./ColorBox.scss";

export default function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("bgColor") || "deeppink";
    return initColor;
  });
  const getRandomColor = () => {
    const arrayColor = [
      "deeppink",
      "green",
      "cyan",
      "violet",
      "gold",
      "black",
      "white",
      "gray",
    ];
    const randomIndex = Math.floor(Math.random() * arrayColor.length);
    return arrayColor[randomIndex];
  };
  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("bgColor", newColor);
  };
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color, height: 200, width: 220, borderRadius: 8, cursor: "pointer" }}
      onClick={handleBoxClick}
    ></div>
  );
}

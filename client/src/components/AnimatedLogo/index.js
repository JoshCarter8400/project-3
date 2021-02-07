import React from "react";
require('./animatedLogo.css');

function AnimatedLogo() {
  const width = 150;
  const icons = [
    'html',
    'css',
    'javascript',
    'jquery',
    'sass',
    'nodejs',
    'react',
    'redux',
    'mongodb',
    'express',
    'mysql',
    'php'
  ];

  const apothem = width / (2 * Math.tan(Math.PI / icons.length));
  const transformOrigin = { transformOrigin: `50% 50% ${-apothem}px` };

  return (
    <div style={{ marginTop: "1.5em" }}>
      <div className="carousel">
        <div className="inner-carousel" style={transformOrigin}>
          {icons.map((icon, index, arr) => {
            const deg = index * 360 / arr.length;
            return <img src={`/images/${icon}.svg`} key={index} alt="" style={{ transform: `rotateY(${deg}deg)`, ...transformOrigin }} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AnimatedLogo;

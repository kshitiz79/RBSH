// MultiColorMouseParallax.jsx
import React from "react";
import { MouseParallax } from "./MouseParallax";

const colorSchemes = [
  {
    name: "yellow",
    colors: [
      "bg-yellow-100",
      "bg-yellow-200",
      "bg-yellow-300",
      "bg-yellow-400",
      "bg-yellow-500",
    ],
  },
  {
    name: "orange",
    colors: [
      "bg-orange-100",
      "bg-orange-200",
      "bg-orange-300",
      "bg-orange-400",
      "bg-orange-500",
    ],
  },
  {
    name: "pink",
    colors: [
      "bg-pink-200",
      "bg-pink-300",
      "bg-pink-400",
      "bg-pink-500",
      "bg-pink-600",
    ],
  },
  {
    name: "red",
    colors: [
        
      "bg-red-100",
      "bg-red-200",
      "bg-red-300",
      "bg-red-400",
      "bg-red-500",
    ],
  },
  {
    name: "blue",
    colors: [
      "bg-blue-200",
      "bg-blue-300",
      "bg-blue-400",
      "bg-blue-500",
      "bg-blue-600",
    ],
  },
  {
    name: "green",
    colors: [
      "bg-green-200",
      "bg-green-300",
      "bg-green-400",
      "bg-green-500",
      "bg-green-600",
    ],
  },
];

export const MultiColorMouseParallax = ({ gradientName }) => {
  // If gradientName is provided, filter to that scheme; otherwise show all.
  const filteredSchemes = gradientName
    ? colorSchemes.filter((scheme) => scheme.name === gradientName)
    : colorSchemes;

  return (
    <div >
      {filteredSchemes.map((scheme) => (
        < >
         
          <MouseParallax colors={scheme.colors} />
        </>
      ))}
    </div>
  );
};

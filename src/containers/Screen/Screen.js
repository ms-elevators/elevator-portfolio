import React from "react";

import "./style.css";

const screenData = {
  1: {
    title: "first floor",
    description: "this is the description for the first floor",
    stack: ["react", "html5", "css3-alt"],
  },
  2: {
    title: "second floor",
    description: "this is the description for the second floor",
    stack: ["html5", "css3-alt", "js"],
  },
  3: {
    title: "third floor",
    description: "this is the description for the third floor",
    stack: ["react", "node-js", "css3-alt", "html5"],
  },
  4: {
    title: "fourth floor",
    description: "this is the description for the fourth floor",
    stack: ["react", "node-js", "css3-alt", "html5"],
  },
  5: {
    title: "fifth floor",
    description: "this is the description for the fifth floor",
    stack: ["react", "html5", "css3-alt"],
  },
  6: {
    title: "sixth floor",
    description: "this is the description for the sixth floor",
    stack: ["react", "html5", "css3-alt"],
  },
  7: {
    title: "Contact",
    description: "contact details",
    stack: [],
  },
};

export default function Screen({ hoverValue }) {
  const { title, description, stack } = screenData[hoverValue];

  const stacks = stack.map((s) => {
    const icon = `fab fa-${s}`;
    return <i key={s} className={icon}></i>;
  });
  return (
    <div className="screen">
      <h1 className="screen-title">{title}</h1>
      <p className="screen-desc">{description}</p>
      <div className="stack-list">{stacks}</div>
    </div>
  );
}

import React from "react";
import { useState, UseEffect } from "react";

const goto = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const Visibilty = () => {
  const minHeight = 250;
  const [visible, setvisible] = useState(false);
  const WindowHeight =
    document.body.scrollTo || document.documentElement.scrollTo;

  if (WindowHeight > minHeight) {
    setvisible(true);
  } else {
    setvisible(false);
  }
};

function GotoTop() {
  return (
    <div>
      {visible && (
        <div className="gotobutton">
          <i class="fa-solid fa-square-up">Up</i>
        </div>
      )}
    </div>
  );
}

export default GotoTop;

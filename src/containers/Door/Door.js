import React, { useEffect } from "react";

// import components

import DoorContent from "../../components/DoorContent";

// import css
import "./style.css";

export default function Door({ floor, isReady, initialOpen }) {
  // open door when mounted
  useEffect(() => {
    setTimeout(() => {
      initialOpen();
    }, 1500);
    return;
  }, []);

  return (
    <div className="Door">
      <DoorContent className="content" floor={floor} isReady={isReady} />
    </div>
  );
}

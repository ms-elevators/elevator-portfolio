import React from "react";

// import components

import DoorContent from "../../components/DoorContent";

// import css
import "./style.css";

export default function Door({ floor, isReady }) {
  return (
    <div className="Door">
      <DoorContent className="content" floor={floor} isReady={isReady} />
    </div>
  );
}

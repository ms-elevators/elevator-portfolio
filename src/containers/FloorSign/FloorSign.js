import React from "react";

export default function FloorSign({ floor }) {
  return (
    <div className="floor-sign">
      <p>Current Floor: {floor}</p>
    </div>
  );
}

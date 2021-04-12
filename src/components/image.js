import React from "react";
import { Link } from "../assets/icon/GotoIcon";

export default function Image({ image, link, photographer }) {
  return (
    <div className="image">
      <div className="image__overlay">
        <div className="link">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Link />
          </a>
        </div>
      </div>
      <div className="image__info">
        <img src={image} alt="" />
        <p className="photographer">{photographer}</p>
      </div>
    </div>
  );
}

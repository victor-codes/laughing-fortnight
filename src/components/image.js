import React from "react";
import { Link } from "../assets/icon/GotoIcon";

export default function Image() {
  return (
    <div className="image">
      <div className="image__overlay">
        <div className="link">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Link />
          </a>
        </div>
      </div>
      <div className="image__info">
        <img
          src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg"
          alt=""
        />
        <p className="photographer">Joey</p>
      </div>
    </div>
  );
}

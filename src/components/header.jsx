import React from "react";
import hero_section_girl from "../svg/hero_gif.gif"


export const Header = (props) => {
  return (
    <header id="header" class="hero">
      <div className="container">
        <div className="hero-div">
          <div className="hero-text">
            <h1>
              <div class="words">
                <span class="word">Seamless</span>
                <span class="word">QR Based</span>
                <span class="word">perfect</span>
              </div>
              <div>Visitor</div>
              <div>Management</div>
            </h1>
            <p>{props.data ? props.data.paragraph : "Loading"}</p>
          </div>
          <div className="hero_section_girl">
            <img src={hero_section_girl} height={450} className="" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

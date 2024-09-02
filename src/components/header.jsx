import React from "react";
import hero_section_girl from "../svg/hero_girl_gif.gif"


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
                <span class="word">perfect </span>
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

{/* <div className="container">
  <div className="row">
    <div className="col-md-8 col-md-offset-2 intro-text">
      <h1>
        {props.data ? props.data.title : "Loading"}
        <span></span>
      </h1>
      <p>{props.data ? props.data.paragraph : "Loading"}</p>
      <a
        href="#features"
        className="btn btn-custom btn-lg page-scroll"
      >
        Learn More
      </a>{" "}
    </div>
  </div>
</div> */}

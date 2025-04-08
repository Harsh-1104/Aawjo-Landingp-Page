import React from "react";
import visitor_svg from "../svg/About_boy.svg"

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <img src={visitor_svg} height={400} className="col-xs-12 col-md-6" alt="" />
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>At <b className="fw-bold text-primary">Aawjo</b>, we are innovators in the field of visitor management. Our mission is to revolutionize how businesses manage and track visitors with cutting-edge QR code technology. We believe that the visitor experience should be seamless, secure, and efficient, and we are committed to providing tools that make this possible.</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

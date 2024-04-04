import React from "react";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";

const Banner = ({ transferNativeToken }) => {
  return (
    <section
      id="home_section"
      className="section_banner.bg_black_dark"
      data-zindex="1"
      data-parallax="scroll"
      data-image-src="assets/images/banner_bg2.png"
    >
      <div className="banner_effect"></div>
      <div className="container">
        <div className="row align-item-center">
          <div className="col-lg-6 col-md-12 com-sm12 order-lg-first">
            <div className="banner_text_s2 text_md_center">
              <h1
                className="animation text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.1s"
              >
                <strong>Bitcoin</strong> is peer to peer innovative{" "}
                <strong>network</strong>
              </h1>
              <h5
                className="animation presale_txt text-white"
                data-animation="fadeInUp"
                data-animation-delay="1.1s"
              >
                Token Presale Is <mark className="gradient_box">Live</mark>
              </h5>
              <div
                className="btn_group pt-2 pb-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="1.4s"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

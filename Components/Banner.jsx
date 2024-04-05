import React from "react";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";
import { AiOutlineClose, AiOutlineCloudDownload } from "react-icons/ai";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";

const Banner = ({ transferNativeToken }) => {
  return (
    <section
      id="home_section"
      className="section_banner bg_black_dark"
      data-zindex="1"
      data-parallax="scroll"
      data-image-src="assets/images/banner_bg2.png"
    >
      <div className="banner_effect"></div>
      <div className="container">
        <div className="row align-item-center">
          <div className="col-lg-6 col-md-12 com-sm-12 order-lg-first">
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
              >
                <a
                  href="#whitepaper"
                  className="btn btn-default btn-radius nav-link content-popup"
                >
                  Whitepaper
                  <BsArrowRight />
                </a>
                <a href="#token" className="btn btn-border btn-radius">
                  Buy Token Now! <BsArrowRight />
                </a>
              </div>
              <span
                className="text-white icon_title animation"
                data-animation="fadeInUp"
                data-animation-delay="1.4s"
              >
                We Accept:
              </span>
              <ul className="list_none currency_icon">
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.4s"
                >
                  <span className="new_icon_style">
                    <BsCurrencyBitcoin className="new_font_size" />
                  </span>
                  <span>Bitcoin</span>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.4s"
                >
                  <span className="new_icon_style">
                    <FaEthereum className="new_font_size" />
                  </span>
                  <span>Ethereum</span>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.4s"
                >
                  <span className="new_icon_style">
                    <SiLitecoin className="new_font_size" />
                  </span>
                  <span>Litecoin</span>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.4s"
                >
                  <span className="new_icon_style">
                    <SiRipple className="new_font_size" />
                  </span>
                  <span>Ripple</span>
                </li>
              </ul>
              <div className="team_pop mfp-hide" id="whitepaper">
                <div className="row mt-0">
                  <div className="col-md-7">
                    <div className="pt-3 pb-3">
                      <div className="title_dark title_border">
                        <h4>Download Whitepaper</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Obcaecati sint quasi magni molestiae distinctio?
                          Totam, blanditiis, nam doloremque nostrum distinctio
                          hic, explicabo atque consectetur voluptatem rerum quos
                          omnis minima eveniet. Lorem ipsum dolor sit amet
                          consectetur, adipisicing elit. Voluptate quia
                          accusantium reiciendis odio sed animi. Modi totam
                          assumenda ratione repudiandae ea dolorum eius, aliquam
                          in accusamus expedita nesciunt ipsa doloribus?
                        </p>
                        <a href="" className="btn btn-default btn-radius">
                          Download Now
                          <AiOutlineCloudDownload />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <img
                      src="assets/images/whitepaper.png"
                      alt="whitepaper"
                      className="pt-3 pb-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 order-first">
            <div
              className="banner_image_right res_md_mb_50 res_xs_mb_50 animation"
              data-animation="fadeInRight"
              data-animation-delay="1.5s"
            >
              <img
                src="assets/images/banner_img2.png"
                alt="banner"
                className="new_image_css"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import { IoLogoAndroid, IoLogoApple } from "react-icons/io";
import { AiFillAndroid } from "react-icons/ai";

const MobileApp = () => {
  return (
    <section
      className="ng_light_dark"
      id="mobileapp"
      data-z-index="1"
      data-paralax="scroll"
      data-image-src="assets/images/app_bg.png"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="title_default_light title_border text_md_center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Download Mobile App
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                magni qui odio. Ratione, perferendis, corporis facere sint fuga
                cupiditate eos a dolorem, quam pariatur voluptatem distinctio
                dolores in. Nam, natus!
              </p>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                magni qui odio. Ratione, perferendis, corporis facere sint fuga
                cupiditate eos a dolorem, quam pariatur voluptatem distinctio
                dolores in. Nam, natus!
              </p>
            </div>
            <div
              className="btn_group text_md_center animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <a className="btn btn-default btn-radius">
                <AiFillAndroid className="new_font_size" />
                Goggle Store
              </a>
              <a className="btn btn-default btn-radius">
                <IoLogoApple className="new_font_size" />
                Apple Store
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div
              className="res_md_mt_50 res_sm_mt_30 text-center animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <img src="assets/images/mobile_app3.png" alt="mobile logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;

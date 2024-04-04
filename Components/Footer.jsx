import React from "react";

const Footer = () => {
  const footerList = ["Cryptocash", "How Its Work", "Token", "FAQ", "Contact"];
  return (
    <footer>
      <div
        className="top_footer bg_light_dark"
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="assets/images/footer_bg.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div
                className="footer_logo mb-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <a href="#home_section" className="page-scroll">
                  <img src="assets/images/footer_logo.png" alt="footer logo" />
                </a>
              </div>

              <div className="footer_desc">
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur ullam iusto quaerat, quisquam quam ipsa neque,
                  minus ipsum error similique voluptas et quasi, vel rem alias
                  earum modi aliquam? Eveniet.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
              <h4
                className="footer_title border_title animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Quick Links
              </h4>
              <ul className="footer_link">
                {footerList.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay={`0.${2 + index}`}
                    >
                      <a href="#">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
              <div className="newsletter_form">
                <h4 className="footer_title border_title animation">
                  NewsLetter
                </h4>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  ipsam odit voluptatem quisquam iure perferendis ratione odio
                  ut maxime eum!
                </p>
                <form
                  action="#"
                  className="subscribe_form animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  <input
                    type="text"
                    required
                    placeholder="Enter Email Address"
                    className="input-rounded"
                  />
                  <button
                    type="submit"
                    className="btn-info"
                    title="Subscribe"
                    name="submit"
                    value="Submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="copyright">
                Copyright &copy; 2024 all right reserved by @belajarBlockChain
              </p>
            </div>
            <div className="col-md-6">
              <div className="list_none footer_menu">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Term & Conditions</a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

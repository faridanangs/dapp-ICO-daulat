import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";
import { AiOutlineClose, AiOutlineCloudDownload } from "react-icons/ai";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";

const TokenSale = ({ buyToken, tokenSale }) => {
  const [nToken, setNToken] = useState(1);
  const precentage = (tokenSale?.tokenSold / tokenSale?.tokenSaleBalance) * 100;
  const showPercentage = precentage.toString();
  return (
    <section
      id="token"
      className="section_token token_sale bg_light_dark"
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/token_bg.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Token Sale
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                provident nemo aut consequatur enim, sed incidunt, laudantium
                dolorum sapiente sequi distinctio quam, non architecto.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Starting time:{" "}
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                April 04,2024 (mon :21:27 Pm){" "}
              </p>
            </div>
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Ending time:{" "}
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                April 05,2024 (mon :21:27 Pm){" "}
              </p>
            </div>
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Tokens exchange rate
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                1 ETH = 1 BBC, 1ECC = 1 BBC
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="token_sale res_md_mb_40 
            res_md_mt_40 res_sm_mb_30 res_sm_mt_30"
            >
              <div
                className="animation tk_countdown text-center token_countdown_bg"
                data-animation="fadeInUp"
                data-animation-delay="0.1s"
              >
                <div className="field_form">
                  <div className="row">
                    <div
                      className="form_group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.1s"
                    >
                      <input
                        type="number"
                        required
                        placeholder="1"
                        id="first-name"
                        min={1}
                        className="form-control"
                        onChange={(e) => setNToken(e.target.value)}
                        name="token"
                      />
                    </div>
                  </div>
                </div>
                <div className="tk_counter_inner">
                  <div
                    className="animation progress"
                    data-animation="fadeInUp"
                    data-animation-delay="1.3s"
                  >
                    <div
                      className="progress-bar progress-bar-striped gradient"
                      role="progressbar"
                      aria-valuenow={`${precentage}`}
                      aria-valuemin={"0"}
                      aria-valuemax={"100"}
                      style={{ width: `${precentage}` }}
                    >
                      {showPercentage.slice(0, 4)}%
                    </div>
                    <span className="progress_label bg-white inline_style_1">
                      <strong>{tokenSale?.tokenSold} BBC</strong>
                    </span>
                    <span className="progress_label bg-white inline_style_2">
                      <strong>{tokenSale?.tokenSaleBalance} BBC</strong>
                    </span>
                    <span className="progress_min_val">Sale Raised</span>
                    <span className="progress_max_val">Soft Caps</span>
                  </div>
                  <a
                    onClick={() => buyToken(nToken)}
                    className="btn btn-default btn-radius animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    Buy Tokens <BsArrowRight />
                  </a>
                  <ul className="icon_list list_none d-flex justify-content-center">
                    <li
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.5s"
                    >
                      <FaEthereum />
                    </li>
                    <li
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.5s"
                    >
                      <BsCurrencyBitcoin />
                    </li>
                    <li
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.5s"
                    >
                      <SiRipple />
                    </li>
                    <li
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.5s"
                    >
                      <SiLitecoin />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                low - hight 24 h:
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                $4,543343
              </p>
            </div>
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Total tokens sale
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                {tokenSale?.tokenSold} BBC {showPercentage.slice(0, 4)}%
              </p>
            </div>
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Acceptable Currency:
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                BTC, BBC, ETH, XRP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSale;

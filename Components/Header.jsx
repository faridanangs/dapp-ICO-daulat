import React from "react";
import { BiMenu } from "react-icons/bi";

const menuList = [
  {
    menu: "Home",
    link: "#",
  },
  {
    menu: "Service",
    link: "#service",
  },
  {
    menu: "About",
    link: "#about",
  },
  {
    menu: "Token",
    link: "#token",
  },
  {
    menu: "Team",
    link: "#team",
  },
  {
    menu: "Faq",
    link: "#faq",
  },
  {
    menu: "Contact",
    link: "#contact",
  },
];

const Header = ({ address, setAddress, connectWallet }) => {
  return (
    <header className="header_wrap fixed-top">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <a
            href="#home_section"
            data-animation="fadeInDown"
            data-animation-delay="1s"
            className="navbar-brand page-scroll animation"
          >
            <img
              src="assets/images/logo.png"
              alt="logo"
              className="logo_light"
            />
            <img
              src="assets/images/logo_dark.png"
              alt="logo dark"
              className="logo_dark"
            />
          </a>

          <button
            className="navbar-toggler animation"
            type="button"
            data-togle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-animation="fadeInDown"
            data-animation-delay="1.1s"
          >
            <BiMenu />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              {menuList.map((item, index) => {
                return (
                  <li
                    data-animation="fadeInDown"
                    data-animation-delay={`1.${index + 1}s`}
                    className="animation"
                    key={index}
                  >
                    <a href={item.link} className="nav-link">
                      {item.menu}
                    </a>
                  </li>
                );
              })}
            </ul>

            <ul className="navbar-nav nav_btn align-items-center">
              <li
                className="animation"
                data-animation="fadeInDown"
                data-animation-delay="2s"
              >
                {address ? (
                  <a className="btn btn-default btn-radius nav_item">
                    <small className="new-color">
                      {""}
                      {address.slice(0, 15)}...
                    </small>
                  </a>
                ) : (
                  <a
                    onClick={() => connectWallet()}
                    className="btn btn-default btn-radius nav_item"
                  >
                    <small className="new-color">
                      {""}
                      Connect
                    </small>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

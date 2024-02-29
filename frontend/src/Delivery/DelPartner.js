import React, { useEffect, useState } from "react";
import "../Style/Header.css";
// import "../Style/FontStyle.css";
import "../Style/Builder.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DelPartner = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="fl-row fl-row-full-width fl-row-bg-color fl-node-5f4783780b430"
      data-node="5f4783780b430"
    >
      <div
        className="fl-row-content-wrap img-carousel"
        style={{ paddingTop: "50px", paddingBottom: "80px" }}
      >
        <div
          className="fl-row-content fl-row-fixed-width fl-node-content"
          style={{ lineHeight: "24px" }}
        >
          <div
            className="fl-col-group fl-node-5f4783780b42b"
            data-node="5f4783780b42b"
          >
            <div
              className="fl-col fl-node-5f4783780b42e"
              data-node="5f4783780b42e"
            >
              <div className="fl-col-content fl-node-content" style={{}}>
                <div
                  className="fl-module fl-module-uabb-heading fl-node-5f4783780b42f"
                  data-node="5f4783780b42f"
                >
                  <div className="fl-module-content fl-node-content">
                    <div className="uabb-module-content uabb-heading-wrapper uabb-heading-align-center ">
                      <h2 className="uabb-heading">
                        {" "}
                        <span className="uabb-heading-text">
                        Delivery Partner
                        </span>
                      </h2>
                      <div className="uabb-module-content uabb-separator-parent">
                        <div className="uabb-separator"></div>
                      </div>
                      <div
                        className="uabb-subheading uabb-text-editor"
                        style={{ lineHeight: "22.5px" }}
                      >
                        <p
                          style={{
                            color: "#1a202c",
                            margin: "0px",
                            letterSpacing: "0px",
                          }}
                        >
                          Save time by directly integrating into major cart
                          solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="fl-col-group fl-node-5f4783780b42a"
            data-node="5f4783780b42a"
          >
            <div
              className="fl-col fl-node-5f4783780b42c"
              data-node="5f4783780b42c"
            >
              <div className="fl-col-content fl-node-content">
                <div
                  className="fl-module fl-module-uabb-image-carousel fl-node-5f4783780b42d brand-logos"
                  data-node="5f4783780b42d"
                >
                  <div className="fl-module-content fl-node-content">
                    {!isMobileView ? (
                      <div className="uabb-module-content uabb-image-carousel uabb-img-col-5 slick-initialized slick-slider">
                        <div
                          aria-live="polite"
                          className="slick-list draggable"
                          style={{ height: "82px" }}
                        >
                          <div className="slick-track">
                            <div
                              className="uabb-image-carousel-item slick-slide slick-current slick-active"
                              data-slick-index="0"
                              aria-hidden="false"
                              style={{ width: "200px" }}
                            >
                              <div className="uabb-image-carousel-content">
                                {" "}
                                <img
                                  className="uabb-gallery-img"
                                  alt=""
                                  title="zomato"
                                  style={{ opacity: 1 }}
                                  src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                                />
                              </div>
                            </div>
                            <div
                              className="uabb-image-carousel-item slick-slide slick-active"
                              data-slick-index="1"
                              aria-hidden="false"
                              style={{ width: "200px" }}
                            >
                              <div className="uabb-image-carousel-content">
                                {" "}
                                <img
                                  className="uabb-gallery-img"
                                  alt=""
                                  title="FoodPanda"
                                  style={{ opacity: 1 }}
                                  src="https://www.foodpanda.com/wp-content/uploads/2023/06/foodpanda_logo_2023.svg"
                                />
                              </div>
                            </div>
                            <div
                              className="uabb-image-carousel-item slick-slide slick-active"
                              data-slick-index="2"
                              aria-hidden="false"
                              style={{ width: "200px" }}
                            >
                              <div className="uabb-image-carousel-content">
                                {" "}
                                <img
                                  className="uabb-gallery-img"
                                  alt=""
                                  title="UberEats"
                                  style={{ opacity: 1 }}
                                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
                                />
                              </div>
                            </div>
                            <div
                              className="uabb-image-carousel-item slick-slide slick-active"
                              data-slick-index="3"
                              aria-hidden="false"
                              style={{ width: "200px" }}
                            >
                              <div className="uabb-image-carousel-content">
                                {" "}
                                <img
                                  className="uabb-gallery-img"
                                  alt=""
                                  title="swiggy"
                                  style={{ opacity: 1 }}
                                  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
                                />
                              </div>
                            </div>
                            <div
                              className="uabb-image-carousel-item slick-slide slick-active"
                              data-slick-index="4"
                              aria-hidden="false"
                              style={{ width: "200px" }}
                            >
                              <div className="uabb-image-carousel-content">
                                {" "}
                                <a href={"#"}>
                                  <img
                                    className="uabb-gallery-img"
                                    alt=""
                                    title="EatFit"
                                    style={{ opacity: 1 }}
                                    src="	https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/eatfit-logo-horizontal.svg
                                    "
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Slider {...settings}>
                        <div
                          className="uabb-image-carousel-item slick-slide slick-current slick-active"
                          data-slick-index="0"
                          aria-hidden="false"
                          style={{ width: "200px" }}
                        >
                          <div className="uabb-image-carousel-content">
                            {" "}
                            <img
                              className="uabb-gallery-img"
                              alt=""
                              title="amazong1"
                              style={{ opacity: 1 }}
                              src="https://fastcourier.com.au/wp-content/uploads/2023/05/amazong1-300x91.png"
                            />
                          </div>
                        </div>
                        <div
                          className="uabb-image-carousel-item slick-slide slick-active"
                          data-slick-index="1"
                          aria-hidden="false"
                          style={{ width: "200px" }}
                        >
                          <div className="uabb-image-carousel-content">
                            {" "}
                            <img
                              className="uabb-gallery-img"
                              alt=""
                              title="EBay_logo1"
                              style={{ opacity: 1 }}
                              src="https://fastcourier.com.au/wp-content/uploads/2023/05/EBay_logo1-300x119.png"
                            />
                          </div>
                        </div>
                        <div
                          className="uabb-image-carousel-item slick-slide slick-active"
                          data-slick-index="2"
                          aria-hidden="false"
                          style={{ width: "200px" }}
                        >
                          <div className="uabb-image-carousel-content">
                            {" "}
                            <img
                              className="uabb-gallery-img"
                              alt=""
                              title="magento1"
                              style={{ opacity: 1 }}
                              src="https://fastcourier.com.au/wp-content/uploads/2023/05/magento1-300x88.png"
                            />
                          </div>
                        </div>
                        <div
                          className="uabb-image-carousel-item slick-slide slick-active"
                          data-slick-index="3"
                          aria-hidden="false"
                          style={{ width: "200px" }}
                        >
                          <div className="uabb-image-carousel-content">
                            {" "}
                            <img
                              className="uabb-gallery-img"
                              alt=""
                              title="shopify1"
                              style={{ opacity: 1 }}
                              src="https://fastcourier.com.au/wp-content/uploads/2023/05/shopify1-300x87.png"
                            />
                          </div>
                        </div>
                        <div
                          className="uabb-image-carousel-item slick-slide slick-active"
                          data-slick-index="4"
                          aria-hidden="false"
                          style={{ width: "200px" }}
                        >
                          <div className="uabb-image-carousel-content">
                            {" "}
                            <a href={"#"}>
                              <img
                                className="uabb-gallery-img"
                                alt=""
                                style={{ opacity: 1 }}
                                src="https://fastcourier.com.au/wp-content/uploads/2023/05/woocommerce1-300x143.png"
                              />
                            </a>
                          </div>
                        </div>
                      </Slider>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DelPartner;

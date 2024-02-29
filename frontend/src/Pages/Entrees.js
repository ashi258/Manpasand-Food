import React, { useState, useEffect } from "react";
// import Card from "../components/Card";
import Card from "../components/Card/Card";


import "../Pages/Items.css";
// import "../Style/FontStyle.css";
import "../Style/Builder.css";

const Items = () => {
    const [search, setSearch] = useState("");

  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch(`${window.location.origin}/api/foodData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response[0], response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div class="App_container__eSJ6i">
      <header class="Header_root__jsaeH">
        <nav class="Stepper_root__239UF">
          <a
            aria-current="page"
            class="Stepper_link__1DEGw Stepper_active__2FKvN"
            href="#/package-details"
          >
           Appetizers
          </a>
          <a
            class="Stepper_link__1DEGw Stepper_disabled__2LjnP"
            href="#/quotes-comparisons"
          >
            Entrees
          </a>
          <a
            class="Stepper_link__1DEGw Stepper_disabled__2LjnP"
            href="#/shipment-details"
          >
            Accompaniments
          </a>
          <a
            class="Stepper_link__1DEGw Stepper_disabled__2LjnP"
            href="#/additional-info"
          >
            Desserts
          </a>
          <a
            class="Stepper_link__1DEGw Stepper_disabled__2LjnP"
            href="#/payment"
          >
            Beverages
          </a>
        </nav>
      </header>
      <div class="OverlaySpinner_root__9d42d">
        <div class="OverlaySpinner_spinner__16lT6">
          <div class="OverlaySpinner_bounce1__2VPaS"></div>
          <div class="OverlaySpinner_bounce2__2gGBw"></div>
          <div class="OverlaySpinner_bounce3__1CTh_"></div>
        </div>
      </div>
      <h1 class="H1_root__3WqhR H1_center__2uPSj H1_includeBorder__3EqKH PackageDetails_heading__3Q4em">
        
      </h1>
      <div>
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div class="carousel-inner" id="carousel">
            <div class="carousel-caption" style={{ zIndex: "10" }}>
              <div class="d-flex justify-content-center">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              
              </div>
            </div>
            <div class="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900×700/?burger"
                class="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×700/?pastry"
                class="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×700/?barbeque"
                class="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== [] ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              foodItem={filterItems}
                              options={filterItems.options[0]}
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>No such data found</div>
                  )}
                </div>
              );
            })
          : ""}
        {/* <Card /> */}
      </div>
    </div>
  );
};

export default Items;

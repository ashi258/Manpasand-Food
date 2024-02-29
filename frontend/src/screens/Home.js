import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import Card from "../components/Card";
import Reviews from "../screens/Reviews";
import Items from "../Pages/Items";
import DelPartner from "../Delivery/DelPartner";
// import Carousal from "../components/Carousal";

const Home = () => {
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
    <div>
      <div>
        <Navbar />
      </div>
      <div><Items /></div>
      <div><DelPartner /></div>
      <div><Reviews /></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

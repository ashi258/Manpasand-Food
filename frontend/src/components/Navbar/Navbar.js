import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useCart, useDispatchCart } from "../ContextReducer/ContextReducer";
import Modal from "../../Modal";
import Cart from "../../screens/Cart";
import "../Navbar/Navbar.css";
import "/Manpasand/gofood/frontend/src/Style/Header.css"
// import "../Style/FontStyle.css";
import "/Manpasand/gofood/frontend/src/Style/Builder.css"

const Navbar = () => {
  const [cartview, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-success"> */}
      <nav className="navbar navbar-expand-lg navbar-dark f1-col">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 " to="/">
           Manpasand
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/myOrder"
                  >
                    My Order
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>
                <Link
                  className="btn bg-white text-success mx-1"
                  to="/createuser"
                >
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="btn bg-white text-succes mx-2"
                  onDoubleClick={() => {
                    setCartView(true);
                  }}
                >
                  My Cart{" "}
                
                   {data ? (
            <Badge pill bg="danger">
              {data.length}
            </Badge>
          ) : null}
                </div>
                {cartview ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />
                  </Modal>
                ) : null}
                <div
                  className="btn bg-white text-danger mx-2"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="fl-module-content fl-node-content">
          <h1
            className="fl-heading"
            // style={{ letterSpacingstart: "-0.6px" }}
            style={{ letterSpacing: "0px" }}
          >
            {" "}
            <span className="fl-heading-text" style={{ letterSpacing: "0px" }}>
            "Taste The World On a Plate"
            </span>
          </h1>
        </div>
    </div>
  );
};

export default Navbar;

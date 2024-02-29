const express = require("express");
const router = express.Router();
const User = require("../models/User");

// const Order = require("../models/Order");

const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "Ashish12345";

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Password should be at least 5 characters long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, salt);

    //  console.log("Creating user with data:", secPassword);
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
      });

      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Password should be at least 5 characters long").isLength({
      min: 5,
    }),

  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const email = req.body.email;
      const userData = await User.findOne({ email });

      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct email" });
      }

      console.log("req.body.password:", req.body.password);
      console.log("userData.password:", userData.password);

      const pwdCompare = await bcrypt.compare(
        req.body.password, 
        userData.password
      );
      console.log(pwdCompare);

      if (!pwdCompare) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct password" });
      }

      const data = {
        user: {
          id: userData.id,
        },
      };
      const authToken = jwt.sign(data, jwtSecret);
      return res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false });
    }
  }
);




module.exports = router;

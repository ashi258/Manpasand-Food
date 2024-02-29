const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    console.log("global.data");
    res.send([global.data, global.foodlist]);
  } catch {
    console.error(error.message);
    res.send("server Error");
  }
});

module.exports = router;

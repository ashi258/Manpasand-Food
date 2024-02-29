const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
require('dotenv').config();

const mongoDB = require("./db");
mongoDB();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    // Handle preflight requests immediately and end the request-response cycle.
    return res.status(200).end();
  }

  
  next();
});
app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
app.use("/api", require("./Routes/Payment"));


app.get("/", (req, res) => {
  // res.send("Hello World!");
app.use(express.static(path.resolve(__dirname, "frontend", "build")))
  res.sendFile(path.resolve(__dirname,"frontend","build",'index.html'))
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

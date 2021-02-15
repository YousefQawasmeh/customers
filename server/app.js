const express = require("express");
const app = express();
const axios = require("axios");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("0");
});

app.get("/api/:customerUrl", async (req, res) => {
  const resp = await axios(
    "https://you97sef.herokuapp.com/api/getRecordsUrl/" + req.params.customerUrl
  ).catch((err) => {
    res.redirect("/");
    console.log("00000000001", err, "0000000001");
  });
  res.json(resp.data);
});

app.use((req, res) => {
  res.redirect("/");
});

module.exports = app;

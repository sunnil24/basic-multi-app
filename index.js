const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient();
client.set("vistorsCount", 0);

app.get("/", (req, res) => {
  client.get("visitorsCount", (error, visitors) => {
    res.send("Number of visters is " + visitors);
    client.set("vistorsCount", parseInt(visitors) + 1);
  });
});

app.listen("8080", () => {
  console.log("app is running on port 8080");
});

const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});
client.set("visitorsCount", 0);

app.get("/", (req, res) => {
  client.get("visitorsCount", (error, visits) => {
    res.send("Number of visters is " + visits);
    client.set("visitorsCount", parseInt(visits) + 1);
  });
});

app.listen("8080", () => {
  console.log("app is running on port 8080");
});

const express = require("express");

const app = express();

app.use(express.json());

app.get("/hello", (req, res, next) => {
  res.send("Hello world!");
});

app.post("/sum", (req, res, next) => {
  const { a, b } = req.body;
  res.send(a + b);
});

app.listen(9000);

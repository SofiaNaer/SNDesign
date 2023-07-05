const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/products", (req, res) => {
  fs.readFile("./products.json", "utf8", (err, data) => {
    if (err) console.log("error!");
    if (data) {
      const products = JSON.parse(data);
      res.send(products);
    }
  });
});
app.listen(5000);

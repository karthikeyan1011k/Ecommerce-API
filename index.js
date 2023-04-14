const express = require("express");
const app = express();
const port = 6506;
//require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRouter = require("./routes/products");

// connecting to database
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/ECommerce_API").then(() => console.log("DBConnection is Successful")).catch((err) => { console.log(err); });

// connecting to server
app.listen(port, () => {
    console.log("Backend Server is running on port " , port);
});

// middleware 
app.use(bodyParser.json());
app.use("/products", productRouter);
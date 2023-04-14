const express = require("express");
const app = express();
const port = process.env.PORT || 6509;
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRouter = require("./routes/products");

// connecting to database
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI).then(() => console.log("DBConnection is Successful")).catch((err) => { console.log(err); });

// connecting to server
app.listen(port, () => {
    console.log("Backend Server is running on port " , port);
});

// middleware 
app.use(bodyParser.json());
app.use("/products", productRouter);
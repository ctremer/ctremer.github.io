const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
    .connect("mongodb+srv://remerc:bvfQcxXUwB35c7VK@csce242-final.sc7ujjl.mongodb.net/")
    .then(() =>{
        console.log("Connected to MongoDB");
    })

    app.listen(3000, () => {
        console.log("I'm listening.")
    })
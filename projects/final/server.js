const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express(); 
app.use(express.static(__dirname));
app.use(bodyParser.json());;

mongoose
    .connect("mongodb+srv://remerc:OTfkHGJ2ASoaSde8@csce242-final.sc7ujjl.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to MongoDB");
    });

const reviewSchema = new mongoose.Schema({
    name: String,
    review: String,
    rating: String,
});

const Review = mongoose.model("Review", reviewSchema);

app.post("/api/reviews", async (req, res) => {
    try {
        const { name, review, rating } = req.body;
        const newReview = new Review({ name, review, rating });
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/api/reviews", async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.delete("/api/reviews/:id", async (req, res) => {
    try {
        const reviewId = req.params.id;
        const deletedReview = await Review.findByIdAndDelete(reviewId);

        if (!deletedReview) {
            return res.status(404).json({ error: "Review not found" });
        }
        
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/reviews.html");
});

app.listen(3000, () => {
    console.log("I'm listening.");
});

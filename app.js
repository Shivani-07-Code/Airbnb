const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("hi i am root");
});

app.get("/listing", async (req, res) => {
    const allListings = await listing.find({});
    console.log(allListings);
    res.send(allListings);
});

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing ({
//         title: "My New Villa",
//         description: "By the Jungle", 
//         price : 2000,
//         location : "Goa",
//         country : "India",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });

app.listen(8080, () => {
    console.log("server is listening to port");
})
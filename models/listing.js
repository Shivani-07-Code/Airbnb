const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image : {
        type: String,
        default: "https://unsplash.com/photos/red-truss-bridge-on-river-zA-s0jKIJ4o",
        set: (v) => v === "" ? "https://unsplash.com/photos/red-truss-bridge-on-river-zA-s0jKIJ4o" : v,
    },
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;